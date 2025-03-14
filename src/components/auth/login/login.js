export const ProceedLogin = (event) => {
  event.preventDefault();

  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  if (validate(email, password)) {
    fetch(`http://localhost:5000/users?email=${email}`)
      .then((res) => res.json())
      .then((users) => {
        if (users.length === 0) {
          alert("User not found. Please enter a valid email.");
        } else {
          let user = users[0]; // JSON Server returns an array
          if (user.password === password) {
            alert("Login Successful!");

            // Store session
            sessionStorage.setItem("username", user.email);
            sessionStorage.setItem("userrole", user.role || "user");

            //  Redirect to home page
            window.location.href = "./src/components/home/home.html";
          } else {
            alert("Invalid credentials. Please try again.");
          }
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("Login failed due to an error. Please try again.");
      });
  }
};

// Validate input fields
const validate = (email, password) => {
  if (!email || !password) {
    alert("Both Email and Password are required!");
    return false;
  }
  return true;
};

// Attach event listener when the page loads
document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("loginForm")
    ?.addEventListener("submit", ProceedLogin);
});
