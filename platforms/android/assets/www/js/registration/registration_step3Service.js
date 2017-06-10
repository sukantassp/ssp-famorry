(function () {
    'use strict';

    angular
        .module(FAM_MODULE)
        .service('registration_step3Service', registration_step3Service);

    registration_step3Service.$inject = ['$http', '$rootScope', '$window', '$state', 'famConstants','famProxy','alertService','famMessages'];
    function registration_step3Service($http, $rootScope, $window, $state, famConstants, famProxy,
    alertService,famMessages) {
        return {
			postUserDataStep3: postUserDataStep3
		};
		
        function postUserDataStep3(data,callback) {
			$http.post('http://fabfamilylife.com/app/frontend/mobapi/FundManagement/claimPayment',data).then(function(response) {
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
