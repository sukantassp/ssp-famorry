// (function() {
//     'use strict';
//     angular.module(FAM_CONTROLLER)
//         .controller('employment_detailsCtrl', employment_detailsCtrl);
//     employment_detailsCtrl.$inject = ['$stateParams', '$http', '$timeout', 'famMessages', 'famConstants', 'userDetails', 'alertService', '$state'];

//     function employment_detailsCtrl($stateParams, $http, $timeout, famMessages, famConstants, userDetails, alertService, $state) {
//         var employmentDetails = this;
//         employmentDetails.famMessages = famMessages;
//         employmentDetails.famConstants = famConstants;
//         employmentDetails.addButton = 0;
//         employmentDetails.onsubmit = onsubmit;
//         init();

//         function init() {
//             educationDetails.entryYear = education_detailsService.entryYear(),
//                 educationDetails.entryMonth = education_detailsService.entryMonth()
//         }

//         educationDetails.e_year = function(eyear) {
//             educationDetails.passingYear = education_detailsService.passingYear(eyear);
//         };
//         education_detailsService.GetUserQualification(function(response) {
//             console.log(response);
//         });

//         function onsubmit(data) {

//             employmentDetails.submitted = true;
//             if (login.loginForm.$valid) {
//                 login.formData = data;
//                 dataService.getUserData(login.formData, function(response) {
//                     if (response && response.success == 'true') {
//                         var token = login.formData.user + ':' + response.token + ':M';
//                         userDetails.setUserDetails(token);
//                         //testerService.prepreNotifications(response.data.notifications);
//                         $state.go(famConstants.STATE_USER.HOME);
//                     } else {
//                         var alertVO = {};
//                         alertVO.title = famMessages.MESSAGE.M100002;
//                         alertVO.message = famMessages.ERROR.M200008;
//                         alertService.openModal(alertVO);
//                         //login.showServerErrorMsg(response.errorCode);
//                     }

//                 });
//             }
//         }

//         employmentDetails.add = function() {
//             employmentDetails.clickAdd = 1;
//             employmentDetails.addButton = 1;
//         };

//     }


// })();

(function() {
    'use strict';
    angular.module(FAM_CONTROLLER)
        .controller('employment_detailsCtrl', employment_detailsCtrl);
    employment_detailsCtrl.$inject = ['employmentDataService', '$ionicScrollDelegate', '$ionicPopup', '$stateParams', '$http', '$timeout', 'famMessages', 'famConstants', 'userDetails', 'alertService', '$state'];

    function employment_detailsCtrl(dataService, $ionicScrollDelegate, $ionicPopup, $stateParams, $http, $timeout, famMessages, famConstants, userDetails, alertService, $state) {
        var employmentDetails = this;
        employmentDetails.userLocked = false;
        employmentDetails.deleteEmployment = deleteEmployment;
        employmentDetails.famMessages = famMessages;
        employmentDetails.famConstants = famConstants;
        employmentDetails.addButton = 0;
        employmentDetails.details = 0;
        employmentDetails.onsubmit = onsubmit;
        //employmentDetails.updateEmployment = updateEmployment;
        employmentDetails.info = {};
        var familyId = (!localStorage.getItem('familyId') ? '' : localStorage.getItem('familyId'));
        var memberId = (!localStorage.getItem('memberId') ? '' : localStorage.getItem('memberId'));
        var userId = (!localStorage.getItem('UserId') ? '' : localStorage.getItem('UserId'));
        var userInfo = userDetails.getUserInfo();
        var param = { familyID: familyId, memberID: memberId };

        employmentDetails.errorCheck = function(data) {
            var today = new Date().getTime();
            var issuedate = new Date(data.stratingdate).getTime();
            var end_date = new Date(data.e_date).getTime();


            if (end_date <= issuedate) {
                employmentDetails.endDateCheck = 1;
                return false;
            } else {
                employmentDetails.endDateCheck = 0;
            }

            if (issuedate > today) {
                // employmentDetails.endDateCheck = 2;
                if (end_date > today) {
                    employmentDetails.endDateCheck = 2;
                    return false;
                } else {
                    employmentDetails.startDateCheck = 3;
                    return false;
                }
            } else {
                employmentDetails.startDateCheck = 0;
            }
            if (end_date > today) {
                employmentDetails.endDateCheck = 2;
                return false;
            } else {
                employmentDetails.endDateCheck = 0;
            }
        };

        dataService.getEmploymetData(param, function(response) {
            console.log('get')
            console.log(response)
            if (response && response.success === 'true') {
                employmentDetails.info = response.data;
                employmentDetails.details = 1;
            } else {
                //employmentDetails.showServerErrorMsg(response.errorCode);
            }

        });

        function onsubmit(data) {
            console.log(data);
            employmentDetails.submitted = true;
            var today = new Date().getTime();

            var end_date = new Date(data.e_date).getTime();
            var issuedate = new Date(data.stratingdate).getTime();

            if (end_date <= issuedate) {
                employmentDetails.endDateCheck = 1;
                return false;
            }

            if (issuedate > today) {
                employmentDetails.endDateCheck = 2;
                if (end_date > today) {
                    employmentDetails.endDateCheck = 2;
                    return false;
                } else {
                    employmentDetails.endDateCheck = 2;
                    return false;
                }
            }
            if (end_date > today) {
                employmentDetails.endDateCheck = 2;
                return false;
            }

            if (employmentDetails.employment.$valid) {
                console.log(data);
                employmentDetails.formData =

                    {
                        "familyID": familyId,
                        "memberID": memberId,
                        "organizationName": data.org_name,
                        "startDt": data.stratingdate,
                        "endDt": data.e_date,
                        "desig": data.designation,
                        "orgAddrs": data.org_address,
                        "orgContact": data.org_contact
                    };
                dataService.postEmploymetData(employmentDetails.formData, function(response) {
                    console.log(response)
                    if (response && response.success == 'true') {
                        var alertVO = {};
                        alertVO.title = famMessages.MESSAGE.M100002;
                        alertVO.message = famMessages.SUCCESS.M300001;
                        alertService.openModal(alertVO);
                        employmentDetails.clickAdd = 0;
                        employmentDetails.addButton = 0;
                        $ionicScrollDelegate.scrollTop('1000');
                    } else {
                        var alertVO = {};
                        alertVO.title = famMessages.MESSAGE.M100002;
                        alertVO.message = famMessages.ERROR.M200008;
                        alertService.openModal(alertVO);
                    }

                });
            }
        }
        employmentDetails.add = function() {
            $ionicScrollDelegate.scrollBottom('1000');
            employmentDetails.clickAdd = 1;
            employmentDetails.addButton = 1;
        };
        employmentDetails.cancel = function() {
            employmentDetails.clickAdd = 0;
            employmentDetails.addButton = 0;
            $ionicScrollDelegate.scrollTop('1000');
        }


        function deleteEmployment(data) {
            var confirmPopup = $ionicPopup.confirm({
                title: famMessages.MESSAGE.M100002,
                template: famMessages.MESSAGE.M200054
            });

            confirmPopup.then(function(res) {
                if (res) {
                    var deleteEmploymentparam = { honouraryPositionID: data.member_emp_id, familyID: userInfo.family_id, memberID: userInfo.member_id };
                    dataService.deleteEmployment(param, function(response) {
                        if (response && response.success == 'true') {
                            var selectedEmploymet = employmentDetails.info.filter(function(obj) {
                                return obj.member_emp_id === data.member_emp_id;
                            });
                            employmentDetails.info.splice(selectedEmploymet, 1);
                            var alertVO = {};
                            alertVO.title = famMessages.MESSAGE.M100002;
                            alertVO.message = famMessages.MESSAGE.FAM141;
                            alertService.openModal(alertVO);
                        } else {
                            var alertVO = {};
                            alertVO.title = famMessages.MESSAGE.M100002;
                            alertVO.message = famMessages.MESSAGE.M200055;
                            alertService.openModal(alertVO);
                        }
                    });
                }
            });
        }

    }

    function showServerErrorMsg(code) {
        /*ctrl.serverErrorMsg = ptpMessages.BUSINESS_MESSAGE[code];
        if (code === 900006 || code === 900002 || code === 900008) {
            ctrl.userLocked = true;
        }*/
    }


})();