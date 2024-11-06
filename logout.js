// Logout function
function logout() {
    console.log("Logout function called"); // Debugging line
    localStorage.removeItem("username");
    console.log("Username after logout:", localStorage.getItem("username")); // Check if it's removed
    alert("Logged out successfully!");
    window.location.href = "signin.html";
}