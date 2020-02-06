$(document).ready((e) => {

  $(document).on('scroll', (e) => {
  let load = document.getElementById('gauge-section').getBoundingClientRect()
  if(load.top < 750) {
    $(".GaugeMeter").gaugeMeter();
    $(document).unbind('scroll')
  }
});

  // wow animation

  new WOW().init()

  // sticky header

    $('#header').removeClass('sticky');
      $(window).scroll(function(){
        if ($(this).scrollTop() > 20 ) {
          $('#header').addClass('sticky').fadeIn('fast');
        } else {
          $('#header').removeClass('sticky').fadeIn('fast');
        };
    });


//burger 

      function burgerMenu(selector) {
        let menu = $(selector);
        let button = menu.find('.burger-menu-button');
        let links = menu.find('.burger-menu-links');
        let overlay = menu.find('.burger-menu-overlay');

        button.on('click', (e) => {
          e.preventDefault();
          toggleMenu();
        });

        links.on('click', () => toggleMenu());
        overlay.on('click', () => toggleMenu());


        function toggleMenu() {
          menu.toggleClass('burger-menu-active');

          if(menu.hasClass('burger-menu-active')) {
            $('body').css('overflow', 'hidden');
          } else {
            $('body').css('overflow', 'visible');
          }
        }
      };

      burgerMenu('.burger-menu');


      // owl carousel

      // $(".owl-carousel").owlCarousel({

      //   responsive: {
      //       0: {
      //         loop: true,
      //         items: 1,
      //         mouseDrag: true,
      //         touchDrag: true,
      //         center: true,
      //         margin: -10,
      //         stagePadding: 50,
      //         autoplay: true,
      //         autoplayTimeout: 3000,
      //         smartSpeed: 500,
      //       },
      //       640: {
      //         loop: false,
      //         items: 3,
      //         mouseDrag: true,
      //         touchDrag: true,
      //         center: false,
      //         stagePadding: 10,
      //         autoplay: false,
      //         autoplayTimeout: 3000,
      //         smartSpeed: 500,
      //       },
      //       800: {
      //         loop: false,
      //         items: 3,
      //         mouseDrag: true,
      //         touchDrag: true,
      //         center: false,
      //         stagePadding: 60,
      //         autoplay: false,
      //         autoplayTimeout: 3000,
      //         smartSpeed: 500,
      //       },
      //       1280: {
      //         loop: false,
      //         items: 4,
      //         mouseDrag: true,
      //         touchDrag: true,
      //         center: false,
      //         margin: 10,
      //         stagePadding: 10,
      //       },
      //       1920: {
      //         loop: false,
      //         items: 3,
      //         mouseDrag: false,
      //         touchDrag: false,
      //         center: false,
      //         margin: -150,
      //         stagePadding: 0,
      //       },
      //   }
      // });





// $(document).ready((e) => {

// let count = 1;

//     $('.first-btn').on('click', (e) => {
//       $('.portfolio-gallery').eq(count++).css('display', 'flex');
//       if(count >= 5) {
//         $('.first-btn').hide();
//       } else {
//         $('.second-btn').show();
//       };

//     });

//     $('.second-btn').on('click', (e) => {
//       $('.first-btn').show();
//       $('.portfolio-gallery').eq(--count).hide();
      // if(count <= 0) {
      //   $('.second-btn').hide();
      // } else {
      //   $('.first-btn').show();
      // };
  //   });
  // });



/*====================================
    Portfolio Isotope Filter
    ======================================*/

  function main() {

   'use strict';
    
    $(window).load(function() {
        var $container = $('#lightbox');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });

}
main();

});