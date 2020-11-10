app.controller("CartController", function($scope, $rootScope, $cookies) {

    $scope.showCart = false;
    $scope.priceTotal = 0;

    if ($cookies.get("obj")) {
        $scope.cartItems = JSON.parse($cookies.get("obj"));
        calculatePrice();
    } else {
        $cookies.put('obj', "[]");
        $scope.cartItems = [];
    }

    // console.log(n);
    // $cookies.put('obj', JSON.stringify(cart));

    function calculatePrice() {
        $scope.priceTotal = 0;
        for (let n = 0; n < $scope.cartItems.length; n++) {
            $scope.priceTotal += parseFloat($scope.cartItems[n].price);
        }
    }

    $scope.toggleCart = function() {
        if ($scope.showCart == false) {
            $scope.showCart = true;

        } else {
            $scope.showCart = false;
        }
    }

    $rootScope.$on("addItemToCart", function(e, i){
        $scope.addItemToCart(i);
    });

    $scope.addItemToCart = function(i) {
        console.log("from the cart " + i.id);
        $scope.cartItems.push(i);
        $cookies.put('obj', JSON.stringify($scope.cartItems));
        calculatePrice();
    }

    $scope.deleteItemFromCart = function(i) {
        $scope.cartItems.splice(i, 1);
        $cookies.put('obj', JSON.stringify($scope.cartItems));
        calculatePrice();
    }

    $scope.clearCart = function(i) {
        $cookies.put('obj', "[]");
        $scope.cartItems = [];
        calculatePrice();
    }

});