(function () {
    'use strict';

    angular
        .module(FAM_MODULE)
        .service('registration_step4Service', registration_step4Service);

    registration_step4Service.$inject = ['$http', '$rootScope', '$window', '$state', 'famConstants','famProxy','alertService','famMessages'];
    function registration_step4Service($http, $rootScope, $window, $state, famConstants, famProxy,
    alertService,famMessages) {
        return {
			postUserDataStep4: postUserDataStep4,
			postUserDataCountry: postUserDataCountry,
			postUserDataState: postUserDataState
			
		};
		
        function postUserDataCountry(callback) {
			$http.get('http://fabfamilylife.com/app/setupmobapi/masterdata/getCountry').then(function(response) {
					callback(response);
				})
            .catch(errorHandler);
        }
		
		function postUserDataState(data,callback) {
			$http.get('http://fabfamilylife.com/app/setupmobapi/masterdata/getState',{params:data}).then(function(response) {
					callback(response);
				})
            .catch(errorHandler);
        }
		
		function postUserDataStep4(data,callback) {
			$http.post
			('http://fabfamilylife.com/app/frontend/mobapi/RegistrationComplete/completeRegistration',data).then(function(response) {
					callback(response);
				})
            .catch(errorHandler);
        }
		
		function successHandler(response) {
            return response.data;
        }
        function errorHandler(error){
            var alertVO = {};
            alertVO.title = famMessages.MESSAGE.M100002;
            alertVO.message = famMessages.ERROR.M200009;
            alertService.openModal(alertVO);
        }
		
	 }
})();
