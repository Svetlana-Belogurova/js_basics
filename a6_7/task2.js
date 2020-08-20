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

var basket = localStorage.getItem('basketSave') ? JSON.parse(localStorage.getItem('basketSave')) : [];

function displayCatalogue () {
    var catalogueShow = document.getElementById("catalogueContainer");
    for (let key in catalogue) { 
        var catalogueItem = document.createElement("div");
        catalogueShow.appendChild(catalogueItem);
        catalogueItem.innerHTML = catalogue[key].name; 
        var cataloguePrice = document.createElement("div");
        catalogueShow.appendChild(cataloguePrice);
        cataloguePrice.innerHTML = catalogue[key].price; 
        var catalogueButton  = document.createElement("div");
        catalogueShow.appendChild(catalogueButton);
        var catalogueButtonLink = document.createElement("a");
        catalogueButton.appendChild(catalogueButtonLink);
        catalogueButtonLink.setAttribute ('href', '#');
        catalogueButtonLink.setAttribute ('productId', key);
        catalogueButtonLink.onclick = addItemToBasket;
        catalogueButtonLink.innerHTML = "Buy"; 
    }
}

function countBasketPrice(basket) {
    var basket_price = 0;
    for (i=0; i<basket.length; i++) { 
        var item = basket[i];
        basket_price += catalogue[item.productId].price * item.amount;
    }
    return basket_price;
}

function addItemToBasket(eventObj) {
     var eventElement = eventObj.target;
    
    for (i=0; i<basket.length; i++) { 
        if(basket[i].productId == eventElement.getAttribute('productId')) {
            basket[i].amount++;
            displayBasket();
            return;
        }
    }
    basket.push({productId: eventElement.getAttribute('productId'), amount: 1});
    displayBasket();
}

function removeItemFromBasket(eventObj) {
    var eventElement = eventObj.target;
   
   for (i=0; i<basket.length; i++) { 
       if(basket[i].productId == eventElement.getAttribute('productId')) {
           basket[i].amount--;
           if (basket[i].amount==0) {
               basket.splice (i, 1);
           }
           displayBasket();
           return;
       }
   }
}

function displayBasket (){
    var basketShow = document.getElementById("basketContainer");
    basketShow.innerHTML = '';
    for (i=0; i<basket.length; i++) { 
        var item = basket[i];
        var basketItem = document.createElement("div");
        basketShow.appendChild(basketItem);
        var basketPlus  = document.createElement("div");
        basketShow.appendChild(basketPlus);
        var basketPlusLink = document.createElement("a");
        basketPlus.appendChild(basketPlusLink);
        basketPlusLink.setAttribute ('href', '#');
        basketPlusLink.setAttribute ('href', '#');
        basketPlusLink.setAttribute ('productId', item.productId);
        basketPlusLink.onclick = addItemToBasket;
        basketPlusLink.innerHTML = 'Add'; 
        var basketMinus  = document.createElement("div");
        basketShow.appendChild(basketMinus);
        var basketMinusLink = document.createElement("a");
        basketMinus.appendChild(basketMinusLink);
        basketMinusLink.setAttribute ('href', '#');
        basketMinusLink.setAttribute ('productId', item.productId);
        basketMinusLink.onclick = removeItemFromBasket;
        basketMinusLink.innerHTML = 'Delete'; 
        basketItem.innerHTML = catalogue[item.productId].name + ' в количестве ' + item.amount + '. Стоимость: ' + (catalogue[item.productId].price * item.amount) + '.'; 
    }
    
    if (basket.length == 0) {
        basketShow.innerHTML = 'Корзина пуста';
    } else {
        var basketTotal = document.createElement("div");
        basketShow.appendChild(basketTotal);
        basketTotal.innerHTML = 'В корзине: '+ basket.length + ' товаров на сумму' + countBasketPrice(basket) + ' рублей.';
    }
    localStorage.setItem('basketSave', JSON.stringify(basket));
} 

function display() {
    displayCatalogue();
    displayBasket();
}
window.onload = display;




  

