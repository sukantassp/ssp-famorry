(function () {
	'use strict';
		angular.module(FAM_CONTROLLER)
		.controller('registration_step2Ctrl', registration_step2Ctrl);
		registration_step2Ctrl.$inject = ['registration_step2Service','$scope', '$stateParams', '$http', '$timeout','famMessages','famConstants','userDetails','alertService','$state','$ionicPopup'];  
		function registration_step2Ctrl(registration_step2Service,$scope,$stateParams,$http, $timeout, famMessages, famConstants, userDetails,alertService, $state, $ionicPopup) {
			var registration_step2 = this;
			registration_step2.onsubmit = onsubmit;
			registration_step2.checked = 0;
			registration_step2.serviceDetails = [];
			registration_step2.showId = function($event){
				registration_step2.checked = 1;
				console.log($event.target.defaultValue);
				userDetails.setMembershipType($event.target.defaultValue);
				
				var serviceCenterCode = (!localStorage.getItem('serviceCenterCode')? '' :localStorage.getItem('serviceCenterCode'));
				var servicelocation = (!localStorage.getItem('servicelocation')? '' :localStorage.getItem('servicelocation'));
				var data = {
					 "memberType"      : $event.target.defaultValue,
					 "serviceLocation" : servicelocation, 
					 "serviceCenter"   : serviceCenterCode
				};
				registration_step2Service.postUserDataStep2(data,function(response){
					registration_step2.serviceDetails = [];
					for(var i=0;i<response.data.length;i++){
						registration_step2.serviceDetails.push(response.data[i]);
					}
				});
			}
			
			function onsubmit() {
				$state.go(famConstants.STATE_USER.registration_step3);
			}
		}
		
})();