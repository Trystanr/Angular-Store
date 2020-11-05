app.controller("ProductDetailController", function($scope, $rootScope, $routeParams) {
    $scope.productDetail = findProduct($routeParams.id);
    $scope.comments = $scope.productDetail.comments;

    $scope.formdata = {
        email: "",
        starRating: "",
        content: ""
    }

    $scope.addComment = function(form) {
        $scope.comments.push({
            email: $scope.formdata.email,
            starRating: $scope.formdata.starRating,
            content: $scope.formdata.content});
        $scope.formdata = {
            email: "",
            starRating: "",
            content: ""
        }
    };

    $scope.starRatingAsSymbols = function(starRating) {
        let starRes = "";
        for (let i = 0; i < parseInt(starRating); i++) {
            starRes += "★";
        }
        return starRes;
    }

    $scope.starRatingWithinRange = function(index) {
        return (index <= parseInt($scope.formdata.starRating));
    };

    $scope.setStarRating = function(index) {
        return $scope.formdata.starRating = index + "";
    };

    $scope.addToCart = function(i){
        console.log("adding id:"+i.id+" to cart");
        $rootScope.$emit("addItemToCart", i);
    };
});