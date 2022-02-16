//Selectors
const progressBar = document.querySelector('#progress-bar');
const scrolling = document.querySelector('body');
const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

//Let Variables
let load = 0;

let int = setInterval(blurring, 30)

//Function
function blurring() {
    load++

    if(load > 99) {
        clearInterval(int)
    }

    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1 ,0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

//Const variable
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

const animateProgressBar = () => {
    let scrollDistance = -scrolling.getBoundingClientRect().top;
    let progressWidth = 
    (scrollDistance / (scrolling.getBoundingClientRect().height - document.documentElement.clientHeight)) * 100
    let value = Math.floor(progressWidth)
    progressBar.style.width = value + '%';
}

window.addEventListener('scroll', animateProgressBar)

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '100%',
        scrub: 1
    }
})

tl.fromTo('.sliding-text', {y: 0}, {y: -400})