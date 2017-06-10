(function () {
	'use strict';
		angular.module(FAM_CONTROLLER)
		.controller('registrationCtrl', registrationCtrl);
		registrationCtrl.$inject = ['registrationService', '$scope', '$stateParams', '$http', '$timeout','famMessages','famConstants','userDetails','alertService','$state','$ionicPopup'];  
		function registrationCtrl(dataService, $stateParams, $scope, $http, $timeout, famMessages, famConstants, userDetails,alertService, $state, $ionicPopup) {
			var registration = this;
			registration.famConstants = famConstants;
			registration.famMessages = famMessages;
			registration.onsubmit = onsubmit;
			registration.checkedOrNot  = checkedOrNot;
			registration.checkTandC = termsAndConditon;
            registration.check = 0;           
			init();
			function init() {
                            registration.userSex = dataService.getSexDetails();
                            registration.birthYears = dataService.setYearsDetails();
                            registration.setDays = dataService.setDays();
                            registration.setMonth = dataService.setMonth();

                        }
                        function termsAndConditon() {
						   registration.check = 1;
					    };
                        function checkedOrNot (){
							
                            var alertPopup = $ionicPopup.alert({
                                title: famMessages.MESSAGE.M100003,
                                template: famMessages.MESSAGE.M100004,

                            });

                            alertPopup.then(function(res) {
                                console.log('Thanks');
                            });
                        }
			function onsubmit (data){
				
				registration.submitted = true;
				//userDetails.setUserDetails(response.token);
                /*userDetails.setUserVerificationCode(response.vcode);
                userDetails.setUserRegisterDetails(data);*/
               //userDetails.setUserDetails(data);
			    console.clear();
			    console.log(data);
                if(registration.check == 0){
					var alertVO = {};
					alertVO.title = famMessages.MESSAGE.M100002;
					alertVO.message = famMessages.ERROR.M200041;
					alertService.openModal(alertVO);
				}
				if (registration.registrationForm.$valid) {
					if(data.sex === ''){
						return false;
					}
					if(data.bday === ''){
						return false;
					}
					if(data.bmonth === ''){
						return false;
					}
					if(data.byear === ''){
						return false;
					}
					if(data.cpass === ''){
						return false;
					}
					if(data.email === ''){
						return false;
					}
					if(data.fname === ''){
						return false;
					}
					if(data.lname === ''){
						return false;
					}
					if(data.pass === ''){
						return false;
					}
					if(data.ph === ''){
						return false;
					}
					data['extfammem'] = '';
                       
                        registration.formData = data;     
                        dataService.postUserData(registration.formData,function (response) {
							if( response.success === "true" ){
								var token = registration.formData.ph+':'+response.token+': M';
								userDetails.setUserDetails(token);
								userDetails.setUserRegisterDetails(data);
								userDetails.setUserId(response.user_id);
								userDetails.setUserVCode(response.vcode);
								$state.go(famConstants.STATE_USER.dosignup);
							}else if(response.success === "false") {
								var alertVO = {};
								alertVO.title = famMessages.MESSAGE.M100002;
								alertVO.message = response.msg;
								alertService.openModal(alertVO);
							}else {
								var alertVO = {};
								alertVO.title = famMessages.MESSAGE.M100002;
								alertVO.message = famMessages.ERROR.M200043;
								alertService.openModal(alertVO);
							}
                        });
				}

			}
		}
})();
 