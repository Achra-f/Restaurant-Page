export class Contact {
    constructor() {
        this.content = document.querySelector('#content');
    }

    loadContact() {
        this.content.innerHTML = '';

        const heading = document.createElement('h1');
        heading.textContent = 'Contact';


        const paragraph = document.createElement('p');
        paragraph.textContent = `contact us @ email@adress.com`

        this.content.appendChild(heading);
        this.content.appendChild(paragraph);
    }
}   