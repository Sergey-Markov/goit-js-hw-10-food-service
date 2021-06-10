const checkbox = document.querySelector('#theme-switch-toggle');
const bodyEl = document.querySelector('body');

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
function saveTheme (){
    if (localStorage.getItem('theme') && localStorage.getItem('theme') === 'dark' ) {
        bodyEl.classList.replace(Theme.LIGHT, Theme.DARK);
        checkbox.checked = true;
    }
};
export{saveTheme};