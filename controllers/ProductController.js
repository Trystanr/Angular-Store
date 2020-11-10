app.controller("ProductController", function($scope, $http) {
    $scope.productsArray = [];
    $scope.errorMessage = null;
    $scope.orderByThis = '';
    $scope.orderReverse = false;

    const configuration = {
        method: "GET",
        url: "http://127.0.0.1:8080/httpRequestTest.html"
    };

    let successCallback = function(response) {
        console.log("helo")
        $scope.productsArray = response.data;
    };

    let failureCallback = function(error) {
        $scope.errorMessage = error.status + ": " + error.statusText;
    };

    $http(configuration).then(successCallback, failureCallback);

    if ($scope.productsArray === null) {
        $scope.errorMessage = "Menu returned null";
    }

    $scope.sliderArray = featuredSlider;
    $scope.slickConfig = {
        enabled: true,
        autoplay: true,
        draggable: false,
        arrows: true,
        dots: true,
        autoplaySpeed: 3000,
        method: {}
    };

    $scope.orderByType = function (orderType) {
        $scope.orderByThis = orderType;
    }
    // $scope.productClicked = function(event) {
    //     console.log(event.target.id);
    // };
});