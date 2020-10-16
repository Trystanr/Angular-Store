app.controller("AboutController", function($scope) {
    $scope.phoneNumbers = ["(012) 333 4444","(011) 222 5555"];
    $scope.emailAddresses = {
        events: "pamela@sushibar.co.za",
        feedback: "kurt@sushibar.co.za",
        general: "info@sushibar.co.za"
    };

    $scope.comments = feedbackArray;

    $scope.formdata = {
        category: "",
        starRating: "3",
        email: "",
        content: ""
    }

    $scope.addComment = function(form) {
        $scope.comments.push($scope.formdata);
    };
});