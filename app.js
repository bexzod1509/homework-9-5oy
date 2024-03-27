const Api = "https://fakestoreapi.com/products";
const mainsection = document.querySelector(".main");
const loading = document.querySelector(".loading");
async function fetchData(api) {
  let query = new URLSearchParams(window.location.search);
  let id = query.get("id");
  let data = await fetch(`${api}/${id}`);
  data
    .json()
    .then((res) => createRoute(res))
    .catch((err) => console.log(err))
    .finally(() => {
      loading.classList.add("hidden");
    });
}
fetchData(Api);

function createRoute(data) {
  mainsection.innerHTML = `
        <div class="container">
          <div class="paragraph">
            <p>Главная > ${data.category} > <b>${data.title}</b></p>
          </div>
        </div>
        <section>
          <div class="container">
            <div class="card">
              <div class="img">
                <img
                  class="img1"
                  src=${data.image}
                  alt=""
                />
                <div class="like">
                  <p>Новинка</p>
                  <div class="compare">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      style="fill: #008dff"
                    >
                      <path
                        d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"
                      ></path>
                    </svg>
                    <img src="./images/compare_gray.svg" alt="" />
                  </div>
                </div>
              </div>
              <div class="description">
                <h1>${data.title}</h1>
                <div class="rating">
                  <img src="./images/stars.jpg" alt="" />
                  <div class="comment">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      style="fill: #c2c6d1"
                    >
                      <path
                        d="M16 2H8C4.691 2 2 4.691 2 8v12a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm4 13c0 2.206-1.794 4-4 4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4v7z"
                      ></path>
                    </svg>
                    <p>0 отзывов</p>
                  </div>
                  <div class="share">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      style="fill: #008dff"
                    >
                      <path
                        d="M5.5 15a3.51 3.51 0 0 0 2.36-.93l6.26 3.58a3.06 3.06 0 0 0-.12.85 3.53 3.53 0 1 0 1.14-2.57l-6.26-3.58a2.74 2.74 0 0 0 .12-.76l6.15-3.52A3.49 3.49 0 1 0 14 5.5a3.35 3.35 0 0 0 .12.85L8.43 9.6A3.5 3.5 0 1 0 5.5 15zm12 2a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5zm0-13A1.5 1.5 0 1 1 16 5.5 1.5 1.5 0 0 1 17.5 4zm-12 6A1.5 1.5 0 1 1 4 11.5 1.5 1.5 0 0 1 5.5 10z"
                      ></path>
                    </svg>
                    <p>Поделиться</p>
                  </div>
                </div>
                <h2>${data.price}$</h2>
                <h3>Кодичество ${data.rating?.count}</h3>
                <h4>Модель: <b>-----------------</b></h4>
                <h4>
                  Наличии: <b>-----------------</b>
                  <p class="green">В наличии</p>
                </h4>
                <div class="btn">
                  <button class="btn1">
                    <img src="./images/cart-white.svg" alt="" />
                    Добавить в корзину
                  </button>
                  <button class="btn2">Купить сейчас</button>
                </div>
                <p class="btn3">Проголосуйте:</p>
                <div class="thumb">
                  <div class="thumb1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2zM20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2z"
                      ></path>
                    </svg>
                    <p>Я рекомендую</p>
                  </div>
                  <span>0</span>
                </div>
              </div>
              <div class="payment">
                <h1>Рассрочка платежа</h1>
                <div class="button">
                  <button>3 мес.</button>
                  <button>6 мес.</button>
                  <button>12 мес.</button>
                </div>
                <div class="uzum">
                  <div class="i">
                    <p>Рассрочка от партнера UzumNasiya</p>
                    <span>i</span>
                  </div>
                  <div class="nasiya">
                    <img src="./images/uzumnasiya.svg" alt="" />
                    <p>${(data.price / 12).toFixed(2)}$</p>
                  </div>
                  <button>Заказать в рассрочку</button>
                </div>
                <div class="uzum1">
                  <div class="i">
                    <p>Рассрочка от Asaxiy</p>
                    <span>i</span>
                  </div>
                  <div class="nasiya">
                    <img src="./images/asaxiy-logo.svg" alt="" />
                    <p>${(data.price / 12 + 0.2).toFixed(2)}$</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  `;
}
//responsive navbar///////////////
function toggleNavbar() {
  document.getElementById("navbar-responsive").classList.toggle("open");
}
document.getElementById("menu-btn").addEventListener("click", toggleNavbar);
