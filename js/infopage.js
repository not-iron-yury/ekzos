/*----------------------menu----------------------*/
const burger = document.querySelector('.burger');
const overlay = document.querySelector('.overlay');
const navItems = document.querySelector('.nav__items');
const navLinkDrop = document.querySelector('.nav__link--drop');
const mobileBack = document.querySelector('.mobile-back');
const navDropdown = document.querySelector('.nav__dropdown');


/*-------------lockScroll-------------*/

const lockScroll = () => {
	document.body.classList.add('lock');
}

const unlockScroll = () => {
	document.body.classList.remove('lock');
}

/*------------/lockScroll-------------*/



const removeAll = function(){
	burger.classList.remove('burger--active');
	navItems.classList.remove('nav__items--open');
	overlay.classList.remove('overlay--open');
	unlockScroll();
	navDropdown.classList.remove('nav__dropdown--open');
};

burger.addEventListener('click', () => {
	burger.classList.toggle('burger--active');
	navItems.classList.toggle('nav__items--open');
	overlay.classList.toggle('overlay--open');
	document.body.classList.toggle('lock');
	navDropdown.classList.remove('nav__dropdown--open');
});

navLinkDrop.addEventListener('click', () => {
	navDropdown.classList.toggle('nav__dropdown--open');
});

mobileBack.addEventListener('click', () => {
	navDropdown.classList.remove('nav__dropdown--open');
});

overlay.addEventListener('click', () => {
	removeAll();
});

document.addEventListener('keydown', function(event) {
    const key = event.key; 		// const {key} = event; in ES6+
    if (key === "Escape") {
		removeAll();
    }
});
