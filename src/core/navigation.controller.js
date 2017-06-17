 angular.module('testApp.core')
 	.controller('navigationController', function($scope){
 		var vm = this;
 		vm.modules = [
 		{
 		  icon: 'home',
 		  name: 'Patient',
 		  state: '/Patient'
 		},
 		{
 		  icon: 'group',
 		  name: 'Appointments',
 		  state: '/Appointments'
 		}, 		
 		{
 		  icon: 'build',
 		  name: 'Doctor & Staff',
 		  state: '/Doctor'
 		},
 		{
 		  icon: 'wallpaper',
 		  name: 'Clinics',
 		  state: '/Clinics'
 		}]
 	});