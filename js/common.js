jQuery(function($){

	/*header top_button меню*/
    $(".mobile-menu-botton").click(function(){
        $(this).toggleClass("mobile-menu-botton--active");
        $(".header-main__menu").slideToggle();
        return false;
    });

    $(".header-main__menu-lvl2-row>a").click(function(){
        $(this).parent().toggleClass("header-main__menu-lvl2-row--active");
        $(this).parent().find(".header-main__menu-lvl2").slideToggle();
        return false;
    });

    $(".page-card__size-in").click(function(){
        $(this).toggleClass("page-card__size-in--active");
        $(this).find("+.page-card__size-grup").slideToggle();
        return false;
    });
    $(".page-card__size-grup div").click(function(){
        $(this).parent().parent().find(".page-card__size-in").text($(this).text());
        $(this).parent().parent().find(".page-card__size-grup").slideToggle();
        return false;
    });

    $(".latest-products__cart-add").click(function(){
        $(this).toggleClass("latest-products-off");
        $(this).find("+.latest-products__cart-add-bl-n-size").toggleClass("flex-bl");
        return false;
    });

    $(".latest-products__cart-add-bl-n-size").click(function(){
        $(this).toggleClass("flex-bl");
        $(this).find("+.latest-products__cart-add-bl-n-akt").toggleClass("flex-bl");
        var x_this = this;
        setTimeout(function() {
        	$(x_this).find("+.latest-products__cart-add-bl-n-akt").toggleClass("flex-bl");
        	$(x_this).parent().find(".latest-products__cart-add").toggleClass("latest-products-off");
        }, 1500);
        return false;
    });



    $(".slide-toggle-button").click(function(){
        $(this).toggleClass("slide-toggle-button__active");
        $(this).find("+.slide-toggle__grup").slideToggle();
        return false;
    });



    $(function(){
		$(window).scroll(function() {
			if($(this).scrollTop() >= 86) {
				$('body').addClass('header-fixed');
			}
			else{
				$('body').removeClass('header-fixed');
			}
		});
	});

    /*форма обратной связи*/
	/*E-mail Ajax Send*/
	/*Documentation & Example: https://github.com/agragregra/uniMail*/
	// $("form").submit(function() { /*Change*/
	// 	var th = $(this);
	// 	$.ajax({
	// 		type: "POST",
	// 		url: "mail.php", /*Change*/
	// 		data: th.serialize()
	// 	}).done(function() {
	// 		alert("Thank you!");
	// 		setTimeout(function() {
	// 			 /*Done Functions*/
	// 			th.trigger("reset");
	// 		}, 1000);
	// 	});
	// 	return false;
	// });


	/*owl carousel*/
    $(".section-category__carrousel").owlCarousel({
    	items: 4,
    	loop:true,
    	nav: true,
    	margin: 15,
    	dots: false,
    	// lazyLoad: true
    	responsive: { 
            0: {
            	items: 1
            },
            576: {
            	items: 2
            },
            768: {
            	items: 3
            },
            992: {
            	items: 4
            },
            
        }
    });
    /*owl carousel*/
    $(".latest-products__carrousel").owlCarousel({
    	items: 5,
    	loop:true,
    	nav: true,
    	margin: 15,
    	dots: false,
    	// lazyLoad: true
    	responsive: { 
            0: {
            	items: 1
            },
            576: {
            	items: 2
            },
            768: {
            	items: 3
            },
            1200: {
            	items: 5
            },
            
        }
    });
    /*owl carousel*/
    $(".page-card__carrousel").owlCarousel({
    	items: 1,
    	loop:true,
    	nav: true,
    	dots: false,
    	// responsive: { 
     //        0: {
     //        	autoHeight: true
     //        }
     //    }
    });
	
	$('.header-menu-popup--active, .page-card__popup-info, .page-card__buy-in-1click').magnificPopup();


	if ($(window).width() <= '992'){
		$('.header-main__menu>ul').after($('.header-top-row__menu>ul'));
		$('.menu-mob-top').after($('.header-top-row__tel'));
		$('.header-main__cart-bl-mobile .header-main__cart-bl').before($('.header-top-row__user'));
	}

});