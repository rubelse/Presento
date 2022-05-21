jQuery(function($) {
	// jQuery-start

   // slider code goese here
	$('.owl-carousel').owlCarousel({
          loop:true,
          margin:10,
          nav:false,
          autoplay:true,
          autoplayTimeout:3000,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:3
              },
              1000:{
                  items:5
              }
          }


         })
     // slider code end

       // mixitup here
      var mixer = mixitup('.portfolio');
      // mixitup end



      $('.time').animationCounter({

		  start: 0,

		  step: 5,

		  end: 100,
		  delay: 100,
		});


      $('.users').animationCounter({

		  start: 0,

		  step: 20,

		  end: 4000,
		  delay: 10,
		});


      $('.heart').animationCounter({

		  start: 0,

		  step: 10,

		  end: 1500,
		  delay: 10,
		});


$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
});





	// jQuery-end
});