app.controller("CartController", function($scope, $rootScope, $cookies) {

    $scope.cartItems = JSON.parse($cookies.get("obj"));
    $scope.showCart = false;

    // console.log(n);
    // $cookies.put('obj', JSON.stringify(cart));

    $scope.toggleCart = function() {
        if ($scope.showCart == false) {
            $scope.showCart = true
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
    }

    $scope.deleteItemFromCart = function(i) {
        $scope.cartItems.splice(i, 1);
        $cookies.put('obj', JSON.stringify($scope.cartItems));
    }

    $scope.clearCart = function(i) {
        $cookies.put('obj', "[]");
        $scope.cartItems = [];
    }

});