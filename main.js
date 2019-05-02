import { items } from './fortnite-api.js'

const item = items;

const mainContainer = document.createElement('div');

mainContainer.className = "container";



const legendary = items.filter(item => item.type === 'outfit');


console.log(legendary)

legendary.forEach(legendary => {
    let nameElement = document.createElement('div');
    let imageElement = document.createElement('img');

    nameElement.className = 'box';
    nameElement.textContent = legendary.name;
    imageElement.src = legendary.images.background;

    mainContainer.appendChild(nameElement);
    nameElement.appendChild(imageElement);
    
})

document.body.appendChild(mainContainer)