(function () {
    'use strict';

    angular
        .module(FAM_MODULE)

        /*.controller('alertController', alertController);

    alertController.$inject = ['$uibModalInstance', 'content'];
    function alertController($uibModalInstance, content) {
        var ctrl = this;
        ctrl.type = content.type;
        ctrl.title = content.title;
        ctrl.bodyText = content.bodyText;
        ctrl.btnOkEnable = content.btnOkEnable;
        ctrl.btnOkLbl = content.btnOkLbl;
        ctrl.btnCancelEnable = content.btnCancelEnable;
        ctrl.btnCancelLbl = content.btnCancelLbl;

        ctrl.ok = function(){
            $uibModalInstance.close('OK');
        };
        ctrl.cancel = function(){
            $uibModalInstance.close('CANCEL');
        };
    }*/
    .controller('alertController', alertController);
    alertController.$inject = ['$scope', '$ionicPopup','content','$timeout'];
    //.controller('PopupCtrl',function($scope, $ionicPopup, $timeout) {
    function alertController($scope, $ionicPopup, content, $timeout) {
        var ctrl = this;
        ctrl.title = content.title;
        ctrl.bodyText = content.bodyText;
        // Triggered on a button click, or some other target

        // An alert dialog
       
        var alertPopup = $ionicPopup.alert({
            title: ctrl.title,
            template: ctrl.bodyText 
        });

        alertPopup.then(function(res) {
         console.log('Thank you for not eating my delicious ice cream cone');
        });
        
    };

})();
