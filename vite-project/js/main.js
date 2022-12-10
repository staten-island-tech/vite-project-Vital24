import "../styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { data } from "./menu";
import { DOM } from "./dom";
// ..
AOS.init();

const products = {
  getMeat: function () {
    data
      .filter((el) => el.type.includes(`meat`))
      .forEach((el) => {
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
  getAll: function () {
    products.getMeat();
    products.getSushi();
    products.getDrinks();
  },
};

DOM.ChangeToAll.addEventListener("click", function () {
  if (DOM.Typess.classList.contains("all")) {
  } else {
    DOM.box.innerHTML = "";
    DOM.Typess.classList.remove("sushi", "liqour", "meat");
    DOM.Typess.classList.add("all");
    products.getAll();
  }
});

DOM.ChangeToSushi.addEventListener("click", function () {
  if (DOM.Typess.classList.contains("sushi")) {
  } else {
    DOM.box.innerHTML = "";
    DOM.Typess.classList.remove("meat", "liqour", "all");
    DOM.Typess.classList.add("sushi");
    products.getSushi();
  }
});

DOM.ChangeToLiqour.addEventListener("click", function () {
  if (DOM.Typess.classList.contains("liquor")) {
    console.log("poo");
  } else {
    DOM.box.innerHTML = "";
    DOM.Typess.classList.remove("sushi", "meat", "all");
    DOM.Typess.classList.add("liqour");
    products.getDrinks();
  }
});

DOM.ChangeToMeats.addEventListener("click", function () {
  if (DOM.Typess.classList.contains("meat")) {
    console.log("poo");
  } else {
    DOM.box.innerHTML = "";
    DOM.Typess.classList.remove("sushi", "liqour", "all");
    DOM.Typess.classList.add("meat");
    products.getMeat();
  }
});
products.getAll();
l;
