(function (){
	'use strict';
			angular.module(FAM_CONTROLLER)
			
			.controller('registration_step4Ctrl', registration_step4Ctrl);
			registration_step4Ctrl.$inject = [ 'registration_step4Service','$scope', '$stateParams', '$http', '$timeout','famMessages','famConstants','userDetails','alertService','$state','$ionicPopup','$rootScope'];  
			function registration_step4Ctrl( registration_step4Service,$scope, $stateParams, $http, $timeout, famMessages, famConstants, userDetails,alertService, $state, $ionicPopup,$rootScope) {
				var registration_step4 = this;
				registration_step4.famConstants = famConstants;
				registration_step4.famMessages = famMessages;
				registration_step4.onsubmit = onsubmit;
				registration_step4.country = [];
				registration_step4.state = [];
				var serviceCenterCode = (!localStorage.getItem('serviceCenterCode')? '' :localStorage.getItem('serviceCenterCode'));
				var servicelocation = (!localStorage.getItem('servicelocation')? '' :localStorage.getItem('servicelocation'));
				var UserId = (!localStorage.getItem('UserId')? '' :localStorage.getItem('UserId'));
				var UserType = (!localStorage.getItem('UserType')? '' :localStorage.getItem('UserType'));
				var UserRegisterDetails = (!localStorage.getItem('UserRegisterDetails')? '' :JSON.parse(localStorage.getItem('UserRegisterDetails')));
				var familyId = (!localStorage.getItem('familyId')? '' :localStorage.getItem('familyId'));
				var memberId = (!localStorage.getItem('memberId')? '' :localStorage.getItem('memberId'));
				var memberName = (!localStorage.getItem('memberName')? '' :localStorage.getItem('memberName'));
				var membertype = (!localStorage.getItem('membertype')? '' :localStorage.getItem('membertype'));
				var paymentmode = (!localStorage.getItem('paymentmode')? '' :localStorage.getItem('paymentmode'));
				
				//registration_step3.submitter_id = JSON.parse(localStorage.getItem('UserId'));
				registration_step4Service.postUserDataCountry(function(response){
						console.log(response);
						for(var i=0;i<response.data.length;i++){
							registration_step4.country.push(response.data[i]);
						}
				});
				

				registration_step4.getState = function(country) {
					var data ={
						"cntry" : country
					};
					registration_step4Service.postUserDataState(data,function(response){
						console.log(response)
						for(var i=0;i<response.data.length;i++) {
							registration_step4.state.push(response.data[i]);
						}
					});
				}
				
				function onsubmit(data) {
					registration_step4.submitted = true;
					console.log(UserRegisterDetails)
					
					
					console.log(data);
					var data ={"userID" : UserId, 'emailId' : UserRegisterDetails.email,'familyId' : familyId,'memberId' : memberId, 'memberName' : memberName, 'gender' : UserRegisterDetails.sex, 'memType' : UserType ,'servLoc' : servicelocation, 'servCntr' : serviceCenterCode, 'flatNo' : data.flatno, 'premises' : data.Premises, 'road' : data.Road, 'area': data.Area, 'town': data.town, 'state' : data.state, 'country': data.country, 'pin' : data.pincode, 'lLineNo' : '', 'mobileNo' : data.mobile, 'idp' : 'PAN', 'ipn' : 'acv1256', 'mbrshipType' : membertype, 'refType' : '', 'refMemId' : '', 'refMemName' : '', 'couponCode' : ''   };
					registration_step4Service.postUserDataStep4(data,function(response){
						console.log(response)
						
						if(response.data.msg == "FAM114") {
							$state.go(famConstants.STATE_USER.HOME);
						}
					});
					
				}
				
			}
})();