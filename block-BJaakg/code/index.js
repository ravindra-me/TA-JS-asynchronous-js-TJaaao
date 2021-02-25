let container = document.querySelector('.container');
let input = document.querySelector('.input');
let houseName = document.querySelector('.peopleName');

function createUi(data = []) {
  container.innerHTML = '';
  data.forEach((people) => {
    let article = document.createElement('article');
    article.classList.add('article', 'flex-31');
    let div = document.createElement('div');
    div.classList.add('flex', 'align-center');
    let img = document.createElement('img');
    img.src = people.image;
    let h3 = document.createElement('h3');
    h3.innerText = people.name;
    let p = document.createElement('p');
    p.classList.add('text');
    p.innerText = people.description;
    let div2 = document.createElement('div');
    div2.classList.add('width-100');
    let a = document.createElement('a');
    a.classList.add('btn', 'width-100');
    a.innerText = 'Learn More!';
    div.append(img, h3);
    div2.append(a);
    article.append(div, p, div2);
    container.append(article);
  });
}
let data = fetch(
  'https://raw.githubusercontent.com/nnnkit/json-data-collections/master/got-houses.json'
)
  .then((data) => {
    if (!data.ok) {
      throw new Error(`error happen: ${data.status}`);
    }
    return data.json();
  })
  .then((data) => {
    let ui = data['houses'].map((ele, i) => {
      let obj = {};
      obj[ele.name] = ele.people;
      return obj;
    });
    let names = ui
      .map((ele, i) => {
        return `
        <a class="btn" data-id=${i}>${Object.keys(ele)[0]}</a>
        `;
      })
      .join('');
    houseName.innerHTML = names;
    return ui;
  })
  .then((data) => {
    houseName.addEventListener('click', (event) => {
      if (event.target.dataset.id) {
        let id = event.target.dataset.id;
        let nameInnerText = event.target.text;
        createUi(data[id][nameInnerText]);
      }
    });
    createUi(
      data
        .map((ele) => {
          return Object.values(ele);
        })
        .flat()
        .flat()
    );
  })
  .catch((error) => console.log(error));
