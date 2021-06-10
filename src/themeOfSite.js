
const checkbox = document.querySelector('#theme-switch-toggle');
const bodyEl = document.querySelector('body');

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

bodyEl.classList.add(Theme.LIGHT);

const changeTheme = checkbox.addEventListener('change', onChangeBodyClass);

function onChangeBodyClass (e){
    changeClass();
};

function changeClass(){
    if (bodyEl.classList.contains(Theme.LIGHT))
    {
    bodyEl.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', 'dark');
    } else {
    bodyEl.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', 'light');
    };
};

export {changeTheme};