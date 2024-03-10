const API__URL = "https://jsonplaceholder.typicode.com/comments";
const postWrapper = document.querySelector(".post__wrapper");

async function fetchData(api) {
  let data = await fetch(api);
  data
    .json()
    .then((res) => createCard(res))
    .catch((err) => console.log(err));
}
fetchData(API__URL);

function createCard(data) {
  data.forEach(({ name, body, email }) => {
    let card = document.createElement("div");
    card.className = "col-3";
    card.innerHTML = `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${body}</p>
            <a href="#" class="btn btn-primary">${email}</a>
        </div>
        </div>
    `;

    postWrapper.appendChild(card);
  });
}
