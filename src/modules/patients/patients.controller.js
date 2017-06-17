angular.module('testApp.controllers')
 	.controller('patientController', function($scope, testAppFactory, $mdDialog){
		//var vm = this;
		var patientInfo = [];
		$scope.getPatientInfo = [];
		$scope.selectedIndex = 0;
		function init() {
			testAppFactory.getPatientInfo().then(function (data) {
				patientInfo = data;
				$scope.aplhaPage({'index': '1', 'letter': 'A'}, 0)
			});
			testAppFactory.getAlphabets().then(function (data) {
				$scope.alphabetList = data;
			});
		}
		$scope.aplhaPage = function(alpha, $index){
			$scope.selectedIndex = $index
			if(alpha.index !== '27'){
				var filteredLIst = _.filter(patientInfo, function(eachPatient){
					return eachPatient.name.first.indexOf(alpha.letter) === 0
				})
				$scope.getPatientInfo = filteredLIst;
			}else{
				//$scope.getPatientInfo = patientInfo.slice(0, 20);
				$scope.getPatientInfo = patientInfo;
			}
		}
		$scope.openPatientCard = function(eachPatient, $event){
			$mdDialog.show({
				controller: 'dialogController',
				controllerAs: 'vm',
				templateUrl: './src/modules/patients/patientDialog.html',
				parent: angular.element(document.body),
				clickOutsideToClose:true,
				fullscreen: true,
				locals: {eachPatient: eachPatient}
			})
		}
		init();
	});
