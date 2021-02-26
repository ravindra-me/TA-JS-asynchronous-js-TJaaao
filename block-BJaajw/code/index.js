let input = document.querySelector('input');

function changeHandle(event) {
  if (event.keyCode === 13) {
    let val = event.target.value;
    fetch(
      `https://api.domainsdb.info/v1/domains/search?domain=${val}`
    ).then((data) => data.json());
  }
}

input.addEventListener('keyup', changeHandle);
