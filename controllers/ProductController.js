app.controller("ProductController", function($scope) {
    $scope.productsArray = productArray;

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

    // $scope.productClicked = function(event) {
    //     console.log(event.target.id);
    // };
});