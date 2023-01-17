


var swiper = new Swiper('.swiper__container', {
	
	slidesPerView: 1,
	spaceBetween: 30,
    freeMode: true,
    direction: 'horizontal',
	init: true,


	pagination: {
	el: '.swiper-pagination',
	clickable: true,
	},


	breakpoints: {
	620: {
		slidesPerView: 1,
		spaceBetween: 30,
	},
	680: {
		slidesPerView: 2,
		spaceBetween: 30,
	},
    740: {
		slidesPerView: 2,
		spaceBetween: 30,
	},
	920: {
		slidesPerView: 2,
		spaceBetween: 30,
	},
    1000: {
		slidesPerView: 2,
		spaceBetween: 30,
	},
	1240: {
		slidesPerView: 3,
		spaceBetween: 30,
	},
} 
});


(()=>{
	let lines = document.querySelectorAll('.slider__linesli')


lines.forEach((cadaLine,i)=>{
    lines[i].addEventlistener("click",()=>{
        console.log('que pasa')
    })
})

})