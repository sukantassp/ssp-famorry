(function () {
    'use strict';

    angular
        .module(FAM_MODULE)
        .service('dosignupService', dosignupService);

    dosignupService.$inject = ['$http', '$rootScope', '$window', '$state', 'famConstants','famProxy','alertService','famMessages'];
    function dosignupService($http, $rootScope, $window, $state, famConstants, famProxy,
    alertService,famMessages) {
        return {
			postUserDataAfterVerify: postUserDataAfterVerify
        };
        var config = {
            headers : {
                'Content-Type': 'application/json'                                  
            }               
        }

        function postUserDataAfterVerify(data,callback) {
			$http.post('http://fabfamilylife.com/app/frontend/mobapi/register/otpverify', data, config).then(function(response) {
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


