import Image from './img/food5.jpg';
export class Home {
    constructor() {
        this.content = document.querySelector('#content');
    }

    loadHome() {
        this.content.innerHTML = '';

        const heading = document.createElement('h1');
        heading.textContent = 'Welcome to our Restaurant Page!!!';

        const image = document.createElement('img');
        image.src = Image;
        image.alt = 'Restaurant';

        const paragraph = document.createElement('p');
        paragraph.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        animi fugiat tempora voluptates explicabo,
        labore pariatur quis ad cupiditate quas minima adipisci nam sit. Libero accusamus recusandae aperiam enim ullam.`

        this.content.appendChild(heading);
        this.content.appendChild(image);
        this.content.appendChild(paragraph);       
    }
}   