(function() {
'use strict';

    angular
        .module(FAM_MODULE)
        .factory('loaderService', loaderService);

    //loaderService.$inject = ['dependency1'];
    function loaderService() {
        var service = {
            showLoader: showLoader,
            hideLoader:hideLoader,
            loading : false
        };
        
        return service;
        function showLoader() {
            this.loading =  true;
        }

        function hideLoader() {
            this.loading =  false;
        }
    }
})();