const menu = [
  {
    id: 1,
    title: "Introduction to AI",
    category: "ai",
    price: 1000,
    img: "./images/ai.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus esse impedit, iure necessitatibus neque iste? `,
  },
  {
    id: 2,
    title: "Software Engineering",
    category: "softwaredevelopment",
    price: 2000,
    img: "./images/softeng1.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus esse impedit, iure necessitatibus neque iste?`,
  },
  {
    id: 4,
    title: "Advanced AI Dev With Python",
    category: "AI",
    price: 2500,
    img: "./images/aipython.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus esse impedit, iure necessitatibus neque iste?`,
  },
  {
    id: 3,
    title: "System requirements and Product Management",
    category: "Product Mnagement & Development",
    price: 2000,
    img: "./images/projmanagement.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus esse impedit, iure necessitatibus neque iste?`,
  },
  {
    id: 5,
    title: "Cloud Development With AWS",
    category: "softwaredevelopment",
    price: 22.99,
    img: "./images/cloud.png",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus esse impedit, iure necessitatibus neque iste?`,
  },
  {
    id: 6,
    title: " Agile Methodology in Project Management",
    category: "Product Mnagement & Development",
    price: 3.500,
    img: "./images/agile.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus esse impedit, iure necessitatibus neque iste?`,
  },
  {
    id: 7,
    title: "Machine Learning With Python",
    category: "AI",
    price: 8.99,
    img: "./images/machine.png",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus esse impedit, iure necessitatibus neque iste? `,
  },
  {
    id: 8,
    title: "Data Base Design",
    category: "softwaredevelopment",
    price: 700,
    img: "./images/databasedesign.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus esse impedit, iure necessitatibus neque iste? `,
  },
  {
    id: 9,
    title: "Digital Product Management",
    category: "Product Mnagement & Development",
    price: 16.99,
    img: "./images/digitalproc.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus esse impedit, iure necessitatibus neque iste?`,
  },
];

/*const sectionCenter = document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded", function () {
  let displayMenu = menu.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
});*/
const sectionCenter = document.querySelector(".section-center");

window.addEventListener('DOMContentLoaded', function () {
  //console.log("shake and bake");
  let displayMenu = menu.map(function (item) {
    return ` 
    <article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`
    ;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
});