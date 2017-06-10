(function () {
    'use strict';

    angular
        .module(FAM_MODULE)
        .service('alertService', alertService);

    alertService.$inject = ['$ionicPopup', 'famConstants'];
    function alertService($ionicPopup, famConstants) {
        this.openModal = openModal;
        this.confirmModal = confirmModal;
        function openModal(vo) {
            var alertPopup = $ionicPopup.alert({
                title: vo.title,
                template: vo.message
            });

            alertPopup.then(function(res) {
                //console.log('Thank you for not eating my delicious ice cream cone');
            });
        }

        function confirmModal(vo, callback){
            var confirmPopup = $ionicPopup.confirm({
                title: vo.title,
                template: vo.message
            });
            confirmPopup.then(function(res) {                
                callback(res);               
            });
        }
    }
})();
