// Write the code as shown in the video below:
const main = document.querySelector('#main-heading');
main.style.textAlign = 'right';

const fruits = document.querySelector('.fruits');
fruits.style.backgroundColor = 'gray';
fruits.style.padding = '30px';
fruits.style.margin = '30px';
fruits.style.borderRadius = '5px';
fruits.style.listStyleType = 'none';

const fruit = document.querySelectorAll('.fruit');

for (let i = 0; i < fruit.length; i++){
    fruit[i].style.padding = '10px';
    fruit[i].style.margin = '10px';
    fruit[i].style.borderRadius = '5px';
    if (i % 2 == 0) {
        fruit[i].style.backgroundColor = 'lightgray';
    }
    else {
        fruit[i].style.backgroundColor = 'brown';
        fruit[i].style.color = 'white';
        
    }

}

// Write answer to the questions asked below:
const basket = document.querySelector('#basket-heading');
basket.style.color = 'brown';
