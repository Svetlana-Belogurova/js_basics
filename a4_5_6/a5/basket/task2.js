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
        amount: 2,
    },
    {
        productId: 555,
        amount: 4,
    },
]

function countBasketPrice(basket) {
    var basket_price = 0;
    for (i=0; i<basket.length; i++) { 
        var item = basket[i];
        basket_price += catalogue[item.productId].price * item.amount;
    }
    return basket_price;
}



function displayBasket (){
    var basketShow = document.getElementById("basketContainer");
    for (i=0; i<basket.length; i++) { 
        var basketItem = document.createElement("div");
        basketShow.appendChild(basketItem);
        var item = basket[i];
        basketItem.innerHTML = catalogue[item.productId].name + ' в количестве ' + item.amount + '. Стоимость: ' + (catalogue[item.productId].price * item.amount) + '.'; 
    }
    
    if (basket.length == 0) {
        basketShow.innerHTML = 'Корзина пуста';
    } else {
        var basketTotal = document.createElement("div");
        basketShow.appendChild(basketTotal);
        basketTotal.innerHTML = 'В корзине: '+ basket.length + ' товаров на сумму' + countBasketPrice(basket) + ' рублей.';
    }
  
} 
window.onload = displayBasket;




  

