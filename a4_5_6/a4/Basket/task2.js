var catalogue = {
    "111" : {
        name: 'Product1',
        price: 10,
    },
    "443" : {
        name: 'Product2',
        price: 20,
    },
    "555" : {
        name: 'Product3',
        price: 30,
    },
    "777" : {
        name: 'Product4',
        price: 40,
    },
}

var basket = [
    {
        productId: 111,
        amount: 3,
    },
    {
        productId: 777,
        amount: 2,
    }
]

function countBasketPrice(basket) {
    var basket_price = 0;
    for (i=0; i<basket.length; i++) { 
        var item = basket[i];
        basket_price += catalogue[item.productId].price * item.amount;
    }
    return basket_price;
}


alert(countBasketPrice(basket));

  

