import './sass/main.scss';
import {changeTheme} from './themeOfSite'
import menuData from './menu.json';
import foodTemplates from './templates/foodTemplates.hbs';
import {saveTheme} from './saveSiteTheme'
const markup = foodTemplates(menuData);
const menuList = document.querySelector('.js-menu');
menuList.insertAdjacentHTML('beforeend', markup);


saveTheme();