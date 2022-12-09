import "../styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

import { data } from "./menu";
import { DOM } from "./dom";
// ..
AOS.init();
/* const meats = data.filter((el) => el.type.includes(`meat`));
meats.forEach((el) => {
  console.log(el.name);
  DOM.box.insertAdjacentHTML = `
      <h1>${el.name}</h1>
`;
}); */
const products = {
  getMeat: function () {
    data
      .filter((el) => el.type.includes(`meat`))
      .forEach((el) => {
        console.log(el.name);
        DOM.box.insertAdjacentHTML(
          "afterbegin",
          `<div class= "stuff">
          <img src="${el.img}"/>
            <h1>${el.name}</h1>
          </div>
        `
        );
      });
  },
  getSushi: function () {
    data
      .filter((el) => el.type.includes(`sushi`))
      .forEach((el) => {
        console.log(el.name);
        DOM.box.insertAdjacentHTML(
          "afterbegin",
          `<div class= "stuff">
          <img src="${el.img}"/>
            <h1>${el.name}</h1>
          </div>
        `
        );
      });
  },
  getDrinks: function () {
    data
      .filter((el) => el.type.includes(`drinks`))
      .forEach((el) => {
        console.log(el.name);
        DOM.box.insertAdjacentHTML(
          "afterbegin",
          `<div class= "stuff">
          <img src="${el.img}"/>
            <h1>${el.name}</h1>
          </div>
        `
        );
      });
  },
};

// document.querySelector(".animation").innerHTML = `
//   <div>
//       <h1> ${meat}</h1>
//   </div>
// `;
products.getMeat();
products.getSushi();
products.getDrinks();
