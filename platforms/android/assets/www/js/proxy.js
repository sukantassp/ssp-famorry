(function () {
    'use strict';

    angular
        .module(FAM_MODULE)
        .factory('famProxy', famProxy);

    famProxy.$inject = ['famConstants'];
    function famProxy(famConstants) {
        var famProxy = {
            getUrl: getUrl
        };

        return famProxy;

        ////////////////
        function getUrl(api, param) {
            var url = '';
            if (param) {
                url = param + famConstants.BASE.API_PATH + api;
            } else {
                url = famConstants.BASE.API_HOST + famConstants.BASE.API_PATH + api;
            }
            return url;
        }

    }
})();