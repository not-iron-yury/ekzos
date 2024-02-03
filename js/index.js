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


/*----------------------video----------------------*/
const videos = document.querySelectorAll('.video');

// generate video url
let generateUrl = function(id) {
	let query = '?rel=0&showinfo=0&autoplay=1';
	return 'https://www.youtube.com/embed/' + id + query;
};

// creating iframe
let createIframe = function(id) {
	let iframe = document.createElement('iframe');

	iframe.setAttribute('allowfullscreen', '');
	iframe.setAttribute('allow', 'autoplay; encrypted-media');
	iframe.setAttribute('src', generateUrl(id));

	return iframe;
};

// main code
videos.forEach((el) => {
	let videoId = el.getAttribute('data-video');
	let youtubeImgSrc = 'https://i.ytimg.com/vi/' + videoId + '/sddefault.jpg';
	
	let img = el.querySelector('img');
	img.setAttribute('src', youtubeImgSrc);

	el.addEventListener('click', (e) => {
		e.preventDefault();

		let iframe = createIframe(videoId);
		el.querySelector('img').remove();
		el.appendChild(iframe);
		el.querySelector('button').remove();
	});
});




/*-------------width and height for video (говнокод)-------------*/
//let vidos = document.querySelector('.video');
//
//if (document.body.offsetWidth < 740) {
//	let bodyWidth = document.body.offsetWidth * 0.95;
//	vidos.style.width = `${bodyWidth}px`;
//	vidos.style.height = `${bodyWidth * 9 /16}px`;
//}
//else{
//	vidos.style.width = '700px';
//	vidos.style.height = '394px';
//}
//
//window.addEventListener('resize', () => {
//	if (document.body.offsetWidth < 740) {
//		let bodyWidth = document.body.offsetWidth * 0.95;
//		vidos.style.width = `${bodyWidth}px`;
//		vidos.style.height = `${bodyWidth * 9 /16}px`;
//	}
//	else{
//		vidos.style.width = '700px';
//		vidos.style.height = '394px';
//	}
//
//});
//