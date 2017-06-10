(function (){
	'use strict';
			angular.module(FAM_CONTROLLER)
			
			.controller('registration_step1Ctrl', registration_step1Ctrl);
			registration_step1Ctrl.$inject = [ 'registration_step1Service','$scope', '$stateParams', '$http', '$timeout','famMessages','famConstants','userDetails','alertService','$state','$ionicPopup','$rootScope'];  
			function registration_step1Ctrl( registration_step1Service,$scope, $stateParams, $http, $timeout, famMessages, famConstants, userDetails,alertService, $state, $ionicPopup,$rootScope) {
				var registration_step1 = this;
				registration_step1.famConstants = famConstants;
				registration_step1.famMessages = famMessages;
				registration_step1.onsubmit = onsubmit;
				var activeUser = JSON.parse(localStorage.getItem('loggedInUser'));
				registration_step1.serviceLocation = [];
				registration_step1.serviceCenter = [];
				var config = {
					headers : {
						'Content-Type'	: 'application/json',
						'Authorization' : 'Bearer'+' '+activeUser 		
					}               
				}
				
				registration_step1Service.postUserDataStep1(function (response) {
						for(var i=0;i<response.data.length;i++){
							registration_step1.serviceLocation.push(response.data[i]) ;
							
						}
				});
				
				registration_step1.getCenter =function(option){
					
					userDetails.setServiceLocation(option);
					var data ={
						"location":option
					};
					registration_step1Service.postUserDataStep2(data,function (response) {
						console.log(response)
						registration_step1.locationAddress = response.data[0].address;
						userDetails.setCenterCode(response.data[0].service_cntr_cd);
						registration_step1.center  = registration_step1.locationAddress;
						registration_step1.locationn = registration_step1.locationAddress;
						for(var i=0;i<response.data.length;i++){
							registration_step1.serviceCenter.push(response.data[i]) ;
						}
					});
				}
				
				function onsubmit(data){
					console.log(data);
					registration_step1.submitted = true;
					
					
					if(data.location === ''){
						return false;
						event.preventDefault()
					}
					if(data.serviceCenter === ''){
						return false;
						event.preventDefault()
					}
					if(data.location !== '' && data.serviceCenter !== '') {
						$state.go('registration_step2');
					}
					
					
				}
			}
})();