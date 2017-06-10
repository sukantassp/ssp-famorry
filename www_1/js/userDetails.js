(function () {
    'use strict';

    angular
        .module(FAM_MODULE)
        .factory('userDetails', userDetails);

    userDetails.$inject = ['famSessStorage'];
    function userDetails(famSessStorage) {
        var user = {};

        return {
            setUserDetails: setUserDetails,
            getUserDetails: getUserDetails,
			setUserType: setUserType,
			getUserType: getUserType,
            setUserRegisterDetails: setUserRegisterDetails,
			getUserRegisterDetails: getUserRegisterDetails,
			
			setUserId:setUserId,
			getUserId:getUserId,
			setUserVCode: setUserVCode,
			getUserVCode: getUserVCode,
			setCenterCode:setCenterCode,
			//getCenterCode:getCenterCode,
			setPaymentMode:setPaymentMode,
			//getpaymentMode:getpaymentMode,
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
		function setUserId(data) {
			user = data;
			famSessStorage.setUserId(data);
		}
		
		function getUserId(data) {
			return user;
		}
		
		function setUserVCode(data) {
			user = data;
			famSessStorage.setUserVCode(data);
		}
		
		function getUserVCode(data) {
			return user;
		}
		
		function setUserType(data) {
			user = data;
            famSessStorage.setUserType(data);
		}
		
		function getUserType(data) {
			return user;
            
		}
		
        function setUserDetails(data) {
            user = data;
            famSessStorage.setUserDetails(data);
        }

        function getUserDetails() {
            return user;
        }
        
        function setUserRegisterDetails(data){
            user = data;
            famSessStorage.setUserRegisterDetails(data);
        }
        
        function getUserRegisterDetails(){
			famSessStorage.getUserRegisterDetails();
            return user;
        }
        
        function setUserVerificationCode(data){
			
             user = data;
             famSessStorage.setUserVerificationCode(data);
        }
        
        function getUserVerificationCode(){
             return user;
        }
		
		function setCenterCode(data){
			user = data;
			famSessStorage.setCenterCode(data);
		}
		function setPaymentMode(data) {
			user = data;
			famSessStorage.setPaymentMode(data);
		}
		function setServiceLocation(data) {
			user = data;
			famSessStorage.setServiceLocation(data);
		}
		function setMemberId(data) {
			user = data;
			famSessStorage.setMemberId(data);
		}
		function setMemberName(data) {
			user = data;
			famSessStorage.setMemberName(data);
		}
		function setFamilyId(data) {
			user = data;
			famSessStorage.setFamilyId(data);
		}
		function setMembershipType(data) {
			user = data;
			famSessStorage.setMembershipType(data);
		}
    }
})();