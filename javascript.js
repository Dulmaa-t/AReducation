const header = document.querySelector('.main-header');

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    if (scrollPos > 10) {
        header.classList.add('scrolled');
    }
    else {
        header.classList.remove('scrolled');
    }
});

$(document).ready(function () {
	$('.center-slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		centerMode: true,
		arrows: true,
		dots: false,
		speed: 200,
		centerPadding: '20px',
		infinite: true,
		autoplaySpeed: 5000,
		autoplay: true,
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
});

// window.slide = new SlideNav();
AOS.init(
	{
		duration: 1200
	}
);
$('.banner-stories__item-wrapper').slick({
	centerMode: true,
	centerPadding: '20%',
	lazyLoad: 'progressive',
	arrows: false,
	dots: true,
	autoplay: false,
	speed: 1100,
	slidesToShow: 1,
	responsive: [{
		breakpoint: 768,
		settings: {
			centerMode: false,
			slidesToShow: 1,
			slidesToScroll: 1
		}
	}]
});

var $grid = $('.grid').isotope({
	// options
	itemSelector: '.grid-item',
	layoutMode: 'fitRows',
});

// change is-checked class on buttons
var $buttonGroup = $('.filters');
function checkFirstActive() {
	let filterValue = $(".is-checked").attr("data-filter")
	$grid.isotope({ filter: filterValue });
}
checkFirstActive()
$buttonGroup.on('click', 'li', function (event) {
	$buttonGroup.find('.is-checked').removeClass('is-checked');
	var $button = $(event.currentTarget);
	$button.addClass('is-checked');
	var filterValue = $button.attr('data-filter');
	$grid.isotope({ filter: filterValue });
});

//Make sure the user has scrolled at least double the height of the browser
var toggleHeight = $(window).outerHeight() * 1;

$(window).scroll(function() {
	if ($(window).scrollTop() > toggleHeight) {
		//Adds active class to make button visible
		$(".m-backtotop").addClass("active");
		
		//Just some cool text changes
		$('h1 span').text('TA-DA! Now hover it and hit dat!')
		
	} else {
		//Removes active class to make button visible
		$(".m-backtotop").removeClass("active");
		
		//Just some cool text changes
		$('h1 span').text('(start scrolling)')
	}
});


//Scrolls the user to the top of the page again
$(".m-backtotop").click(function() {
	$("html, body").animate({ scrollTop: 0 }, "slow");
	return false;
});

