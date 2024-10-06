let leftControl = document.querySelector('.left-control');
let rightControl = document.querySelector('.right-control');
let img = document.querySelector('.img');

let mas = ['./img/comix1.png', './img/comix2.png', './img/comix3.png', './img/comix4.png', './img/comix5.png', './img/comix6.png'];
index = 0;
leftControl.addEventListener('click', function() {
    if (index > 0) {
        index--;
        console.log(index);
        img.src = mas[index];
        let scroll = document.querySelector('.nav-header').scrollIntoView({behavior: 'smooth'});
        // scroll
    }
});

rightControl.addEventListener('click', function() {
    if (index < 5) {
        index++;
        console.log(index);
        img.src = mas[index];
        window.scrollTo('0','0');
    }
});

