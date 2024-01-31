// toggle class activ
const navbarNav = document.querySelector('.navbar-nav');
// ketika menu di clik
document.querySelector('#menu'). onclick = () => {
    navbarNav.classList.toggle('active');
}

const menu = document.querySelector('#menu');

document.addEventListener('click', function(a) {
    if(!menu.contains(a.target) && !navbarNav.contains(a.target)) {
        navbarNav.classList.remove('active')
    }
});