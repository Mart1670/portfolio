let toggleMenu = document.querySelector('.toggleMenu');
let navigation = document.querySelector('.navigation');

function toggle(){
    console.log('ok');
    navigation.classList.toggle('active');
}

toggleMenu.addEventListener('click', toggle);