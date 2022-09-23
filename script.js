const menuButton = document.getElementById("menu-button")

function menu() {
    var backgroundMobile = document.querySelector(".background-mobile")
    var main = document.querySelector(".main")
    var titleMobile = document.querySelector(".title-mobile")
    var navMenuMobile = document.getElementById("nav-menu-mobile")

    if (navMenuMobile.style.display == "none") {
        menuButton.style.backgroundImage = "url(/RocketCoffee-Rocketseat/assets/menu-buguer-close.svg)";
        backgroundMobile.style.display = 'none';
        main.style.display = 'none';
        titleMobile.style.display = 'none';
        navMenuMobile.style.display = 'flex';
    }
    else {
        menuButton.style.backgroundImage = "url(/RocketCoffee-Rocketseat/assets/menu-buguer-open.svg)";
        backgroundMobile.style.display = 'block';
        main.style.display = 'flex';
        titleMobile.style.display = 'block';
        navMenuMobile.style.display = 'none';
    }
}

function vp() {
    var backgroundMobile = document.querySelector(".background-mobile")
    var main = document.querySelector(".main")
    var titleMobile = document.querySelector(".title-mobile")
    var navMenuMobile = document.getElementById("nav-menu-mobile")
    if (window.matchMedia("(max-width: 900px)").matches == false) {
        backgroundMobile.style.display = 'none';
        main.style.display = 'none';
        titleMobile.style.display = 'none';
        navMenuMobile.style.display = 'none';
    }
    else{
        backgroundMobile.style.display = 'block';
        main.style.display = 'flex';
        titleMobile.style.display = 'block';
        navMenuMobile.style.display = 'none';
    }
}
addEventListener('resize', vp)

menuButton.addEventListener('click', menu)