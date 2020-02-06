$(document).ready(() => { 
	  var mySwiper = new Swiper ('.swiper-container', {
	    navigation: {
	      nextEl: '.swiper-button-next',
	      prevEl: '.swiper-button-prev',
	    },

	    loop: true,
	    speed: 800,
	    effect: 'coverflow',
		autoplay: {
    		delay: 3000,
    	}

	})

})