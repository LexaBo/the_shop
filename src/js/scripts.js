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
    }

    if (data.type === 'size') {
        changePrice();
    }
});

function changePrice() {
    document.getElementById('priceVal').innerHTML = +new Date();
}

function changePicture(color) {
    document.getElementById('big').src = 'img/tshirt_' + color + '.jpg';
}

