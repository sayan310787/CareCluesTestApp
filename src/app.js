'use strict';

// Declare app level module which depends on filters, and services
angular.module('testApp.controllers', []);
angular.module('testApp.core', []);
angular.module('testApp.service', []);
angular.module('testApp', [
  'ngMaterial',
  'ui.router',
  'ngMdIcons',
  'infinite-scroll',
  'testApp.core',
  'testApp.controllers',
  'testApp.service'
])
  .controller('appController', function($scope, $mdSidenav, $state, $location, $window){
    //var vm = this;
    $scope.sideNavIcon = 'menu';
    $scope.isOpacity = false;
    if($location.$$url){
    $scope.currentState = $location.$$url;
  } else {
     $scope.currentState = '/Patient'
  }
  $scope.stateChange = function(state){
    $state.go(state);
    $scope.currentState = state;
  };
      $scope.hospital = 'RubyGeneralHospital';
})
 .config(function($stateProvider, $urlRouterProvider)
    {
      $stateProvider
        .state('/Patient',{
          url: "/Patient",
          templateUrl: 'src/modules/patients/patients.html',
          controller: 'patientController as vm'
        })
        .state('/Appointments',{
          url: "/Appointments",
          templateUrl: 'src/modules/appointment/appointment.html',
          controller: 'appointmentController as vm'
        })
        .state('/Doctor',{
          url: "/Doctor",
          templateUrl: 'src/modules/doctor/doctor.html',
          controller: 'doctorController'
        })
        .state('/Clinics',{
          url: "/Clinics",
          templateUrl: 'src/modules/clinics/clinics.html',
          controller: 'clinicsController'
        });
      $urlRouterProvider.otherwise('/Patient');
    });
