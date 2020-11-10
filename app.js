

var app = angular.module("oasis", ["ngRoute", "ngAnimate", "ngCookies", "slickCarousel"]);

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
		templateUrl: "templates/about.html"
	});

	$routeProvider.when("/contact", {
		controller: "ContactController",
		templateUrl: "templates/contact.html"
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