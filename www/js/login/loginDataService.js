(function () {
    'use strict';

    angular
        .module(FAM_SERVICES)
        .factory('loginDataService', loginDataService);

    loginDataService.$inject = ['$http', 'famProxy', 'famConstants','alertService','famMessages'];
    function loginDataService($http, famProxy, famConstants, alertService, famMessages) {
        return {
            getUserData: getUserData,
            logout: logout
        };
        var config = {
            headers : {
                'Content-Type': 'application/json'                                  
            }               
        }
        
        function getUserData(data,callback) {
           /* return $http({
                method: 'GET',
                url: famProxy.getUrl(famConstants.STATE_USER.USER_LOGIN),				
                data: data
            })*/
			console.log(data);
            $http.get('http://fabfamilylife.com/app/frontend/mobapi/front/dologin', {params:data}, config)            
            //}).then(successHandler)
            .then(function(response) {
                callback(response.data);
            })
            .catch(errorHandler);
        }

        function logout(data) {
            return $http({
                method: 'POST',
                //url: ptpTesterProxy.getUrl(ptpConstants.WS_TESTER.LOGOUT)
            }).then()
            .catch(errorHandler);
        }

        function successHandler(response) {
            return response.data;
        }
        function errorHandler(error) {
            var alertVO = {};
            alertVO.title = famMessages.MESSAGE.M100002;
            alertVO.message = famMessages.ERROR.M200009;
            alertService.openModal(alertVO);
        }

    }
})();

