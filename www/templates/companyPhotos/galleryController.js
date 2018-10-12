angularApp.controller('galleryController', function($scope,$rootScope,$location,galleryservice,injectorService1) {
            console.log(injectorService1.getData());
             function tabController ($scope) {            
             $scope.data = {
                selectedIndex: 0,
//                secondLocked:  true,
//                secondLabel:   "2",
//                bottom:        false
             };
             $scope.next = function() {
                $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2) ;
             };
             $scope.previous = function() {
                $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
             };

    
             }
    
      galleryservice.getdata().then(function(response) { 
   
           $rootScope.galleryImagesInfra = response.data[0].infrastructure;
           $rootScope.galleryImagesCamp = response.data[1].campus;
           $rootScope.galleryImagesInfrannualGathering = response.data[2].annualGathering;
      });
    
    
    
    
    
    
    
    
    
    
})