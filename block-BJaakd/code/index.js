function fetch(url) {
  return new Promise((res, rej) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => res(JSON.parse(xhr.response));
    xhr.onerror = () => rej('something went wrong');
    xhr.send();
  });
}

let data = fetch('https://api.github.com/users/ravindra-me').then((res) =>
  console.log(res)
);

let imageconatiner = document.querySelector('.img-container');
let input = document.querySelector('input');
let imgDiv = document.querySelector('.font-0');

function createUi(data) {
  imageconatiner.innerHTML = '';
  let images = data
    .map((ele) => {
      return `<div class="font-0">
          <img
            src= ${ele.urls.small}
            alt=""
          />
        </div>`;
    })
    .join('');
  console.log(images);
  imageconatiner.innerHTML = images;
}

function changeHandle(event) {
  if (event.keyCode === 13) {
    let val = event.target.value;
    fetch(
      `https://api.unsplash.com/search/photos?query=${val}&client_id=cbktwRcMdPLPnGM1cpYPvzejdq3_KwSZ_bQjNLZNj1g`
    ).then((data) => createUi(data.results));
  }
}

input.addEventListener('keyup', changeHandle);

let redomImage = fetch(
  'https://api.unsplash.com/photos/random?query=office&client_id=cbktwRcMdPLPnGM1cpYPvzejdq3_KwSZ_bQjNLZNj1g&count=10'
).then((data) => createUi(data));
let searchImage = fetch();
