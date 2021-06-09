const checkbox = document.querySelector('#theme-switch-toggle');
const bodyEl = document.querySelector('body');
const changeTheme = checkbox.addEventListener('change', e => {
    // e.preventDefault;
    bodyEl.classList.toggle('dark-theme');
    if(bodyEl.classList.contains('dark-theme')) checkbox.checked = true;
});

export {checkbox, changeTheme};