const checkbox = document.querySelector('#theme-switch-toggle');
const bodyEl = document.querySelector('body');

function saveTheme (){
    if (localStorage.getItem('theme') && localStorage.getItem('theme') === 'dark' ) {
        bodyEl.classList.replace('light-theme', 'dark-theme');
        checkbox.checked = true;
    }
};
export{saveTheme};