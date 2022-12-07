import "../styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { beef } from "./menu";
import { data } from "./menu";
import { DOM } from ".dom.js";
// ..
AOS.init();
box: document.querySelector(".animation");
data
  .filter((el) => el.type.includes(`meat`))
  .forEach((el) => {
    console.log(el.name);
    box.insertAdjacentHTML = `
      <h1>${el.name}</h1>
`;
  });

// document.querySelector(".animation").innerHTML = `
//   <div>
//       <h1> ${meat}</h1>
//   </div>
// `;
console.log(beef);
