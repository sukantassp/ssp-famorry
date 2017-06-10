(function() {
    'use strict';

    angular
        .module(FAM_SERVICES)
        .factory('employmentDataService', employmentDataService);

    employmentDataService.$inject = ['$http', 'famProxy', 'famConstants', 'alertService', 'famMessages'];

    function employmentDataService($http, famProxy, famConstants, alertService, famMessages) {
        return {
            getEmploymetData: getEmploymetData,
            deleteEmployment: deleteEmployment,
            postEmploymetData: postEmploymetData
        };
        var config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        function getEmploymetData(data, callback) {
            $http.get('http://fabfamilylife.com/app/frontend/mobapi/EmploymentDetails/getEmploymentDetailListOfMembers', { params: data }, config)
                .then(function(response) {
                    callback(response.data);
                })
                .catch(errorHandler);
        }

        function deleteEmployment(data, callback) {
            $http.get('http://fabfamilylife.com/app/frontend/mobapi/EmploymentDetails/deleteEmploymentDetails', { params: data }, config)
                .then(function(response) {
                    callback(response.data);
                })
                .catch(errorHandler);
        }

        function postEmploymetData(data, callback) {
            $http.post('http://fabfamilylife.com/app/frontend/mobapi/EmploymentDetails/addEmploymentDetails', data, config)
                .then(function(response) {
                    callback(response.data);
                })
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