const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
	const currentScroll = window.pageYOffset;
	if (currentScroll <= 0) {
		body.classList.remove("scroll-up");
		return;
	}

	if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
		body.classList.remove("scroll-up");
		body.classList.add("scroll-down");
	} else if (
		currentScroll < lastScroll &&
		body.classList.contains("scroll-down")
	) {
		body.classList.remove("scroll-down");
		body.classList.add("scroll-up");
	}
	lastScroll = currentScroll;
});

let hamburger = document.querySelector('.hamburger')
let menuItems = document.querySelector('.menu-items')

hamburger.addEventListener('click', ()=>{
  hamburger.classList.toggle('change')
  menuItems.classList.toggle('open')
})

window.onscroll = () => {
  hamburger.classList.remove('change');
  menuItems.classList.remove('open')
};


$(document).ready(function () {
  $(document).on("scroll", onScroll);
  
  //smoothscroll
  $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");
      
      $('a').each(function () {
          $(this).removeClass('active');
      })
      $(this).addClass('active');
    
      var target = this.hash,
          menu = target;
      $target = $(target);
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top+2
      }, 500, 'swing', function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
      });
  });
});

function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('.menu a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('.menu ul li a').removeClass("active");
          currLink.addClass("active");
      }
      else{
          currLink.removeClass("active");
      }
  });
}


  $(document).ready(function(){
    $('.your-class').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrow:true,
        nextArrow:'#slick-next',
        prevArrow:'#slick-prev',
        centerPadding: '60px',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                // responsive options
                slidesToShow: 1,
              }
            },
            {
              breakpoint: 992,
              settings: {
                // responsive options
                slidesToShow: 2,
              }
            },
            {
                breakpoint: 1200,
                settings: {
                  // responsive options
                  slidesToShow: 3,
                }
              },
          ]
    });
  });
      
