var app = angular.module("sushibar", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider.when("/home", {
		controller: "HomeController",
		templateUrl: "templates/home.html"
	});

	$routeProvider.when("/about", {
		controller: "AboutController",
		templateUrl: "templates/about.html"
	});

	$routeProvider.when("/products", {
		controller: "ProductController",
		templateUrl: "templates/product-master.html"
	});

	$routeProvider.when("/products/:id", {
		controller: "ProductDetailController",
		templateUrl: "templates/product-detail.html"
	});
});

app.controller("HomeController", function($scope) {
	$scope.image = "images/sushi-white.jpg";
});

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

app.controller("ProductController", function($scope) {
	$scope.productsArray = productArray;

	$scope.productClicked = function(event) {
		console.log(event.target.id);
	}
});

app.controller("ProductDetailController", function($scope, $routeParams) {
	$scope.productDetail = findProduct($routeParams.id);
	$scope.comments = $scope.productDetail.comments;
});

function findProduct(prodID) {

	for (let i = 0; i < productArray.length; i++) {
		if (productArray[i].productID == prodID) {
			return productArray[i];
		}
	}

	return 0;
}