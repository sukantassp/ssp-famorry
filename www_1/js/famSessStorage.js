(function () {
    'use strict';

    angular
        .module(FAM_MODULE)
        .factory('famSessStorage', famSessStorage);

    famSessStorage.$inject = ['$window'];
    function famSessStorage($window) {

        return {
            setUserDetails: setUserDetails,
            getUserDetails: getUserDetails,
            setTestDetails: setTestDetails,
            getTestDetails: getTestDetails,
			setUserType: setUserType,
			getUserType: getUserType,
            setSurveysDetails: setSurveysDetails,
            getSurveysDetails: getSurveysDetails,
            setUserRegisterDetails:setUserRegisterDetails,
            getUserRegisterDetails:getUserRegisterDetails,
            setUserVCode: setUserVCode,
			getUserVCode: getUserVCode,
			setUserId:setUserId,
			getUserId:getUserId,
			setCenterCode:setCenterCode,
			//getCenterCode:getCenterCode,
			setPaymentMode:setPaymentMode,
			//getPaymentMode:getPaymentMode,
			setServiceLocation:setServiceLocation,
			//getServiceLocation:getServiceLocation,
			setMemberId:setMemberId,
			//getMemberId:getMemberId,
			setMemberName:setMemberName,
			//getMemberName:getMemberName,
			setFamilyId:setFamilyId,
			//getFamilyId:getFamilyId,
			setMembershipType:setMembershipType
			//getMembershipType:getMembershipType,
        };
        ////////////////
		function  setUserId (data) {
			if (data) {
				localStorage.setItem('UserId',data);
			} else {
				localStorage.setItem('UserId',null);
			}
		}
		function getUserId(){
			if(localStorage.getItem('UserId')){
				return localStorage.getItem('UserId');
			} else {
				return null;
			}
		}
		
		function  setUserVCode (data) {
			if (data) {
				localStorage.setItem('setUserVerificationCode',data);
			} else {
				localStorage.setItem('setUserVerificationCode',null);
			}
		}
		
		function getUserVCode(){
			if(localStorage.getItem('setUserVerificationCode')){
				return localStorage.getItem('setUserVerificationCode');
			} else {
				return null;
			}
		}
		function setUserType (data){
			if(data){
				localStorage.setItem('UserType',data);
			} else {
				localStorage.setItem('UserType',null);
			}
		}
		function getUserType(){
			if(localStorage.getItem('UserType')){
				return localStorage.getItem('UserType');
			} else {
				return null;
			}
		}
        function setUserDetails(data) {
            if (data) {
				localStorage.setItem('loggedInUser',JSON.stringify(data));
               
            } else {
               localStorage.setItem('loggedInUser',null);
            }
        }

        function getUserDetails() {
            if (localStorage.getItem('loggedInUser')) {
                return JSON.parse(localStorage.getItem('loggedInUser'));
            }
            return null;
        }
		
		function setUserRegisterDetails(data) {
            if (data) {
				localStorage.setItem('UserRegisterDetails',JSON.stringify(data));
                
            } else {
                localStorage.setItem('UserRegisterDetails',null);
            }
        }
		
        function getUserRegisterDetails() {
			if (localStorage.getItem('UserRegisterDetails')) {
				return JSON.parse(localStorage.getItem('UserRegisterDetails'));
            }
            return null;
        }
        
        function setTestDetails(data) {
            if (data) {
                $window.sessionStorage.testDetails = JSON.stringify(data);
            } else {
                $window.sessionStorage.testDetails = null;
            }
        }

        function getTestDetails() {
            if ($window.sessionStorage.testDetails) {
                return JSON.parse($window.sessionStorage.loggedInUser);
            }
            return null;
        }

        function setSurveysDetails(data) {
            if (data) {
                $window.sessionStorage.surveysDetails = JSON.stringify(data);
            } else {
                $window.sessionStorage.surveysDetails = null;
            }
        }

        function getSurveysDetails() {
            if ($window.sessionStorage.surveysDetails) {
                return JSON.parse($window.sessionStorage.surveysDetails);
            }
            return null;
        }
		function setCenterCode(data) {
			if (data) {
                localStorage.setItem('serviceCenterCode',data);
            } else {
               localStorage.setItem('serviceCenterCode',null);
            }
		}
		
		function setPaymentMode(data) {
			if (data) {
                localStorage.setItem('paymentmode',data);
            } else {
               localStorage.setItem('paymentmode',null);
            }
		}
		
        function setServiceLocation(data) {
			if (data) {
                localStorage.setItem('servicelocation',data);
            } else {
               localStorage.setItem('servicelocation',null);
            }
		}
		
		function setMemberId(data) {
			if (data) {
                localStorage.setItem('memberId',data);
            } else {
               localStorage.setItem('memberId',null);
            }
		}
		function setMemberName(data) {
			if (data) {
                localStorage.setItem('memberName',data);
            } else {
               localStorage.setItem('memberName',null);
            }
		}
		function setFamilyId(data) {
			if (data) {
                localStorage.setItem('familyId',data);
            } else {
               localStorage.setItem('familyId',null);
            }
		}
		
		function setMembershipType(data) {
			if (data) {
                localStorage.setItem('membertype',data);
            } else {
               localStorage.setItem('membertype',null);
            }
		}
        
        
    }
})();