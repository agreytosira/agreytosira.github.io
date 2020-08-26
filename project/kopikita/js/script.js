const tombolOpen = document.querySelector('.tombolOpen');
const sidebar = document.querySelector('nav.sidebar');
const tombolClose = document.querySelector('.tombolClose');

tombolOpen.addEventListener('click', function () {
    sidebar.style.transform = 'translateX(0px)';
});

tombolClose.addEventListener('click', function () {
    sidebar.style.transform = 'translateX(-1000px)';
});