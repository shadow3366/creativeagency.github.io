// Prealoader

window.addEventListener('load', () => {
	const preloader = document.querySelector('.preloader');
	preloader.classList.add('preload-finish');
});



const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('ul');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	navbar.classList.toggle('active');
});

// back top button

const backTop = document.querySelector('.back-top');

window.addEventListener('scroll', () => {
	if(window.pageYOffset > 200){
		backTop.classList.add('active');
	}else{
		backTop.classList.remove('active');
	}
})