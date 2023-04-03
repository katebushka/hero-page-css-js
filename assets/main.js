const input = document.querySelector('.hero_search_input');
const button = document.querySelector('.hero_search_btn');

input.addEventListener('input', () => {
    let inputValue = input.value.replace(/[!@#$%^&*()]/g, '');
    input.value = inputValue;

    if (input.value.length <= 12 && input.value.length >= 4) {
        input.classList.add('success');
        button.disabled = false;
    } else {
        input.classList.remove('success');
        button.disabled = true;
    }
});

let circular = document.querySelector('.hero_ring');
function addActive(){
  circular.classList.add('active')
}
function addActive2(){
  circular.classList.add('active2')
}

setTimeout(addActive, 3000);
setTimeout(addActive2, 9000);