(function (){
	'use strict';
			angular.module(FAM_CONTROLLER)
			
			.controller('registration_step3Ctrl', registration_step3Ctrl);
			registration_step3Ctrl.$inject = [ 'registration_step3Service','$scope', '$stateParams', '$http', '$timeout','famMessages','famConstants','userDetails','alertService','$state','$ionicPopup','$rootScope'];  
			function registration_step3Ctrl( registration_step3Service,$scope, $stateParams, $http, $timeout, famMessages, famConstants, userDetails,alertService, $state, $ionicPopup,$rootScope) {
				var registration_step3 = this;
				registration_step3.famConstants = famConstants;
				registration_step3.famMessages = famMessages;
				registration_step3.onsubmit = onsubmit;
				registration_step3.display = 0;
				var familyId = (!localStorage.getItem('familyId')? '' :localStorage.getItem('familyId'));
				var memberId = (!localStorage.getItem('memberId')? '' :localStorage.getItem('memberId'));
				var memberName = (!localStorage.getItem('memberName')? '' :localStorage.getItem('memberName'));
				var serviceCenterCode = (!localStorage.getItem('serviceCenterCode')? '' :localStorage.getItem('serviceCenterCode'));
				registration_step3.submitter_id = JSON.parse(localStorage.getItem('UserId'));
				registration_step3.payOnlineOptions = function(){
					registration_step3.display=1;
				}
				
				registration_step3.selectMode = function($event) {
					registration_step3.paymentMode = $event.target.value;
					userDetails.setPaymentMode($event.target.value);
				}
				
				function onsubmit(data) {
					registration_step3.submitted = true;
					if(registration_step3.paymentMode == '' || registration_step3.paymentMode == undefined) {
						var alertVO = {};
                    	alertVO.title = famMessages.MESSAGE.M100002;
                    	alertVO.message = famMessages.ERROR.M200026;
                    	alertService.openModal(alertVO);
                    	event.preventDefault()
					}else if(data.bankname == '' && data.referenceNo  == '' && data.paidAmount  =='' && 
					data.joiningdate == '' ){
						return false;
						event.preventDefault();
					}else {
					var formdata = {
						//"submitter_id" : registration_step3.submitter_id,
						"submitter_id" : "246",
						"submit_type"  : registration_step3.paymentMode,
					    "from_bank"	   : data.bankname,
					    "ref_no"	   : data.referenceNo,
						"amt"		   : data.paidAmount,
						"datepicker"   : data.joiningdate,
						"note"		   : data.additionalInfo,
						"cntr_cd"	   : serviceCenterCode,	
						"family_id"    : familyId,
						"member_id"    : memberId, 
						"member_name"  : memberName
					};
					registration_step3Service.postUserDataStep3(formdata,function(response){
						console.log(response);
						if(response.data.success == "true" && response.data.claimId != ""){
							
							registration_step3.subSuccess=1;
						}
					});
					}
				}
				
			}
})();