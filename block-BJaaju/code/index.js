let imageconatiner = document.querySelector('.img-container');
let input = document.querySelector('input');
let imgDiv = document.querySelector('.font-0');

// https://api.unsplash.com//photos/random/?client_id=cbktwRcMdPLPnGM1cpYPvzejdq3_KwSZ_bQjNLZNj1g

// https://api.unsplash.com/search/photos/?client_id=cbktwRcMdPLPnGM1cpYPvzejdq3_KwSZ_bQjNLZNj1g

function addImage() {
  let xhr = new XMLHttpRequest();
  xhr.open(
    'GET',
    'https://api.unsplash.com/photos/random?query=office&client_id=cbktwRcMdPLPnGM1cpYPvzejdq3_KwSZ_bQjNLZNj1g&count=10'
  );
  xhr.onload = function () {
    let xhrImgs = JSON.parse(xhr.response);
    createUi(xhrImgs);
  };
  xhr.send();
}

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

addImage();

function changeHandle(event) {
  if (event.keyCode === 13) {
    let val = event.target.value;
    console.log(val);
    let imgs = new XMLHttpRequest();
    imgs.open(
      'GET',
      `https://api.unsplash.com/search/photos?query=${val}&client_id=cbktwRcMdPLPnGM1cpYPvzejdq3_KwSZ_bQjNLZNj1g`
    );
    imgs.onload = function () {
      let imgsArr = JSON.parse(imgs.response);
      console.log(imgsArr);
      createUi(imgsArr.results);
    };
    imgs.send();
  }
}

input.addEventListener('keyup', changeHandle);
