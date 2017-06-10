(function() {
    'use strict';
    angular.module(FAM_CONTROLLER)
        .controller('transaction_historyCtrl', transaction_historyCtrl);
    transaction_historyCtrl.$inject = ['$stateParams', '$http', '$timeout', 'famMessages', 'famConstants', 'userDetails', 'alertService', '$state'];

    function transaction_historyCtrl($stateParams, $http, $timeout, famMessages, famConstants, userDetails, alertService, $state) {
        // var login = this;
        // login.famMessages = famMessages;
        // login.famConstants = famConstants;
        // login.userLocked = false;
        // login.onsubmit = onsubmit;
        // login.showServerErrorMsg = showServerErrorMsg;			
        // function onsubmit(data) {
        // 	console.log(data)
        // 	login.submitted = true;
        // 	if (login.loginForm.$valid) {
        // 		login.formData = data;					
        //         dataService.getUserData(login.formData,function (response) {
        //         if (response && response.success == 'true') {
        //             var token = login.formData.user+':'+response.token+':M';
        //             userDetails.setUserDetails(token);
        // 			//testerService.prepreNotifications(response.data.notifications);
        //             $state.go(famConstants.STATE_USER.HOME);
        //         } else {
        //         	var alertVO = {};
        //         	alertVO.title = famMessages.MESSAGE.M100002;
        //         	alertVO.message = famMessages.ERROR.M200008;
        //         	alertService.openModal(alertVO);
        //             //login.showServerErrorMsg(response.errorCode);
        //         }

        //     });
        // 	}
        // }
    }

    function showServerErrorMsg(code) {
        /*ctrl.serverErrorMsg = ptpMessages.BUSINESS_MESSAGE[code];
        if (code === 900006 || code === 900002 || code === 900008) {
            ctrl.userLocked = true;
        }*/
    }
})();