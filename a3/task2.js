function countBasketPrice(basket) {
    var basket_price = 0;
    for (i=0; i<basket.length; i++) { 
        var item = basket[i];
        basket_price += item.price * item.count;
    }
    return basket_price;
}


alert(countBasketPrice([{name:'Product1', price:10, count: 2}, {name:'Product2', price:20, count: 3}]));

