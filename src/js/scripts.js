/*document.addEventListener('click',function (event) {
    if(event.target.classList.contains('color__button_white')){
        document.getElementById('big').src = 'img/tshirt_white.jpg';
    }
    if(event.target.classList.contains('color__button_yellow')){
        document.getElementById('big').src = 'img/tshirt_yellow.jpg';
    }
    if(event.target.classList.contains('color__button_green')){
        document.getElementById('big').src = 'img/tshirt_green.jpg';
    }
});*/
class PropertySelector {
    constructor(el) {
        this.el = el;

        this.el.addEventListener('click', ev => {
            const type = ev.target.dataset['type'];
            const value = ev.target.dataset['value'];
            this.dispatchEvent(type, value);
        });
    }

    dispatchEvent(type, value) {
        const event = new CustomEvent('property-selected', {
            detail: {
                type: type,
                value: value
            }
        });
// Pub/Sub
        Dispatcher.dispatchEvent(event);
    }
}

const Dispatcher = document.getElementById('doc');

new PropertySelector(document.getElementById('colorList'));
new PropertySelector(document.getElementById('sizeList'));

Dispatcher.addEventListener('property-selected', ev => {
    const data = ev.detail;

    if (data.type === 'color') {
        changePicture(data.value);
        localStorage.setItem(data.type, data.value);
    }

    if (data.type === 'size') {
        changePrice();
        localStorage.setItem(data.type, data.value);
    }
});

function changePrice() {
    document.getElementById('priceVal').innerHTML = +new Date();
}

function changePicture(co) {
    document.getElementById('big').src = 'img/tshirt_' + co + '.jpg';
}


if(localStorage.getItem('size')) {
    const number = localStorage.getItem('size');
    document.querySelector('input[data-type="size"][data-value="' + number + '"]').setAttribute('checked', 'checked');
    changePrice();
}


if(localStorage.getItem('color')) {
    const number = localStorage.getItem('color');
    document.querySelector('input[data-type="color"][data-value="'+number+'"]').setAttribute('checked','checked');
    changePicture(number);
    // document.getElementById('big').src = 'img/tshirt_' + number + '.jpg';
}







