(function () {
    'use strict';

    angular
        .module(FAM_MODULE)
        .service('registration_step2Service', registration_step2Service);

    registration_step2Service.$inject = ['$http', '$rootScope', '$window', '$state', 'famConstants','famProxy','alertService','famMessages'];
    function registration_step2Service($http, $rootScope, $window, $state, famConstants, famProxy,alertService,famMessages) {
   
        return {
			postUserDataStep2: postUserDataStep2,
		};
		
		function postUserDataStep2(data,callback) {
			$http.post
			('http://fabfamilylife.com/app/frontend/mobapi/Checkfammember/getServicePackage',data).then(function(response) {
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
