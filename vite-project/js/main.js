import "../styles/style.css";
import { setupCounter } from "./counter.js";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

document.querySelector("#app").innerHTML = `
  <div>

    </a>
    <h1>Hello Vite!!!!!!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));
