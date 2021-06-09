import './sass/main.scss';

import {checkbox, changeTheme} from './themeOfSite'

import menuData from './menu.json';
import foodTemplates from './templates/foodTemplates.hbs';
const markup = foodTemplates(menuData);

const menuList = document.querySelector('.js-menu');
menuList.insertAdjacentHTML('beforeend', markup);
console.log(markup);