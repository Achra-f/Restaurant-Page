import './style.css';
import { PageLoad } from "./pageLoad";
import { Home } from "./home";
import { Menu } from './menu';
import { Contact} from './contact';


const pageLoad = new PageLoad();
const home = new Home();
const menu = new Menu();
const contact = new Contact();

pageLoad.createNavbar();
home.loadHome();

const homeLink = document.querySelector('#link-1');
const menuLink = document.querySelector('#link-2');
const contactLink = document.querySelector('#link-3');


homeLink.addEventListener('click', () => {
  home.loadHome();
})

menuLink.addEventListener('click', () => {
  menu.loadMenu();
});

contactLink.addEventListener('click', () => {
  contact.loadContact();
});