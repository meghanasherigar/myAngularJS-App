//var angularApp = angular.module('angularApp', ['ngRoute']);

angularApp.config(function ($routeProvider) {
             
            $routeProvider.when('/', {
                templateUrl: 'templates/login/login.html',
                controller: 'LoginCtrl'
            }).when('/home', {
                templateUrl: 'templates/home/home.html',
                controller: 'homeController'
            }).when('/user', {
                templateUrl: 'templates/My_details/user.html',
                controller: 'profileController'     
            }) .when('/more', {
                templateUrl: 'templates/more/more.html',
                controller: 'morecontroller'
            }).when('/gallery', {
                templateUrl: 'templates/companyPhotos/gallery.html',
                controller: 'galleryController'     
            }).otherwise({
                redirectTo: "/",
             
            });
}
       );