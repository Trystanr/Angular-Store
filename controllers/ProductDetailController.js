app.controller("ProductDetailController", function($scope, $routeParams) {
    $scope.productDetail = findProduct($routeParams.id);
    $scope.comments = $scope.productDetail.comments;
});