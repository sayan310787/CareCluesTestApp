angular.module('testApp.service')
	.factory('testAppFactory', function($http){
		function getPatientInfo(){
			return $http.get('./src/dataJson/patients.json').then(function(response){
				return response.data;
			})
		}

		function getAlphabets(){
			return $http.get('./src/dataJson/alphabetStore.json').then(function(response){
				return response.data;
			})
		}
		return{
			getPatientInfo: getPatientInfo,
			getAlphabets: getAlphabets
		}
});
