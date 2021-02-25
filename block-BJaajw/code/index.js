let input = document.querySelector('input');

function changeHandle(event) {
  if (event.keyCode === 13) {
    let val = event.target.value;
    let getData = async () => {
      let serarchData = await fetch(
        `https://api.domainsdb.info/v1/domains/search?domain=${val}`
      );
      serarchData
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    };
    getData();
  }
}

input.addEventListener('keyup', changeHandle);
