const toggles = document.querySelectorAll('.toggle');
const good = document.querySelector('#good');
const cheap = document.querySelector('#cheap');
const fast = document.querySelector('#fast');

toggles.forEach(toggle => toggle.addEventListener('change', (e) => {
    doTheTrick(e.target);
}));

function doTheTrick(targetedToggle) {
    if(good.checked && cheap.checked && fast.checked)
    {
        if(good === targetedToggle) {
            fast.checked = false;
        }
        
        if(cheap === targetedToggle) {
            good.checked = false;
        }

        if(fast === targetedToggle) {
            cheap.checked = false;
        }
    }
}