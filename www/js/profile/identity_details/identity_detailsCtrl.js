(function() {
    'use strict';
    angular.module(FAM_CONTROLLER)
        .controller('identity_detailsCtrl', identity_detailsCtrl);
    identity_detailsCtrl.$inject = ['identity_detailsService', '$scope', '$stateParams', '$http', '$timeout', 'famMessages', 'famConstants', 'userDetails', 'alertService', '$state', '$ionicScrollDelegate'];

    function identity_detailsCtrl(identity_detailsService, $scope, $stateParams, $http, $timeout, famMessages, famConstants, userDetails, alertService, $state, $ionicScrollDelegate) {

        var identityDetails = this;
        identityDetails.addButton = 0;
        identityDetails.famMessages = famMessages;
        identityDetails.famConstants = famConstants;
        identityDetails.info = {};
        identityDetails.saveIdentityDetails = onsubmit;
        identityDetails.country = {};
        identityDetails.state = {};
        identityDetails.countryCode = '';
        identityDetails.countryName = '';
        identityDetails.stateName = '';
        identityDetails.endDateCheck = '';
        identityDetails.showidentitytable = 0;
        identityDetails.p_Addressinfo = {};
        identityDetails.contact_info = {};
        identityDetails.txtDisbled = 0;
        init();
        var familyId = (!localStorage.getItem('familyId') ? '' : localStorage.getItem('familyId'));
        var memberId = (!localStorage.getItem('memberId') ? '' : localStorage.getItem('memberId'));
        var userId = (!localStorage.getItem('UserId') ? '' : localStorage.getItem('UserId'));

        function init() {
            identityDetails.idProof = identity_detailsService.IdentityProof();
        };
        identityDetails.autoAddress = function(checkbox) {
            if (checkbox == "true") {

                var data = { memberID: memberId, familyID: familyId };
                identity_detailsService.GetAutoMemberPresentAddress(data, function(response) {
                    console.clear();
                    console.log(response);
                    if (response.data.success == "true") {
                        identityDetails.txtDisbled = 1;
                        identityDetails.p_Addressinfo = response.data.presentAddrsData;
                        identityDetails.contact_info = response.data.contactData;
                        console.log(identityDetails.p_Addressinfo);
                    }
                });
            } else {
                identityDetails.p_Addressinfo = {};
                identityDetails.contact_info = {};
                identityDetails.txtDisbled = 0;
            }
        }
        identity_detailsService.GetCountryDetails(function(response) {


            identityDetails.countryCode = response.data[0].country_code;
            identityDetails.countryName = response.data[0].country_desc;
            identityDetails.country = response.data;

        });
        var data = { familyID: familyId, memberID: memberId };
        identity_detailsService.ShowIdentityDetails(data, function(response) {
            if (response.data.success == "true") {
                identityDetails.info = response.data.data;
                identityDetails.showidentitytable = 1;
            } else {
                var alertVO = {};
                alertVO.title = famMessages.MESSAGE.M100002;
                alertVO.message = famMessages.MESSAGE.M100001;
                alertService.openModal(alertVO);
            }
        });
        identityDetails.add = function() {
            $ionicScrollDelegate.scrollBottom('1000');
            identityDetails.clickAdd = 1;
            identityDetails.addButton = 1;
            var params = { cntry: identityDetails.countryCode };
            identity_detailsService.GetStateDetails(params, function(response) {
                identityDetails.stateName = response.data[0].state_desc;
                identityDetails.state = response.data;
            });
        };

        identityDetails.cancel = function() {
            identityDetails.clickAdd = 0;
            identityDetails.addButton = 0;
            $ionicScrollDelegate.scrollTop('1000');
        }

        identityDetails.deleteIdentity = function(identity) {
            var alertVO = {};
            alertVO.title = famMessages.MESSAGE.M100002;
            alertVO.message = famMessages.WARNING.M400001;
            alertService.openModal(alertVO);
            // var confirmPopup = $ionicPopup.confirm({
            //     title: famMessages.MESSAGE.M100002,
            //     template: famMessages.MESSAGE.M200072
            // });
            // confirmPopup.then(function(res) {
            //     if (res) {
            //         var del_data = {
            //             qualificationID: education.member_edu_id,
            //             familyID: education.family_id,
            //             memberID: education.member_id
            //         };
            //         education_detailsService.DeleteQualificationDetailsSection(del_data, function(response) {
            //             console.log(response);
            //             var selectedEmploymet = educationDetails.showQualification.filter(function(obj) {
            //                 return obj.member_edu_id === education.member_edu_id;
            //             });
            //             educationDetails.showQualification.splice(selectedEmploymet, 1);
            //             if (response.data.success == "true") {
            //                 var alertVO = {};
            //                 alertVO.title = famMessages.MESSAGE.M100002;
            //                 alertVO.message = famMessages.MESSAGE.FAM142;
            //                 alertService.openModal(alertVO);
            //             }
            //         });
            //     }
            // });
        };

        function onsubmit(userIdentity) {
            identityDetails.submitted = true;
            var end_date = new Date(userIdentity.validuptodate).getTime();
            var issuedate = new Date(userIdentity.issuedate).getTime();
            if (end_date <= issuedate) {
                identityDetails.endDateCheck = 1;
                return false;
            }
            var data = {
                "userID": userId,
                "familyID": familyId,
                "memberID": memberId,
                "idType": userIdentity.identityproof.optionValue,
                "idNumber": userIdentity.id_number,
                "idIssueDate": userIdentity.issuedate,
                "idValidUpto": userIdentity.validuptodate,
                "flatDoorBlock": userIdentity.flat || identityDetails.p_Addressinfo.flatDoorBlockNo,
                "premisBuilding": userIdentity.premises || identityDetails.p_Addressinfo.prmsVillBuilding,
                "roadStreet": userIdentity.road || identityDetails.p_Addressinfo.roadStreetPO,
                "areaLocality": userIdentity.area || identityDetails.p_Addressinfo.areaLocality,
                "townCityDist": userIdentity.town || identityDetails.p_Addressinfo.townCityDist,
                "pinCode": userIdentity.pincode || identityDetails.p_Addressinfo.pinCd,
                "countryCode": userIdentity.country || identityDetails.p_Addressinfo.countryCd,
                "stateCode": userIdentity.state || identityDetails.p_Addressinfo.stateCd,
                "regPhNo": userIdentity.reg_ph || identityDetails.contact_info.mobileNo,
                "file": "<attachment>"
            };
            identity_detailsService.PostIdentityDetails(data, function(response) {
                if (response.data.success == "true") {
                    identityDetails.clickAdd = 0;
                    identityDetails.addButton = 0;
                    $ionicScrollDelegate.scrollTop('1000');
                    var alertVO = {};
                    alertVO.title = famMessages.MESSAGE.M100002;
                    alertVO.message = famMessages.SUCCESS.M300001;
                    alertService.openModal(alertVO);
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