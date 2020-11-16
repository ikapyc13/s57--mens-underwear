$(this).parent().parent().find(".latest-products__cart-add-bl-n-size").toggleClass("flex-bl");
//$(this).find("+.latest-products__cart-add-bl-n-akt").toggleClass("flex-bl");
$('body').append('<div class="cart-add-popup"><div>Товар добавлен </div></div>');
var x_this = this;
setTimeout(function() {
    //$(x_this).find("+.latest-products__cart-add-bl-n-akt").toggleClass("flex-bl");
    $(".cart-add-popup").remove();
    $(x_this).parent().parent().find(".latest-products__cart-add").toggleClass("latest-products-off");
}, 1500);
return false;