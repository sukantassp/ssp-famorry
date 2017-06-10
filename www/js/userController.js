(function () {
    'use strict';

    angular
        .module(FAM_CONTROLLER)
        .controller('userController', userController);

    userController.$inject = ['$rootScope', '$scope', '$state', '$uibModal', 'loginService', 'testerUserDtl', 'ptpConstants', 'ptpSessStorage', 'famMessages', 'testerService', 'surveyDataService', 'alertService', 'commonVO', 'loginDataService', 'surveyDataService'];
    function userController($rootScope, $scope, $state, $uibModal, loginService, testerUserDtl, ptpConstants, ptpSessStorage, famMessages, testerService, surveyDataService, alertService, commonVO, loginDataService, dataService) {
        var ctrl = this, isAlertViewed = false;
        ctrl.ptpConstants = ptpConstants;
        ctrl.famMessages = famMessages;
        ctrl.testerService = testerService;
        //ctrl.progressBarVisibility = true;
        //ctrl.menuVisibility = false;
        ctrl.isBeforLogin = true;
        //methods
        ctrl.init = init;
        //ctrl.showNotifications = showNotifications;
        //ctrl.toogleMenu = toogleMenu;
        ctrl.logout = logout;
        //ctrl.goToSurveyPage = goToSurveyPage;
        //ctrl.surveyViewed = surveyViewed;
        //ctrl.surveyRemind = surveyRemind;
        //ctrl.removeSurveyData = removeSurveyData;
        //ctrl.mailToClick = mailToClick;

        $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            //ctrl.menuVisibility = false;
            ctrl.init();
            //initBreadcrumb();
        }.bind(ctrl));

        function init() {
            /*testerUserDtl.setUserDetails(ptpSessStorage.getUserDetails());
            ctrl.activeUser = testerUserDtl.getUserDetails();
            var stateName = loginService.getAuthState($state.current.name, testerUserDtl.getUserDetails());
            if (stateName) {
                $state.go(stateName);
            }
            //manageProgressBarPos();
            //iconsVisibilityFn();
            /*var visibleNotifications = [];
            if(ctrl.testerService.notificationList.length>0){
                visibleNotifications = ctrl.testerService.notificationList.filter(function(notiObj){
                    return notiObj.viewedStatus === false;
                });
            }
            
            if (visibleNotifications.length < 0 && ctrl.testerService.surveyAlertList.length < 0 && ctrl.activeUser && ctrl.activeUser.notifications && ctrl.activeUser.notifications.length) {
                testerService.prepreNotifications(ctrl.activeUser.notifications);
            }
            
            if (!isAlertViewed && ctrl.testerService.surveyAlertList.length) {
                isAlertViewed = true;
                showSurveyAlert();
            }*/
        }

        function logout() {
            /*var alertVO;
            alertVO = commonVO.getAlertVO(ptpConstants.COMMON.CONFIRM);
            alertVO.data.bodyText = ptpMessages.CONFIRM.M500003;
            alertVO.data.btnOkCallback = okHandler;
            alertService.openModal(alertVO);
            function okHandler() {
                doLogout();
            }*/


        }

        function doLogout() {
            /*ctrl.menuVisibility = !ctrl.menuVisibility;
            loginService.clearCredentials();
            loginDataService.logout(ctrl.formData).then(function (response) {
                if (response && response.success) {
                    $state.go(ptpConstants.STATE_TESTER.TESTER_LOGIN);
                }
            });*/

        }

        /*function toogleMenu() {
            if (!ctrl.isBeforLogin) {
                ctrl.menuVisibility = !ctrl.menuVisibility;
            }
        }

        function manageProgressBarPos() {
            setTimeout(function () {
                if ($('.progress-container').find('li.active')[0]) {
                    $('.progress-container > ul').removeAttr('style');
                    if ($('.progress-container').find('li.active').hasClass('step-1')) {
                        $('.progress-container > ul').css('left', '-' + $('.progress-container').find('li.active').offset().left + 'px');
                    } else {
                        var cssLft = ($(window).width() / 2) - ($('.progress-container').find('li.active').width() / 2); //- $('.progress-container').find('li.active').width()) + 'px';
                        var cssMarginLft = '-' + ($('.progress-container').find('li.active').offset().left) + 'px';
                        $('.progress-container > ul').css('left', cssLft);
                        $('.progress-container > ul').css('marginLeft', cssMarginLft);
                    }
                }
            }, 100);
        }

        function iconsVisibilityFn() {
            switch ($state.current.name) {
                case ptpConstants.STATE_TESTER.TESTER_LOGIN:
                case ptpConstants.STATE_TESTER.TESTER_FORGOT_PWD:
                case ptpConstants.STATE_TESTER.TESTER_ACTIVATE_ACT:
                    ctrl.progressBarVisibility = true;
                    ctrl.isBeforLogin = true;
                    break;
                case ptpConstants.STATE_TESTER.TESTER_TOUR:
                case ptpConstants.STATE_TESTER.TESTER_LANDING:
                case ptpConstants.STATE_TESTER.TESTER_FINAL_SURVEY:
                case ptpConstants.STATE_TESTER.TESTER_DAILY_LOG:
                case ptpConstants.STATE_TESTER.TESTER_DAILY_LOG_DETAILS:
                case ptpConstants.STATE_TESTER.TESTER_NEW_DAILY_LOG:
                case ptpConstants.STATE_TESTER.TESTER_EDIT_DAILY_LOG:
                    //case ptpConstants.STATE_TESTER.TESTER_SHIP_PRODUCT:
                    ctrl.progressBarVisibility = true;
                    ctrl.isBeforLogin = false;
                    break;
                case ptpConstants.STATE_TESTER.TESTER_TEST_LIST:
                    ctrl.progressBarVisibility = false;
                    ctrl.isBeforLogin = false;
                    break;
                default:
                    ctrl.progressBarVisibility = false;
                    ctrl.isBeforLogin = false;
            }
        }*/

       


        //=== Start: Notification functionality ===//
        /*function showNotifications() {
            if (ctrl.testerService.unreadNotificaitonCount) {
                var modalInstance = $uibModal.open({
                    animation: true,
                    scope: $scope,
                    windowClass: 'tester-popup',
                    templateUrl: 'notificationsModal.html'
                });
            }
        }*/

       

    }
})();