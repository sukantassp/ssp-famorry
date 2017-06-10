(function(){
    'use strict';
        angular.module(FAM_CONTROLLER)
        .controller('dosignupCtrl', dosignupCtrl);
        dosignupCtrl.$inject = ['dosignupService', '$scope', '$stateParams', '$http', '$timeout','famMessages','famConstants','userDetails','alertService','$state','$ionicPopup'];  
        function dosignupCtrl(dosignupService, $stateParams, $scope, $http, $timeout, famMessages, famConstants, userDetails,alertService, $state, $ionicPopup) {
            var dosignup = this;
            dosignup.famConstants = famConstants;
            dosignup.famMessages = famMessages;
            dosignup.onsubmit = onsubmit;
           // var registered_data = userDetails.getUserRegisterDetails(); 
		   /* ***********getUserRegisterDetails and getUserId  not working*************** */
            var registered_data = JSON.parse(localStorage.getItem('UserRegisterDetails'));
			var userId = localStorage.getItem('UserId');
			var vCode = localStorage.getItem('setUserVerificationCode');
			var opt_data ={
				userID: userId,
				faname: registered_data.fname,
				laname: registered_data.lname,
				sex   : registered_data.sex,
				vcode : vCode,
				mob_no: registered_data.ph,
				byear : registered_data.byear,
				bmonth: registered_data.bmonth,
				bday  : registered_data.bday,
				ext_fam_mem: registered_data.extfammem
			};
			console.log(opt_data)
			var phone = registered_data.ph;
			
			dosignup.phoneString = phone.toString().slice(7,10);
			
				
            function onsubmit (data){
               
				dosignup.submitted = true;
               
					if(vCode==data.vCode){
                        dosignupService.postUserDataAfterVerify(opt_data,function(response){
							console.log('dosignup');
                            console.log(response);
							userDetails.setMemberId(response.data.member_id);
							userDetails.setMemberName(response.data.member_name);
							userDetails.setFamilyId(response.data.family_id);
							$state.go(famConstants.STATE_USER.registration_statup);
                        });
                    } else if(data.vCode == ''){
							return false;
					}else {
						var alertVO = {};
                    	alertVO.title = famMessages.MESSAGE.M100002;
                    	alertVO.message = famMessages.ERROR.M200025;
                    	alertService.openModal(alertVO);
					}
            }
        }    
/*mothers day https://www.youtube.com/watch?v=BsdcCFOUfqs*/        
})();

