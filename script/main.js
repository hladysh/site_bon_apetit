$(document).ready(function() {
	$(function() {
		var url = window.location.pathname,
			urlRegExp = new RegExp(url.replace(/\/$/, '') + "$");
		$('.nav_content li a').each(function() {
			if (urlRegExp.test(this.href.replace(/\/$/, ''))) {
				$(".nav_content li ").removeClass('active');
				$(this).addClass('active');

			}
		});

		$(".tab_item").not(":first").hide();
		$(".menu_food .tab").click(function(e) {
			e.preventDefault();
			$(".menu_food .tab").removeClass("active").eq($(this).index()).addClass("active");
			$(".tab_item").hide().eq($(this).index()).fadeIn();
		}).eq(0).addClass("active");


	});
});
