let slides = document.querySelectorAll('.slider-inner .slide')
let slidesInner = document.querySelector('.slider-inner')
let prevBtn = document.querySelector('.slide-prev')
let nextBtn = document.querySelector('.slide-next')

//Carousel Slider
let slideCount = 0

prevBtn.addEventListener('click', () => {
	if(slideCount <= 0){
		slideCount = slides.length - 1
	}else{
		slideCount--
	}

	slidesInner.style.transform = `translateX(-${slideCount * 1200}px)`
})

nextBtn.addEventListener('click', () => {
	if(slideCount < slides.length - 1){
		slideCount++
	}else{
		slideCount = 0
	}

	slidesInner.style.transform = `translateX(-${slideCount *1200}px)`
})