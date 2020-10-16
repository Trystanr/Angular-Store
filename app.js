var app = angular.module("sushibar", ["ngRoute", "slickCarousel"]);

app.config(function($routeProvider) {
	$routeProvider.when("/", {
		redirectTo: "/home",
		pathMatch: 'full'
	});

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