
document.querySelector('.favourite-button').addEventListener('click', function () {
    const popup = document.createElement('div');

    popup.classList.add('popup-overlay');
    popup.innerHTML = `
        <div class="popup-content">
            <p>Successfully added to your basket!</p>
            <a href="basket.html" class="popup-basket-link">Show in basket</a>
            <button class="popup-close">Close</button>
        </div>
    `;

    document.body.appendChild(popup);
    
    document.querySelector('.popup-close').addEventListener('click', function () {
        document.body.removeChild(popup);
    });

    popup.addEventListener('click', function (e) {
        if (e.target === popup) {
            document.body.removeChild(popup);
        }
    });
});

function displayCurrentDate() {
    const dateContainer = document.getElementById('current-date');

    setInterval(() => {
        const currentDate = new Date();

        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric', 
            hour: 'numeric', 
            minute: 'numeric', 
            second: 'numeric', 
            hour12: true 
        };

        const formattedDate = currentDate.toLocaleDateString('en-US', options);


        dateContainer.textContent = formattedDate;
    }, 1000); 
}


window.onload = displayCurrentDate;

//ASSIGNMENT 5 ADDITIONS================================================================
document.getElementById('read-more-btn').addEventListener('click', function() {
    const moreText = document.getElementById('more-text');
    const btnText = this;

    if (moreText.style.display === 'none') {
        moreText.style.display = 'inline';
        btnText.textContent = 'Read Less';
    } else {
        moreText.style.display = 'none';
        btnText.textContent = 'Read More';
    }
});



const stars = document.querySelectorAll('.star');
const ratingValue = document.getElementById('rating-value');

stars.forEach(star => {
    star.addEventListener('click', function() {
        const selectedRating = this.getAttribute('data-value');
        
        ratingValue.textContent = `Rating: ${selectedRating}/5`;

        stars.forEach(star => star.classList.remove('selected'));
        
        for (let i = 0; i < selectedRating; i++) {
            stars[i].classList.add('selected');
        }
    });
});

//Animation for buy
document.getElementById('buy-button').addEventListener('click', function (e) {
    e.preventDefault();

    this.classList.add('clicked');
    setTimeout(() => {
        this.classList.remove('clicked');
    }, 600);

    const popupOverlay = document.createElement('div');
    const popup = document.createElement('div');

    popupOverlay.className = 'popup-overlay';
    popup.className = 'popup-thankyou';

    popup.innerHTML = `
        <div class="popup-message">Thanks for buying!</div>
        <button class="popup-close">Close</button>
    `;

    document.body.appendChild(popupOverlay);
    document.body.appendChild(popup);

    setTimeout(() => {
        popup.classList.add('show');
    }, 50);

    document.querySelector('.popup-close').addEventListener('click', function () {
        popup.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(popup);
            document.body.removeChild(popupOverlay);
        }, 300);
    });

    popupOverlay.addEventListener('click', function () {
        popup.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(popup);
            document.body.removeChild(popupOverlay);
        }, 300);
    });
});


