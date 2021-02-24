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

function createUiFoll(data) {
  if (data.length > 5) {
    followerBox.innerHTML = '';
    let arr = data
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
    let arr = data
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
}

function changeHandle(event) {
  if (event.keyCode === 13) {
    let inputVAl = event.target.value;
    fetch(`https://api.github.com/users/${inputVAl}`)
      .then((data) => data.json())
      .then((data) => {
        createUi(data);
        return fetch(data.followers_url);
      })
      .then((data) => data.json())
      .then((data) => createUiFoll(data));
  }
}

input.addEventListener('keyup', changeHandle);
