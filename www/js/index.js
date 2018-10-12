var angularApp = angular.module('angularApp', ['ngRoute','ngMaterial']);
angularApp.controller('MyCtrl', ['$scope', '$http','$rootScope','$location','injectorService1',function ($scope, $http,$rootScope,$location,injectorService1) { 
     $rootScope.isHeaderVisible=true;
    $scope.showBack=true;
       $scope.burgermenu=function(){
        
             document.getElementById("openstyle").style.width = "250px";
             $scope.showMenu=true;
             $scope.loginUserInfo=injectorService1.getProfileData();
             $scope.userUrl=$scope.loginUserInfo.url;
             $("body").css("overflow", "hidden");
            // $scope.showMenu=true;
      }
     
       $scope.closeMenu=function(){
           document.getElementById("openstyle").style.width = "0";
        // $scope.showMenu=false;
        $("body").css("overflow", "auto");
       }
       $scope.goLogout=function(){
           
       }
       $scope.goProfile=function(){
           $scope.closeMenu();
           injectorService1.setData( $scope.loginUserInfo);
           $location.path('/user');
           
       }
       $scope.goBack=function(){

        $location.path('/home');
       }
       $scope.goGallery=function(){
           $scope.closeMenu();
            $location.path('/gallery');
           
       }
       $scope.goCarrier=function(){
           
       }
       $scope.goApproach=function(){
           
       }
        $scope.goView=function(){
           
       }
        $scope.goHome=function(){
           $scope.closeMenu();
           $location.path('/home');
       }
       $scope.logOut=function(){
        $scope.closeMenu();
        $location.path('/login');
       }
    
    
}]);