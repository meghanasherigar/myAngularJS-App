angularApp.controller('homeController', function($scope,$rootScope,$location,Home_Service,injectorService1) {
console.log($rootScope.user);
$rootScope.isHeaderVisible=true ;
$scope.showBack=false;
$('#profile').removeClass('icon_selected');
$('#more').removeClass('icon_selected');
    
$scope.logout=function(){
      $location.path("/login");
      $('#my_footer').removeClass('showClasss');
}
 $scope.login_user =injectorService1.getProfileData();  

$scope.mydetials=function(){        
      var profileData = injectorService1.getProfileData();
       injectorService1.setData(profileData);
      $location.path("/user");
}
       
$scope.showOtherDetails=function(selected_user){
        var profileData =selected_user;
        injectorService1.setData(profileData);
        $location.path("/user");
}
       
});