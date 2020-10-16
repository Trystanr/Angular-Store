app.controller("ProductController", function($scope) {
    $scope.productsArray = productArray;

    $scope.productClicked = function(event) {
        console.log(event.target.id);
    }
});