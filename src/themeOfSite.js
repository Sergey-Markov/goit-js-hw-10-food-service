
const checkbox = document.querySelector('#theme-switch-toggle');
const bodyEl = document.querySelector('body');
const dark = 'dark-theme';
const light = 'light-theme';

bodyEl.classList.add(light);

const changeTheme = checkbox.addEventListener('change', onChangeBodyClass);

function onChangeBodyClass (e){
    changeClass();
};

function changeClass(){
    if (bodyEl.classList.contains(light))
    {
    bodyEl.classList.replace(light, dark);
    localStorage.setItem('theme', 'dark');
    } else {
    bodyEl.classList.replace(dark, light);
    localStorage.setItem('theme', 'light');
    };
};

export {changeTheme};