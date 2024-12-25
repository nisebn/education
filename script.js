
var menuBtn = document.querySelector('.main-navbar .menu-btn');
var menuList = document.querySelector('.main-navbar .nav-list');
var menuListItems = document.querySelectorAll('.nav-list li a');
menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menuList.classList.toggle('active');
})
for (var i = 0; i < menuListItems.length; i++) {
    menuListItems[i].addEventListener('click', menuItemClick);
}
function menuItemClick() {
    menuBtn.classList.remove('active');
    menuList.classList.remove('active');

}
var homesection = document.querySelector('.home');
window.addEventListener('scroll', pageScrollFunction);

window.addEventListener('load', pageScrollFunction);
function pageScrollFunction() {
    if (window.scrollY > 120) {
        homesection.classList.add('active');

    }
    else {
        homesection.classList.remove('active');

    }
}


$('.partners-slide').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeOut: 3000,
    margin: 10,
    nav: true,
    navText: ["<i class='fa fa-arrow-left' aria-hidden='true'></i>",
        "<i class='fa fa-arrow-right' aria-hidden='true'></i>"],
    responsive: {
        0: {
            items: 1
        },
        500: {
            items: 2
        },
        700: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})





$('.testimonial-slider').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeOut: 6000,
    margin: 10,
    nav: true,
    navText: ["<i class='fa fa-arrow-left' aria-hidden='true'></i>",
        "<i class='fa fa-arrow-right' aria-hidden='true'></i>"],

    responsive: {
        0: {
            items: 1
        },
        800: {
            items: 2
        },

    }
})
