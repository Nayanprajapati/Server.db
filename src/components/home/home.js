// Function to create Logout button
function createLogoutButton() {
  // Select the logout container
  const logoutContainer = document.querySelector(".logout-container");

  // Check if the container exists
  if (!logoutContainer) {
    console.error("Logout container not found!");
    return;
  }

  const logoutBtn = document.createElement("button");
  logoutBtn.textContent = "Logout";
  logoutBtn.classList.add("logout-btn"); // Assuming you have this CSS class

  // Add click event listener to logout
  logoutBtn.addEventListener("click", function () {
    sessionStorage.clear(); // Clear user session
    alert("You have been logged out!");
    window.location.href = "login.html"; // Redirect to login page
  });

  logoutContainer.appendChild(logoutBtn);
}

// Call the function after DOM is loaded
document.addEventListener("DOMContentLoaded", createLogoutButton);
