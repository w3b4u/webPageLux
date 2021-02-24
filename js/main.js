$(function(){
    $('.top__slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                dots: false
            }
        }]
    });
    $('.reviews__slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScrol: 1,
        responsive: [{
            breakpoint: 1141,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 846,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 585,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    $('.menu-toggle').on('click', function(){
        $('.menu__list').slideToggle(700); 
    });
});
function animate(elem){
    let effect = elem.data('effect');
    if(!effect || elem.hasClass(effect)) return false;
    elem.addClass(effect);
    setTimeout( function(){
        elem.removeClass(effect);
    }, 1000);
}
 
$('.animated').mouseenter(function() {
    animate($(this));
});
$(document).ready(function(){
	$('.menu-toggle').on('click',function(){
		$('.menu-toggle').toggleClass('active');
	});
});
$(document).on('click', function(e) {
    if (!$(e.target).closest(".menu-toggle").length) {
      $('.menu__list').hide();
    }
    e.stopPropagation();
  });