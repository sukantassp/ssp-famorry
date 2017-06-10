(function () {
    'use strict';

    angular
        .module(FAM_MODULE)
        .service('registrationService', registrationService);

    registrationService.$inject = ['$http', '$rootScope', '$window', '$state', 'famConstants', 'userDetails', 'famProxy','alertService','famMessages'];
    function registrationService($http, $rootScope, $window, $state, famConstants, userDetails, famProxy,
    alertService,famMessages) {
        return {
        setYearsDetails : setYearsDetails,
        getSexDetails : getSexDetails,
        setMonth : setMonth,
        setDays : setDays,
        
            postUserData: postUserData
        };
        var config = {
            headers : {
                'Content-Type': 'application/json'                                  
            }               
        }

        function postUserData(data,callback) {
//            return $http({
//                method: 'POST',
//                url: famProxy.getUrl(famConstants.STATE_USER.USER_REGISTRATION),
//                data: data
//            }).then(successHandler)
//            .catch(errorHandler);
               $http.post('http://fabfamilylife.com/app/frontend/mobapi/register/doregister', data, config).then(function(response) {
                callback(response.data);
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
        function setYearsDetails() {
            var year='',
            jsonYear = [];
            for(year = 1980; year<2016; year++){               
                jsonYear.push({
                    id: year.toString(),
                    optionValue: year
                });
            }
            return jsonYear;
        }

        function setDays() {
            var days='',
            jsonDay = [];
            for(days = 1; days<=31; days++){
               jsonDay.push({
                    id: days.toString(),
                    optionValue: days
                });
            }
            return jsonDay;
        }

        function setMonth() {
            var setMonth = '';
            return setMonth = [
            {
                id : '01',
                optionValue : 'January'
            },
            {
                id : '02',
                optionValue : 'February'
            },
            {
                id : '03',
                optionValue : 'March'
            },
            {
                id : '04',
                optionValue : 'April'
            },
            {
                id : '05',
                optionValue : 'May'
            },
            {
                id : '06',
                optionValue : 'June'
            },
            {
                id : '07',
                optionValue : 'July'
            },
            {
                id : '08',
                optionValue : 'August'
            },
            {
                id : '09',
                optionValue : 'September'
            },
            {
                id : '10',
                optionValue : 'October'
            },
            {
                id : '11',
                optionValue : 'November'
            },
            {
                id : '12',
                optionValue : 'December'
            }];
        }        

        function getSexDetails() {
            var sexDetails = '';
            return sexDetails = [
            {
                id : 'M',
                optionValue : 'Male'
            },
            {
                id : 'F',
                optionValue : 'Female'
            }];
        }
    }
})();



