angular.module('testApp.controllers')
    .controller('dialogController', function($scope, eachPatient, $mdDialog){
        var vm = this;
        vm.eachPatient = eachPatient
        vm.cancel = function(){
            $mdDialog.cancel();
        }
    })