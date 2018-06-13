(function () {

    function Product(name, price, expDate) {
        this.id = parseInt(Math.random() * 100000),
            this.name = name,
            this.price = parseFloat(price.toFixed(2)),
            this.expDate = new Date(expDate),
            this.getInfo = function () {
                var firstLetter = this.name[0].toUpperCase();
                var lastLetter = this.name[name.length - 1].toUpperCase();
                return firstLetter + lastLetter + this.id + ", " + this.name + ", " + this.price;
            }

    }

    function ShoppingBag() {
        this.listOfProduct = [];
        this.addProduct = function (product) {
            if (!product instanceof Product) {
                console.log("Invalid input");
                return
            }
            if (product.expDate.getTime() > Date.now()) {
                this.listOfProduct.push(product)
            } else {
                console.log("Product has expired")
            }
        }

        this.calculateAverage = function () {
            if (this.listOfProduct.length === 0) {
                return "Shopping Bag is empty";
            }
            var averagePrice = (this.getTotalPrice() / parseFloat(this.listOfProduct.length)).toFixed(2);
            return averagePrice;
        }
        this.getTotalPrice = function () {
            var totalPrice = 0;
            this.listOfProduct.forEach(function (product) {
                totalPrice += product.price;
            })
            return parseFloat(totalPrice.toFixed(2));
        }

        this.getMostExpensive = function () {
            for (var i = 0; i < this.listOfProduct.length; i++) {
                var max = Math.max(this.listOfProduct[i].price)
            }
            return max;
        }
    }

    function PaymentCard(balance, expDate) {
        this.balance = balance.toFixed(2);
        this.expDate = new Date(expDate);
        
        this.activeOrInactive = function () {
            return this.expDate.getTime() > Date.now()
        }
    }

    function checkOutAndBuy(shoppingBag, paymentCard) {
        var haveEnoughMoney = parseFloat(paymentCard.balance) >= shoppingBag.getTotalPrice();
        
        if (haveEnoughMoney && paymentCard.activeOrInactive()) {
            paymentCard.balance -= shoppingBag.getTotalPrice();
            console.log("Purchase is successful")
            console.log("The remaining amount is: " + paymentCard.balance);
        } else {
            console.log("Unable to purchase")
        }
    }

    var jastog = new Product("Jastog", 123.4546, "01-04-2019");
    var jastuk = new Product("Jastuk", 234.435355, "03.05.2019");
    var jorgan = new Product("Jorgan", 434.435355, "03.05.2019");

    var myShoppingBag = new ShoppingBag();

    var myMasterCard = new PaymentCard(2000, "01-04-2019")

    myShoppingBag.addProduct(jastog);
    myShoppingBag.addProduct(jastuk);
    myShoppingBag.addProduct(jorgan);
    
    checkOutAndBuy(myShoppingBag, myMasterCard);


    // console.log(myMasterCard.activeOrInactive());


    // console.log(myShoppingBag.listOfProduct);

    console.log(myShoppingBag.calculateAverage());
    console.log(myShoppingBag.getMostExpensive())
    console.log(myShoppingBag.getTotalPrice())


})();



