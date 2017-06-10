(function () {
    'use strict';

    angular
        .module(FAM_MODULE)
        .service('loginService', loginService);

    loginService.$inject = ['$http', '$rootScope', '$window', '$state', 'famConstants', 'userDetails'];
    function loginService($http, $rootScope, $window, $state, famConstants, userDetails) {
        this.clearCredentials = clearCredentials;
        this.setUserDetails = setUserDetails;
        this.getUserDetails = getUserDetails;
        this.getAuthState = getAuthState;

        this.userDetails = {};
        ////////////////

        function setUserDetails(data) {
            userDetails.setUserDetails(data.token);
        }

        function clearCredentials() {
            userDetails.setUserDetails(null);
            $state.go(famConstants.STATE_TESTER.TESTER_LOGIN);
        }

        function getUserDetails() {
            return this.userDetails;
        }

        function getAuthState(state, userDtl) {
            var isAuthenticated = userDtl ? true : false,
                afterLoginPage = (state == famConstants.STATE_TESTER.TESTER_LOGIN || state == famConstants.STATE_TESTER.TESTER_ACTIVATE_ACT || state == ptpConstants.STATE_TESTER.TESTER_FORGOT_PWD) ? false : true,
                stateName = '';

            // redirect to login page if user not logged in
            if (afterLoginPage && !isAuthenticated) {
                stateName = famConstants.STATE_TESTER.TESTER_LOGIN;
            }
            // redirect to tast landing page if user logged in
            else if (!afterLoginPage && isAuthenticated) {
                stateName = famConstants.STATE_TESTER.TESTER_LANDING;
            }
            return stateName;
        }

        function logout() {
            
        }

    }
})();



