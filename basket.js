
const checkoutBtn = document.querySelector('.checkout-btn');
const spinner = document.createElement('div');
spinner.classList.add('spinner', 'hidden'); 

checkoutBtn.addEventListener('click', function () {

    checkoutBtn.classList.add('loading');


    checkoutBtn.textContent = 'Processing...'; 
    checkoutBtn.appendChild(spinner);        
    spinner.classList.remove('hidden');       

    playSound('level_xp_sounds_minecraft_sound_effects_for_editing_made_with_Voicemod.mp3'); 

    setTimeout(() => {
        checkoutBtn.classList.remove('loading');
        checkoutBtn.textContent = 'Proceed to Checkout'; 
        spinner.classList.add('hidden');                 

        alert('Checkout complete!');
    }, 3000); 
});

function playSound(url) {
    const audio = new Audio(url);
    audio.play();
}
