angularApp.factory('Profile_Service', function($rootScope,$q,$http) {
  
    
	var getdata=function(){
		var d=$q.defer();
		$http({
			method : "GET",
			url :"json_data/jsondata.json",
			contentType: "application/json",
			        
		}).then(function mySuccess(result)
		{
			d.resolve(result);
		},
		function myError(result){
			d.reject(result);
		})
		return d.promise;
	};
	return{
		getdata : getdata
	}
    });
