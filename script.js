const ratingCon = document.querySelector('.wrapper__buttons');
const ratingButtons = document.querySelectorAll('.button');
const submitBotton = document.querySelector('.wrapper__submit');
const result = document.querySelector('.top__rating');
const secondWrp = document.querySelector('.wrapper--2');
let ratingValue;

ratingCon.addEventListener('click', e => {
    ratingButtons.forEach(btn => {
        btn.classList.remove('active')
    })
    e.target.classList.add('active');
    ratingValue = e.target.innerHTML;
})

submitBotton.addEventListener('click', () => {
    if(ratingValue > 0 || ratingValue <= 5) {
        secondWrp.style.bottom = '0%';

        result.textContent = `You selected ${ratingValue} out of 5`
    }
    else {
        return false
    }
})