
let btn = document.querySelector(".open_basket");
let navBar = document.querySelector(".basket_container");

btn.addEventListener("click", ()=>{
    navBar.classList.toggle("on"); 
    btn.value = btn.value = "inchide cos"
});

const products = [
    {
      id: 1,
      img: "./imagini/Fiesta.jpeg",
      nume: "Fiesta",
      continut:
        "Piept de pui, mozzarella, ceapa rosie, ardei gras, rosii proaspete, salam chorizo, sos chipotle, sos ranch, usturoi granulat",
      pret: 29.9,
    },
    {
      id: 2,
      img: "./imagini/Margherita Classic.jpeg",
      nume: "Margherita Classic",
      continut: "Mozzarella, sos de rosii",
      pret: 29.9,
    },
    {
      id: 3,
      img: "./imagini/Dracula.jpeg",
      nume: "Dracula",
      continut:
        "Sos de rosii, salam chorizo, ardei jalapeno, salam pepperoni, mozzarella, sos chipotle",
      pret: 29.9,
    },
    {
      id: 4,
      img: "./imagini/Rustica.jpeg",
      nume: "Rustica",
      continut:
        "Piept de pui, sunca, ceapa rosie, mozzarella, ardei gras, sos de rosii, porumb",
      pret: 29.9,
    },
  ];
  
  
  let productsBlock = document.querySelector(".products");
let basket = document.querySelector(".basket");
let logo = document.querySelector(".logo-nav");
let open_basket = document.querySelector('.open_basket')
let basket_container = document.querySelector('.basket_container')
open_basket.addEventListener('click', ()=>{
  basket_container.classList.toggle('show')
})

products.forEach((element, id) => {
  let list = `
  <div class="container-pizza">
  <div class="pizza-box">
  <img src="${element.img}">
  <h3>${element.nume}</h3>
  <br>
  <p>${element.continut}</p>
  </div>
  <div class="info">
  <p><b>de la ${element.pret} lei</b></p>
  <form>
   <button class="addBut">Alege</button>
  </form>
  </div>
  </div>
    `;
  productsBlock.innerHTML += list;
});

let addBut = document.querySelectorAll(".addBut");
console.log(addBut);

for (let i = 0; i < products.length; i++) {
  const element = products[i];
  
  let but = addBut[i];

  but.addEventListener("click", () => {
    
    let index = element.id;
    
    let object = products.find(function (elem) {
      return elem.id === index;
    });

    const basket = (() => {
      const fieldValue = localStorage.getItem("cart");
      return fieldValue === null ? [] : JSON.parse(fieldValue);
    })();

    basket.push(object);

    localStorage.setItem("cart", JSON.stringify(basket));

  });
 
}

// Getting data from localStorage

let showBasket = document.querySelector(".basket");

const data = localStorage.getItem("cart");
const result = JSON.parse(data);
console.log(result);

if (result == null) {
  let dog = `
    <div class="logo-nav">
                <img src="./imagini/dog.svg" alt="">
                <h2>Of, e gol!</h2>
                <p>Pentru livrare comanda minima este de 34,90lei</p>
            </div>
    `
  basket.innerHTML = dog;
} else {
result.forEach((element) => {
  let list = `
  <div class="cos-container">
  <div class="pizza-cos">
  <img src="${element.img}" alt="">
  <div class="pizza-text"
  <h3>${element.nume}</h3>
  <p>${element.continut}</p>
  </div>
  </div>
  <hr>
  <div class="pizza-pret">
  <p><b>${element.pret} lei</b></p>
  <div class="augmenter">
  <p>Modifica</p>
  <div class="incrementer">
  </div>
  </div>
  </div>
  </div>
    `;
  basket.innerHTML += list;
});
}
// clear basket
let butClear = document.querySelector(".clear_basket");
butClear.addEventListener("click", () => {
  localStorage.clear();
});