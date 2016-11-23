var options = {
	offset: 500
}

var header = new Headhesive('.main_top',options);

$(document).ready(function() {

	$('.item').equalHeights();


	$(".menu").click(function(){
		$(".mnu").slideToggle();
	});

	$(".mnu").click(function(){
		$(".mnu").slideToggle();
	});



	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox({
		padding : 10,
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
	$(".fancybox2").fancybox({
		padding : 10,
		helpers: {
			overlay: {
				locked: false
			}
		}
	});


	$('.slick_slider').slick({
		slidesToShow: 2,
		dots: true,responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				dots: true
			}
		},
		{
			breakpoint: 760,
			settings: {
				slidesToShow: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1
			}
		}
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
 });






	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$(".scroll_home").click(function() {
		$.scrollTo($(".home"), 800, {
			offset: 0
		});
	});

	$(".scroll_workproc").click(function() {
		$.scrollTo($(".workproc"), 800, {
			offset: 0
		});
	});

	$(".scroll_featwork").click(function() {
		$.scrollTo($(".featwork"), 800, {
			offset: 0
		});
	});

	$(".scroll_service").click(function() {
		$.scrollTo($(".service"), 800, {
			offset: 0
		});
	});

	$(".scroll_team").click(function() {
		$.scrollTo($(".team"), 800, {
			offset: 0
		});
	});

	$(".scroll_reviews").click(function() {
		$.scrollTo($(".reviews"), 800, {
			offset: 0
		});
	});

	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!жопа");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

	$('ul.tab_caption').on('click', 'li:not(.active)', function() {
		$(this)
		.addClass('active').siblings().removeClass('active')
		.closest('div.tab').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	});

});

$(window).on('load', function () {
	 var $preloader = $('.loader'),
        $spinner   = $preloader.find('.loader_inner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});