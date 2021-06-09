const checkbox = document.querySelector('#theme-switch-toggle');
const bodyEl = document.querySelector('body');

const dark = 'dark-theme';
const light = 'light-theme';

bodyEl.classList.add(light);
checkbox.checked = false;

const changeTheme = checkbox.addEventListener('change', onChangeBodyClass);
function onChangeBodyClass (e){
    // e.preventDefault();
    addClassFromLocalStorage(dataOfLocalStorage);
    if (!checkbox.checked) {
        checkbox.checked = false;
        localStorage.setItem('theme', light);
    };
    if (checkbox.checked) {
        localStorage.setItem('theme', dark);
    };
    // bravo; 
};
let dataOfLocalStorage = localStorage.getItem('theme');
console.log(dataOfLocalStorage);

function addClassFromLocalStorage (dataOfLocalStorage){
    if (dataOfLocalStorage && dataOfLocalStorage === light){
        bodyEl.classList.replace(dark, light);
    } else{
        bodyEl.classList.add(dark);
        // if(dataOfLocalStorage === dark) bodyEl.classList.add(dark);
    };
};

const bravo = addClassFromLocalStorage(dataOfLocalStorage);
export {checkbox, changeTheme};