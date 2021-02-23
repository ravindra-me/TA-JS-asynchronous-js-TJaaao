let img = document.querySelector('.img');
let btn = document.querySelector('.btn');
let verified = document.querySelector('h2');

// https://cat-fact.herokuapp.com/facts/random

function catfact() {
  console.log('catfact');
  let cat = new XMLHttpRequest();
  cat.open('GET', 'https://cat-fact.herokuapp.com/facts/random');
  cat.onload = function () {
    let catFactStatus = JSON.parse(cat.response);
    console.log(catFactStatus.status.verified);
    if (catFactStatus.status.verified === true) {
      verified.innerText = 'It is verified';
    } else {
      verified.innerText = 'It is not verified';
    }
  };
  cat.send();
}

function changeHandle(event) {
  let catImg = new XMLHttpRequest();
  catImg.open(
    'GET',
    'https://api.thecatapi.com/v1/images/search?limit=1&size=full'
  );
  catImg.onload = function () {
    let imgData = JSON.parse(catImg.response);
    img.src = imgData[0].url;
  };
  catfact();
  catImg.send();
}

btn.addEventListener('click', changeHandle);
