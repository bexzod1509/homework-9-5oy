const Api = "https://fakestoreapi.com/products";
const skeleton = document.querySelector(".c-skeleton");
const wrapper = document.querySelector(".c");
async function fetchData(api) {
  let data = await fetch(api);
  data
    .json()
    .then((res) => createCard(res))
    .catch((err) => console.log(err))
    .finally(() => {
      skeleton.classList.add("hidden");
    });
}
fetchData(Api);
function createCard(data) {
  let fragment = document.createDocumentFragment();
  data.forEach((element) => {
    const card = document.createElement("div");
    card.classList.add("c1");
    card.innerHTML = `<img
    name="product-image"
    data-id=${element.id}
    class="c3"
    src="${element.image}"
    alt=""
  />
  <div class="c2">
    <p>НОВИНКА</p>
    <div class="c9">
      <img src="./images/heart gray.svg" alt="" />
      <img src="./images/compare_gray.svg" alt="" />
    </div>
  </div>
  <h1>${element.title}</h1>
  <div class="c4">
    <img class="c5" src="./images/stars.jpg" alt="" />
    <div class="c6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        style="fill: #c2c6d1"
      >
        <path
          d="M16 2H8C4.691 2 2 4.691 2 8v12a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm4 13c0 2.206-1.794 4-4 4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4v7z"
        ></path>
      </svg>
      <p>0 oтзывов</p>
    </div>
  </div>
  <h2>${element.price}$</h2>
  <h3>Количество продуктов ${element.rating?.count}</h3>
  <div class="c7">
    <button>Купить сейчас</button>
    <div class="c8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        style="fill: rgba(255, 255, 255, 1)"
      >
        <path
          d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921z"
        ></path>
        <circle cx="10.5" cy="19.5" r="1.5"></circle>
        <circle cx="17.5" cy="19.5" r="1.5"></circle>
      </svg>
    </div>
  </div>`;
    fragment.appendChild(card);
  });
  wrapper.appendChild(fragment);
}
//single route///////////////////////
const singleRoute = (id) => {
  console.log(id);
  window.open(`/single.html?id=${id}`, "_self");
};
wrapper.addEventListener("click", (e) => {
  if (e.target.name === "product-image") {
    let id = e.target.dataset.id;
    singleRoute(id);
  }
});
//responsive navbar///////////////
function toggleNavbar() {
  document.getElementById("navbar-responsive").classList.toggle("open");
}

document.getElementById("menu-btn").addEventListener("click", toggleNavbar);
