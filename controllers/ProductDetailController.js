app.controller("ProductDetailController", function($scope, $routeParams) {
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
});