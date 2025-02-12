// Write your code below:
const h3 = document.createElement('h3');
const div = document.getElementById('header');
const text = document.createTextNode('Buy high quality organic fruits online');
h3.style.fontStyle = 'italic';

h3.appendChild(text);
div.appendChild(h3);

const ul = document.querySelector('.fruits');
const p = document.createElement('p');
const ptxt = document.createTextNode('Total fruits: 4');
const divs = document.querySelectorAll('div');
const div2 = divs[1];
p.appendChild(ptxt);
div2.insertBefore(p, ul);

p.setAttribute('id', 'fruits-total');
