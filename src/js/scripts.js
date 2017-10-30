document.addEventListener('click',function (event) {
    if(event.target.classList.contains('color__button_white')){
        document.getElementById('big').src = 'img/tshirt_white.jpg';
    }
    if(event.target.classList.contains('color__button_yellow')){
        document.getElementById('big').src = 'img/tshirt_yellow.jpg';
    }
    if(event.target.classList.contains('color__button_green')){
        document.getElementById('big').src = 'img/tshirt_green.jpg';
    }
});
