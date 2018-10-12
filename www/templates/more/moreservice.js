angularApp.factory('More_service', function($q,$http) {
  
    
	var getdatamore=function(){
		var d=$q.defer();
		$http({
			method : "GET",
			url :"json_data/moredata.json",
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
		getdatamore : getdatamore
	}
    });
