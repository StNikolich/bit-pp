"use strict";

(function() {
  console.log("hi");
  function Product(name, price, expirationDate) {
    this.id = Math.floor(Math.random() * 100000);
    this.name = name;
    this.price = price;
    this.expirationDate = new Date(expirationDate);
    this.getInfo = function() {
      var productCode =
        this.name[0].toUpperCase() +
        this.name[this.name.length - 1].toUpperCase() +
        this.id;
      return [productCode + ", " + this.name + ", " + this.price];
    };
  }
  function ShoppingBag() {
    this.productList = [];
    this.addProduct = function() {
      for (var i = 0; i < arguments.length; i++) {
        var product = arguments[i];
        if (new Date() < product.expirationDate) {
          this.productList.push(product);
        }
      }
      return this.productList;
    };
    this.averagePrice = function() {
      var totalPrice = 0;
      for (var i = 0; i < this.productList.length; i++) {
        totalPrice += this.productList[i].price;
      }
      var averagePrice = totalPrice / this.productList.length;
      return averagePrice.toFixed(3);
    };
    this.getMostExpensive = function() {
      var maxPrice = this.productList[0].price;
      var maxProd;
      for (var i = 0; i < this.productList.length; i++) {
        if (this.productList[i].price > maxPrice) {
          maxPrice = this.productList[i].price;
          maxProd = this.productList[i]
        }
      }
      return maxProd.getInfo();
    };
    this.calculateTotalPrice = function() {
        var priceTotal = 0;
        for (var i = 0; i < this.productList.length; i++) {
          priceTotal += this.productList[i].price;
        }
        return priceTotal.toFixed(3);
    }
  }

  function PaymentCard (balance, expDate) {
      this.balance = balance.toFixed(2);
      this.expDate = new Date(expDate);
      this.cardStatus = function() {
          var result;
          if(new Date() < this.expDate) {
              result = true;
          } else {
              result = false;
          }
          return result;
      }
  }

  function checkoutAndBuy(shoppingBag, paymentCard) {
      var result;
    if(paymentCard.cardStatus() && (paymentCard.balance >= shoppingBag.calculateTotalPrice())) {
        result = "Everything is OK."
    } else {
        result = "Error"
    }
    return result;
  }
  var banana = new Product("banana", 100, "10/10/2018");
  var apple = new Product("apple", 50, "5/7/2019");
  var myBag = new ShoppingBag();
  myBag.addProduct(apple, banana);
 var myCard = new PaymentCard(180, "5/7/2019");
console.log(checkoutAndBuy(myBag, myCard));
})();
