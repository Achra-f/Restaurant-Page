const images = [
    require('./img/food1.jpg'),
    require('./img/food2.jpg'),
    require('./img/food3.jpg'),
    require('./img/food4.jpg'),
    require('./img/food5.jpg'),
    require('./img/food6.jpg'),
    require('./img/food7.jpg'),
    require('./img/food8.jpg')
  ];

  export class Menu {
    constructor() {
        this.content = document.querySelector('#content');
    }

    loadMenu() {
        this.content.innerHTML = '';

        const heading = document.createElement('h1');
        heading.textContent = 'Menu';

        const image = document.createElement('img');
        image.src = images[6];
        image.alt = 'Pizza';

        const paragraph = document.createElement('p');
        paragraph.textContent = `Pizza`

        this.content.appendChild(heading);
        this.content.appendChild(image);
        this.content.appendChild(paragraph);       
    }
}   