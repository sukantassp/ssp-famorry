(function () {
    'use strict';

    angular
        .module(FAM_MODULE)
        .service('registration_step1Service', registration_step1Service);

    registration_step1Service.$inject = ['$http', '$rootScope', '$window', '$state', 'famConstants','famProxy','alertService','famMessages'];
    function registration_step1Service($http, $rootScope, $window, $state, famConstants, famProxy,
    alertService,famMessages) {
        return {
			postUserDataStep1: postUserDataStep1,
			postUserDataStep2: postUserDataStep2
        };
		//var activeUser = userDetails.getUserDetails();
		

        function postUserDataStep1(callback) {
			$http.get('http://fabfamilylife.com/app/setupmobapi/masterdata/getlocation').then(function(response) {
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
		
		function postUserDataStep2(data,callback){
			$http.get('http://fabfamilylife.com/app/setupmobapi/masterdata/getcenter',{params:data}).then(function(response) {
						callback(response);
					})
				.catch(errorHandler);
		}
       

        

         

       
    }
})();
