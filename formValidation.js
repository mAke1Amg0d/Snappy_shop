
document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    const loadingAnimation = document.createElement('div');
    loadingAnimation.classList.add('loading-animation');
    loadingAnimation.innerHTML = '<div class="spinner"></div><p>Registering...</p>';
    loadingAnimation.style.display = 'none'; 
    document.body.appendChild(loadingAnimation);

    function playSound() {
        const sound = new Audio('orb.mp3');
        sound.play();
    }

    function validateForm() {
        let isValid = true;

        emailError.textContent = '';
        passwordError.textContent = '';
        confirmPasswordError.textContent = '';

        if (!emailInput.value.includes('@')) {
            emailError.textContent = 'Please enter a valid email address.';
            isValid = false;
        }

        if (passwordInput.value.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters long.';
            isValid = false;
        }

        if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordError.textContent = 'Passwords do not match.';
            isValid = false;
        }

        return isValid;
    }

    registerForm.addEventListener('submit', (event) => {
        event.preventDefault(); 
        
        if (validateForm()) {

            loadingAnimation.style.display = 'block'; 
            playSound(); 

            setTimeout(() => {
                window.location.href = 'profile.html';
            }, 3000);
        }
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const joinButton = document.querySelector('.join-btn'); 

    const loadingAnimation = document.createElement('div');
    loadingAnimation.classList.add('loading-animation');
    loadingAnimation.innerHTML = '<div class="spinner"></div><p>Joining Snappy Club...</p>';
    loadingAnimation.style.display = 'none'; 
    document.body.appendChild(loadingAnimation);

    function playSound() {
        const sound = new Audio('minecraft-rare-achievement.mp3');
        sound.play();
    }

    joinButton.addEventListener('click', (event) => {
        event.preventDefault(); 

        loadingAnimation.style.display = 'block'; 
        playSound(); 

        setTimeout(() => {
            window.open('https://t.me/iammyperimeterandmyperimeterisme', '_blank');
            loadingAnimation.style.display = 'none'; 
        }, 3000); 
    });
});

