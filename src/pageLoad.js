export class PageLoad {
  constructor() {
    this.header = document.querySelector('#header');
  }

  createNavbar() {
    const navbar = document.createElement('navbar');
    const ul = document.createElement('ul');
    const links = ['Home', 'Menu', 'Contact'];

    for (let i = 0; i < links.length; i++) {
      const li = document.createElement('li');
      const link = document.createElement('a');

      link.href = '#';
      link.textContent = links[i];
      link.id = `link-${i + 1}`;


      li.appendChild(link);
      ul.appendChild(li);
    }

    navbar.appendChild(ul);

    this.header.appendChild(navbar);
  }
}