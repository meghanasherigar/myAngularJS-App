angularApp.factory('injectorService1',function(){
	var temp,profile;
	 this.setData=function(data){
		temp=data;
	}
	 this.getData=function(){
		return temp;
	}
	this.setProfileData = function(data){
		profile = data;
	}
	this.getProfileData = function(data){
		return profile;
	}
	return this;
});