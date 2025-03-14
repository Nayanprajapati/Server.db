// Import global styles
import "./style.css";

// Import login and register logic
import { ProceedLogin } from "./components/auth/login/login.js";
import { renderRegisterPage } from "./components/auth/register/register.js";
import "./components/auth/login/login.css";
import "./components/auth/register/register.css";

// Function to check session and render the appropriate page
const checkSessionAndRender = () => {
  const isLoggedIn = sessionStorage.getItem("username"); // Check if user is logged in
  console.log("adsf", isLoggedIn);

  const s = document.querySelector("#signup-link");
  console.log(s);

  if (!isLoggedIn && !s) {
    import("./components/auth/login/login.html?raw").then((module) => {
      document.querySelector("#app").innerHTML = module.default;

      document
        .getElementById("loginForm")
        ?.addEventListener("submit", ProceedLogin);

      document
        .querySelector("#signup-link")
        ?.addEventListener("click", (event) => {
          event.preventDefault();
          renderRegisterPage();
        });
    });
  } else {
    console.log("zsdfsdf");
    const x = document.querySelector("#app");
    console.log(x);
    document.querySelector(
      "#app"
    ).innerHTML = `<h2>Welcome, ${isLoggedIn}!</h2>`;
  }
};

// Initialize the app
document.addEventListener("DOMContentLoaded", checkSessionAndRender);
