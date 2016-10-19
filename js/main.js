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
	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

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


	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

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

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".carousel");
	owl.owlCarousel({
		items : 4
	});
	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
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