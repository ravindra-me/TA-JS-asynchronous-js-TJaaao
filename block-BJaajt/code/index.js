// let input = document.querySelector('input');
// let img = document.querySelector('img');
// let h2 = document.querySelector('h2');

// // let xhr = new XMLHttpRequest();
// // xhr.open('GET', 'https://api.github.com/users/ravindra-me');
// // xhr.onload = function () {
// //   let data = JSON.parse(xhr.response);
// //   console.log(data);
// // };
// // xhr.send();
// // console.log(xhr);

// function createUi(data) {
//   console.log(data);
//   h2.innerText = data.name;
//   img.src = data.avatar_url;
// }

// function handleChange(event) {
//   console.log(event.keyCode);
//   if (event.keyCode === 13) {
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', `https://api.github.com/users/${event.target.value}`);
//     xhr.onload = function () {
//       let data = JSON.parse(xhr.response);
//       createUi(data);
//     };
//     xhr.send();
//   }
// }

// input.addEventListener('keyup', handleChange);
