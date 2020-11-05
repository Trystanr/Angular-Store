app.controller("MenuController", function($scope, $http) {
    $scope.menuItems = [];
    $scope.errorMessage = null;

    const configuration = {
        method: "GET",
        url: "http://localhost:63342/res/Angular-Store/httpRequestTest.html"
    };

    let successCallback = function(response) {
        $scope.menuItems = response.data;
    };

    let failureCallback = function(error) {
        $scope.errorMessage = error.status + ": " + error.statusText;
    };

    $http(configuration).then(successCallback, failureCallback);

    if ($scope.menuItems === null) {
        $scope.errorMessage = "Menu returned null";
    }
});