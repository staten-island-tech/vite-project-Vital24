import "./menu";
import "../styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

document.querySelector("#app").innerHTML = `
  <div>
      <h1>${beef}</h1>
  </div>
`;
