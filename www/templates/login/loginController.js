angularApp.controller('LoginCtrl', function($scope, $location, $rootScope, $window, $timeout, Login_Service,injectorService1) {
    $rootScope.loaded = false;
    $rootScope.isHeaderVisible = false;
    $('#my_footer').removeClass('showClasss');
    $('#my_footer').addClass('hideClass');

    Login_Service.getdata().then(function(response) {
        $rootScope.user = response.data
        $rootScope.isHeaderVisible = false;
        $scope.authenticate = function() {
            var validUser = false;
            for (i = 0; i < $rootScope.user.length; i++) {
                if (($scope.uname == $rootScope.user[i].username) && ($scope.email == $rootScope.user[i].email)) {
                    validUser = true;
                    break;
                } else {
                    validUser = false;
                    if (($scope.uname != $rootScope.user[i].username) || ($scope.email == $rootScope.user[i].email)) {
                        $scope.error = "Invalid username";
                    } else if (($scope.email != $rootScope.user[i].email) && ($scope.uname == $rootScope.user[i].username)) {
                        $scope.error = "Invalid email";
                    } else if (($scope.uname != $rootScope.user[i].username) && ($scope.email != $rootScope.user[i].email)) {

                        $scope.error = "Invalid username and email";
                    }
                }
            }

            if (validUser) {
                $scope.name = $rootScope.user[i].username;
                $scope.imageUrl = $rootScope.user[i].url;
                $scope.userlogin = $rootScope.user[i];
                // console.log($rootScope.userlogin);
                injectorService1.setProfileData($scope.userlogin);
                $location.path("/home");
            } else {
                alert($scope.error);
            }
            $timeout(function() {
                // Simulates loading
                $rootScope.loaded = true;
            }, 2000);
        }

    });
});