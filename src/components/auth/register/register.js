// Define registerTemplate if it's missing
const registerTemplate = `
  <h2>Register</h2>
  <form id="registerForm">
    <input type="text" id="firstName" placeholder="First Name" required>
    <input type="text" id="lastName" placeholder="Last Name" required>
    <input type="email" id="email" placeholder="Email" required>
    <input type="password" id="password" placeholder="Password" required>
    <input type="password" id="confirmPassword" placeholder="Confirm Password" required>
    <button type="submit">Register</button>
  </form>
`;

export function renderRegisterPage() {
  // Render registration page
  document.querySelector("#app").innerHTML = registerTemplate;

  // Attach submit event listener after rendering
  document
    .getElementById("registerForm")
    ?.addEventListener("submit", (event) => {
      event.preventDefault();

      // Collect form data
      const firstName = document.getElementById("firstName").value.trim();
      const lastName = document.getElementById("lastName").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
      const confirmPassword = document
        .getElementById("confirmPassword")
        .value.trim();

      // Validation
      if (!firstName || !lastName || !email || !password || !confirmPassword) {
        alert("All fields are required!");
        return;
      }

      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      // Prepare user data
      let userData = {
        firstName,
        lastName,
        email,
        password,
      };

      // Send POST request
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          alert("User registered successfully!");

          // Redirect to login
          loadLoginPage();
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Registration failed. Please try again.");
        });
    });
}

// Function to load login page after registration
export const loadLoginPage = () => {
  import("../login/login.html?raw")
    .then((module) => {
      document.querySelector("#app").innerHTML = module.default;

      // Attach login event listener
      document
        .getElementById("loginForm")
        ?.addEventListener("submit", ProceedLogin);
    })
    .catch((error) => {
      console.error("Error loading login page:", error);
    });
};
