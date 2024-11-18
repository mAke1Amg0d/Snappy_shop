/*function toggleTheme() {
    const body = document.body;
    if (body.classList.contains("day-theme")) {
        body.classList.remove("day-theme");
        body.classList.add("night-theme");
    } else {
        body.classList.remove("night-theme");
        body.classList.add("day-theme");
    }
}*/

// Function to update header buttons based on localStorage
function updateHeaderButtons() {
    const signInButton = document.getElementById('signInButton');
    const profileButton = document.getElementById('profileButton');
    const userEmail = localStorage.getItem('userEmail');

    if (userEmail) {
        // User is signed in
        signInButton.style.display = 'none';
        profileButton.style.display = 'inline-block';
    } else {
        // User is not signed in
        signInButton.style.display = 'inline-block';
        profileButton.style.display = 'none';
    }
}

// Call the function on page load
document.addEventListener('DOMContentLoaded', updateHeaderButtons);

// Example login simulation (this should be replaced with your actual sign-in logic)
function signIn(email) {
    localStorage.setItem('userEmail', email);
    updateHeaderButtons();
}

// Sign-out function
function signOut() {
    localStorage.removeItem("userEmail"); // Remove user email from localStorage
    alert("Logged out successfully!"); // Notify the user
    window.location.href = "signin.html"; // Redirect to the sign-in page
}



document.addEventListener('keydown', function(event) {
    const activeElement = document.activeElement;
    

    if (activeElement.classList.contains('product')) {

        const products = document.querySelectorAll('.product');
        const currentIndex = Array.prototype.indexOf.call(products, activeElement);

        if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {

            const nextIndex = (currentIndex + 1) % products.length;
            products[nextIndex].focus();
        } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {

            const prevIndex = (currentIndex - 1 + products.length) % products.length;
            products[prevIndex].focus();
        }
    }
});
