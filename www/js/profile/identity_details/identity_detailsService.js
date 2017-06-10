(function() {
    'use strict';

    angular
        .module(FAM_SERVICES)
        .factory('identity_detailsService', identity_detailsService);

    identity_detailsService.$inject = ['$http', 'famProxy', 'famConstants', 'alertService', 'famMessages'];
    var config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    function identity_detailsService($http, famProxy, famConstants, alertService, famMessages) {
        return {
            // GetUserIdentity: GetUserIdentity,
            PostIdentityDetails: PostIdentityDetails,
            IdentityProof: IdentityProof,

            ShowIdentityDetails: ShowIdentityDetails,
            // DeleteQualificationDetailsSection: DeleteQualificationDetailsSection,
            GetStateDetails: GetStateDetails,
            GetCountryDetails: GetCountryDetails,
            GetAutoMemberPresentAddress: GetAutoMemberPresentAddress

        };


        function IdentityProof() {
            var Identity_Proof = '';
            return Identity_Proof = [{
                    id: "01",
                    optionValue: "PAN Card"
                },
                {
                    id: "02",
                    optionValue: "Voter ID"
                },
                {
                    id: "03",
                    optionValue: "Adhaar"
                },
                {
                    id: "04",
                    optionValue: "Driving Licence"
                },
                {
                    id: "05",
                    optionValue: "Passport"
                }
            ]

        };

        function GetAutoMemberPresentAddress(data, callback) {
            $http.get('http://fabfamilylife.com/app/frontend/mobapi/PersonalInfo/getMemberProfileDetails', { params: data }).then(function(response) {
                    callback(response);
                })
                .catch(errorHandler);
        }



        // function GetUserQualification(callback) {
        //     $http.get('http://fabfamilylife.com/app/setupmobapi/Masterdata/allEducationQualification', config).then(function(response) {
        //             callback(response);
        //         })
        //         .catch(errorHandler);
        // }

        function PostIdentityDetails(data, callback) {
            $http.post('http://fabfamilylife.com/app/frontend/mobapi/IdentityMaintainance/addNewIdentity', data).then(function(response) {
                    callback(response);
                })
                .catch(errorHandler);
        }

        function ShowIdentityDetails(data, callback) {
            $http.get('http://fabfamilylife.com/app/frontend/mobapi/IdentityMaintainance/getMembersIdentityList', { params: data }).then(function(response) {
                    callback(response);
                })
                .catch(errorHandler);
        }

        // function DeleteQualificationDetailsSection(data, callback) {
        //     $http.get('http://fabfamilylife.com/app/frontend/mobapi/EducationDetails/deleteEduDetails', { params: data }).then(function(response) {
        //             callback(response);
        //         })
        //         .catch(errorHandler);
        // }

        function GetCountryDetails(callback) {
            $http.get('http://fabfamilylife.com/app/setupmobapi/masterdata/getCountry').then(function(response) {
                    callback(response);
                })
                .catch(errorHandler);
        };

        function GetStateDetails(data, callback) {
            $http.get('http://fabfamilylife.com/app/setupmobapi/masterdata/getState', { params: data }).then(function(response) {
                    callback(response);
                })
                .catch(errorHandler);
        };

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