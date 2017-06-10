(function() {
    'use strict';
    angular
        .module(FAM_CONTROLLER)
        .controller('homeCtrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
            // You can include any angular dependencies as parameters for this function
            // TIP: Access Route Parameters for your page via $stateParams.parameterName
            function($scope, $stateParams, $state) {

                $scope.logout = function() {
                    localStorage.removeItem('memberId');
                    localStorage.removeItem('familyId');
                    localStorage.removeItem('loggedInUser');
                    $state.go('login');
                }
            }
        ])
})();