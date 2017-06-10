(function () {
    'use strict';

    angular
        .module(FAM_MODULE)
        .directive('loader', loader);

    loader.$inject = ['loaderService'];
    function loader(loaderService) {

        var loader = {
            link: link,
            restrict: 'EA',
            templateUrl: 'partials/global/loader/loaderView.html',
            scope: {}

        };
        return loader;

        function link(scope, element, attrs) {
            scope.$on('http-call', function () {
                scope.loading = loaderService.loading;
            });
        }


    }
})();
