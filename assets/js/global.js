document.addEventListener('DOMContentLoaded', function () {

    const menuicon = document.querySelector('#menuicon');
    const sidebar = document.querySelector('#sidebar');
    const searchicon = document.querySelector('#searchicon');
    const searchinput = document.querySelector('#searchinput');

    menuicon.addEventListener('click', () => {
        console.log('click');
        sidebar.classList.toggle('hide');
    })
    searchicon.addEventListener('click', () => {
        searchinput.classList.toggle('serchhide');
    })
});