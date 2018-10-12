angularApp.controller('morecontroller', function($rootScope,$location,More_service,$scope) {
  $('#my_footer').show();
     $('#home').removeClass('icon_selected');
     $('#profile').removeClass('icon_selected');
      
      More_service.getdatamore().then(function(response) { 
    $rootScope.moredata = response.data;
    
        
        
        });
     $scope.onloadFun = function() {
       
        $('#more').addClass('icon_selected');
      }
});