const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
const buy = document.querySelector('.buy');


navToggle.addEventListener('click', function() {
	links.classList.toggle("show-links");
});


navToggle.addEventListener('click', function() {
    buy.classList.toggle("buyhide");
});