
// Progressive loading images
const imagesToLoad = document.querySelectorAll('img[data-src]');

// Object containing parameters being set for the IntersectionObserver
const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px 150px 0px"
};

const loadImages = (image) => {
	image.setAttribute('src', image.getAttribute('data-src'));
	image.onload = () => {
		image.removeAttribute('data-src');
	};
};

// check to see if Intersection Ovserver is supported
if('IntersectionObserver' in window) {
	const imgObserver = new IntersectionObserver((items, observer) => {
		items.forEach((item) => {
			if(item.isIntersecting) {
				loadImages(item.target);
				observer.unobserve(item.target);
			}
		});
  }, imgOptions);
  
  // Loop through each img an check status and load if necsssary
	imagesToLoad.forEach((img) => {
		imgObserver.observe(img);
	});
}
else {
	imagesToLoad.forEach((img) => {
		loadImages(img);
	});
}