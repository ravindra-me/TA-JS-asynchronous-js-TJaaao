const input = document.querySelector('input');
let profileImg = document.querySelector('.profile-img');
let userName = document.querySelector('.username');
let followerBox = document.querySelector('.follower-box');
let follower = document.querySelector('.numberOf-follower');
let following = document.querySelector('.numberOf-following');
function createUi(data) {
  userName.innerText = data.name;
  profileImg.src = data.avatar_url;
  follower.innerText = data.followers;
  following.innerText = data.following;
}

function createUiFoll(inputVAl) {
  let userName = inputVAl;
  let follo = new XMLHttpRequest();
  follo.open('GET', `https://api.github.com/users/${userName}/followers`);
  follo.onload = function () {
    let followersData = JSON.parse(follo.response);
    console.log(followersData);
    if (followersData.length > 5) {
      followerBox.innerHTML = '';
      let arr = followersData
        .slice(0, 5)
        .map((ele) => {
          return `<li class="flex-18 flex justify-center flex-column align-center">
          <img
            src= ${ele.avatar_url}
            alt=""
          />
          <h3>${ele.login}</h3>
        </li>`;
        })
        .join('');
      console.log(arr);
      followerBox.innerHTML = arr;
    } else {
      followerBox.innerHTML = '';
      let arr = followersData
        .map((ele) => {
          return `<li class="flex-18 flex justify-center flex-column align-center">
          <img
            src= ${ele.avatar_url}
            alt=""
          />
          <h3>${ele.login}</h3>
        </li>`;
        })
        .join('');
      console.log(arr);
      followerBox.innerHTML = arr;
    }
  };
  follo.send();
}

function changeHandle(event) {
  if (event.keyCode === 13) {
    let xhr = new XMLHttpRequest();
    let inputVAl = event.target.value;
    xhr.open('GET', `https://api.github.com/users/${inputVAl}`);
    xhr.onload = function () {
      let data = JSON.parse(xhr.response);
      console.log(data);
      createUi(data);
      createUiFoll(inputVAl);
    };
    xhr.send();
  }
}

input.addEventListener('keyup', changeHandle);
