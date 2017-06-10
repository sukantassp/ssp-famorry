(function() {
    'use strict';

    angular
        .module(FAM_SERVICES)
        .factory('education_detailsService', education_detailsService);

    education_detailsService.$inject = ['$http', 'famProxy', 'famConstants', 'alertService', 'famMessages'];
    var config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    function education_detailsService($http, famProxy, famConstants, alertService, famMessages) {
        return {
            GetUserQualification: GetUserQualification,
            PostEducationDetails: PostEducationDetails,
            entryYear: entryYear,
            entryMonth: entryMonth,
            passingYear: passingYear,
            ShowUserQualificationDetails: ShowUserQualificationDetails,
            DeleteQualificationDetailsSection: DeleteQualificationDetailsSection

        };

        function entryMonth() {
            var Entry_Month = '';
            return Entry_Month = [{
                    id: "01",
                    optionValue: "January"
                },
                {
                    id: "02",
                    optionValue: "February"
                },
                {
                    id: "03",
                    optionValue: "March"
                },
                {
                    id: "04",
                    optionValue: "April"
                },
                {
                    id: "05",
                    optionValue: "May"
                },
                {
                    id: "06",
                    optionValue: "June"
                },
                {
                    id: "07",
                    optionValue: "July"
                },
                {
                    id: "08",
                    optionValue: "August"
                },
                {
                    id: "09",
                    optionValue: "Setember"
                },
                {
                    id: "10",
                    optionValue: "October"
                },
                {
                    id: "11",
                    optionValue: "November"
                },
                {
                    id: "12",
                    optionValue: "December"
                }

            ]

        };

        function entryYear() {
            var Entry_Year = '';
            var jsnYear = [];
            for (Entry_Year = 1970; Entry_Year <= 2017; Entry_Year++) {
                jsnYear.push({
                    id: Entry_Year.toString(),
                    optionValue: Entry_Year
                })
            }
            return jsnYear;
        };

        function passingYear(eyr) {
            var startYear = ++eyr;
            console.log(startYear)
            var Passing_Year = '';
            var jsonYear = [];
            for (Passing_Year = startYear; Passing_Year <= 2017; Passing_Year++) {
                jsonYear.push({
                    id: Passing_Year.toString(),
                    optionValue: Passing_Year
                })
            }
            return jsonYear;

        };

        function GetUserQualification(callback) {
            $http.get('http://fabfamilylife.com/app/setupmobapi/Masterdata/allEducationQualification', config).then(function(response) {
                    callback(response);
                })
                .catch(errorHandler);
        }

        function PostEducationDetails(data, callback) {
            $http.post('http://fabfamilylife.com/app/frontend/mobapi/EducationDetails/addEducationDetails', data).then(function(response) {
                    callback(response);
                })
                .catch(errorHandler);
        }

        function ShowUserQualificationDetails(data, callback) {
            $http.get('http://fabfamilylife.com/app/frontend/mobapi/EducationDetails/getEducationDetailListOfMembers', { params: data }).then(function(response) {
                    callback(response);
                })
                .catch(errorHandler);
        }

        function DeleteQualificationDetailsSection(data, callback) {
            $http.get('http://fabfamilylife.com/app/frontend/mobapi/EducationDetails/deleteEduDetails', { params: data }).then(function(response) {
                    callback(response);
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