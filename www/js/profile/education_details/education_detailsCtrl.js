(function() {
    'use strict';
    angular.module(FAM_CONTROLLER)
        .controller('education_detailsCtrl', education_detailsCtrl);
    education_detailsCtrl.$inject = ['education_detailsService', '$stateParams', '$http', '$timeout', 'famMessages', 'famConstants', 'userDetails', 'alertService',
        '$state', '$ionicScrollDelegate', '$ionicPopup'
    ];

    function education_detailsCtrl(education_detailsService, $stateParams, $http, $timeout, famMessages, famConstants, userDetails, alertService, $state, $ionicScrollDelegate, $ionicPopup) {
        var educationDetails = this;
        educationDetails.famMessages = famMessages;
        educationDetails.famConstants = famConstants;
        educationDetails.qualifications = [];
        educationDetails.showQualification = {};
        educationDetails.addButton = 0;

        educationDetails.onsubmit = onsubmit;
        var familyId = (!localStorage.getItem('familyId') ? '' : localStorage.getItem('familyId'));
        var memberId = (!localStorage.getItem('memberId') ? '' : localStorage.getItem('memberId'));
        init();

        function init() {
            educationDetails.entryYear = education_detailsService.entryYear(),
                educationDetails.entryMonth = education_detailsService.entryMonth()
        }

        educationDetails.e_year = function(eyear) {
            educationDetails.passingYear = education_detailsService.passingYear(eyear);
        };
        education_detailsService.GetUserQualification(function(response) {
            for (var i = 0; i < response.data.length; i++) {
                educationDetails.qualifications.push(response.data[i]);
            }
        });
        var show_data = {
            familyID: familyId,
            memberID: memberId
        };
        education_detailsService.ShowUserQualificationDetails(show_data, function(response) {
            console.log(response);
            if (response.data.data.length > 0 && response.data.success == "true") {
                // for (var i = 0; i < response.data.data.length; i++) {
                educationDetails.showQualification = response.data.data;
                //}
                console.clear()
                console.log(educationDetails.showQualification)
                educationDetails.details = 1;
            }
        });
        educationDetails.deleteRow = function(education) {
            var confirmPopup = $ionicPopup.confirm({
                title: famMessages.MESSAGE.M100002,
                template: famMessages.MESSAGE.M200056
            });
            confirmPopup.then(function(res) {
                if (res) {
                    var del_data = {
                        qualificationID: education.member_edu_id,
                        familyID: education.family_id,
                        memberID: education.member_id
                    };
                    education_detailsService.DeleteQualificationDetailsSection(del_data, function(response) {
                        console.log(response);
                        var selectedEmploymet = educationDetails.showQualification.filter(function(obj) {
                            return obj.member_edu_id === education.member_edu_id;
                        });
                        educationDetails.showQualification.splice(selectedEmploymet, 1);
                        if (response.data.success == "true") {
                            var alertVO = {};
                            alertVO.title = famMessages.MESSAGE.M100002;
                            alertVO.message = famMessages.MESSAGE.FAM142;
                            alertService.openModal(alertVO);
                        }
                    });
                }
            });
        }


        function onsubmit(data) {
            educationDetails.submitted = true;
            var post_data = {
                "familyID": familyId,
                "memberID": memberId,
                "qualification": data.qualification.translate_value,
                "institute": data.institute,
                "boardUniv": data.university,
                "entryMonth": data.month,
                "entryYear": data.eyear,
                "passingMonth": data.pmonth,
                "passingYear": data.pyear,
                "divisionGrade": data.division,
                "percentOfMarks": data.marks,
                "gradePT": ""
            };
            education_detailsService.PostEducationDetails(post_data, function(response) {
                console.log(response);
                if (response.data.success == 'true') {
                    var alertVO = {};
                    alertVO.title = famMessages.MESSAGE.M100002;
                    alertVO.message = famMessages.SUCCESS.M300001;
                    alertService.openModal(alertVO);

                    educationDetails.clickAdd = 0;
                    educationDetails.addButton = 0;
                    // $ionicScrollDelegate.scrollTop('1000');
                    education_detailsService.ShowUserQualificationDetails(show_data, function(response) {
                        console.log('check');
                        console.log(response);
                        if (response.data.data.length > 0 && response.data.success == "true") {
                            for (var i = 0; i < response.data.data.length; i++) {
                                if (educationDetails.showQualification.member_edu_id != response.data.data[i].member_edu_id) {
                                    educationDetails.showQualification.push(response.data.data[i]);
                                }

                            }
                            //console.clear()
                            console.log(educationDetails.showQualification)
                            educationDetails.details = 1;
                        }
                    });

                } else {
                    var alertVO = {};
                    alertVO.title = famMessages.MESSAGE.M100002;
                    alertVO.message = famMessages.ERROR.M200008;
                    alertService.openModal(alertVO);
                }

            });

        }
        educationDetails.add = function() {
            $ionicScrollDelegate.scrollBottom('1000');

            educationDetails.clickAdd = 1;
            educationDetails.addButton = 1;
        };
        educationDetails.cancel = function() {
            educationDetails.clickAdd = 0;
            educationDetails.addButton = 0;
        }
    }

    function showServerErrorMsg(code) {
        /*ctrl.serverErrorMsg = ptpMessages.BUSINESS_MESSAGE[code];
        if (code === 900006 || code === 900002 || code === 900008) {
            ctrl.userLocked = true;
        }*/
    }
})();