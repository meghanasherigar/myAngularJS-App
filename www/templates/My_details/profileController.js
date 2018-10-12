angularApp.controller('profileController', function($scope,$location,$rootScope,Profile_Service,injectorService1) {
    $('#my_footer').show();
    $scope.showBack=true;
    $('#home').removeClass('icon_selected');
    $('#more').removeClass('icon_selected');
 
     $scope.onloadFun = function() {
        $('#profile').addClass('icon_selected');
  		$scope.selected_user=injectorService1.getData();        
      }
});