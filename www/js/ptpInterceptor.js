(function () {
    'use strict';

    angular
        .module(FAM_MODULE)
        .factory('loaderInterceptor', loaderInterceptor);

    loaderInterceptor.$inject = ['$rootScope', 'famConstants', 'userDetails', '$injector', 'loaderService'];
    function loaderInterceptor(root, famConstants,  userDetails, $injector, loaderService) {
        var urlList = [];
        return {
            request: function (config) {
				//alert(JSON.stringify(config));
				var reqUrl = config.url;
				//alert(reqUrl.indexOf(famConstants.COMMON.FAM_INTERNAL));
                if (reqUrl.indexOf(famConstants.COMMON.FAM_INTERNAL) > -1 ) {
                    if (urlList.indexOf(reqUrl) == -1) {
                        urlList.push(reqUrl);
                        loaderService.showLoader();
                        root.$broadcast('http-call');
                    }
                }
				//alert(reqUrl.indexOf(famConstants.COMMON.FAM_LOGIN))
                if(reqUrl.indexOf(famConstants.COMMON.FAM_LOGIN) == 0 && reqUrl.indexOf(famConstants.COMMON.FAM_REGISTRATION) == 0 ){
                    //var activeUser = userDetails.getUserDetails();
					var activeUser = JSON.parse(localStorage.getItem('loggedInUser'));
                    if (activeUser != 'null' && activeUser != undefined) {                   
                        config.headers.Authorization = 'Bearer'+' '+activeUser;                       
                    } else {
                        userDetails.setUserDetails(null);
                    }
                }
                //return false;
                return config;
            },

            requestError: function (config) {
                console.log('requestError');
                return config;
            },

            response: function (res) {
                var reqUrl = res.config.url,
                stateService = $injector.get('$state');
                loaderService.hideLoader();
                root.$broadcast('http-call');
                //if ((_.indexOf(urlList, reqUrl) > -1)) {
                    //force logout if token not found
                    /*if ((res.data.errorCode == 900090 || res.data.errorCode == 900009) && famConstants.BASE.USER_TYPE == famConstants.COMMON.TESTER) {
                        userDetails.setUserDetails(null);
                        stateService.go('tester.login');
                        loaderService.hideLoader();
                        root.$broadcast('http-call');
                    } else if (res.data.errorCode == 900021 || res.data.errorCode == 90021) {
                        if (stateService.current.parent && stateService.current.parent == 'adminUser') {
                            stateService.go('adminUser.error', { ptpParam: { 'title': 'PAGE NOT FOUND', 'body': 'Sorry, we couldn\'t find that page you were looking for. Maybe it\'s moved, or maybe the URL is incorrect.', 'homeState': 'adminUser.analyst' } });
                            loaderService.hideLoader();
                            //root.$broadcast('http-call');
                            return;
                        } else if (stateService.current.parent && stateService.current.parent == 'analystUser') {
                            stateService.go('analystUser.error', { ptpParam: { 'title': 'PAGE NOT FOUND', 'body': 'Sorry, we couldn\'t find that page you were looking for. Maybe it\'s moved, or maybe the URL is incorrect.', 'homeState': 'analystUser.tests' } });
                            loaderService.hideLoader();
                            //root.$broadcast('http-call');
                            return;
                        }
                        else {
                            stateService.go('tester.testlanding');
                        }
                    }
                    //urlList.splice(_.indexOf(urlList, reqUrl), 1);
                    if (urlList.length === 0) {
                        loaderService.hideLoader();
                        root.$broadcast('http-call');
                    }
                }*/
                return res;
            },

            responseError: function (res) {
                var stateService = $injector.get('$state');
                if (res.status === -1 || res.status === 403) {
                    if (stateService.current.parent && stateService.current.parent == 'adminUser') {
                        stateService.go('adminUser.error', { ptpParam: { 'title': 'PAGE NOT FOUND', 'body': 'Sorry, we couldn\'t find that page you were looking for. Maybe it\'s moved, or maybe the URL is incorrect.', 'homeState': 'adminUser.analyst' } });
                    } else if (stateService.current.parent && stateService.current.parent == 'analystUser') {
                        stateService.go('analystUser.error', { ptpParam: { 'title': 'PAGE NOT FOUND', 'body': 'Sorry, we couldn\'t find that page you were looking for. Maybe it\'s moved, or maybe the URL is incorrect.', 'homeState': 'analystUser.tests' } });
                    }
                    else {
                        //stateService.go('tester.error', { ptpParam: { 'title': 'PAGE NOT FOUND', 'body': 'Sorry, we couldn\'t find that page you were looking for. Maybe it\'s moved, or maybe the URL is incorrect.', 'homeState': 'tester.login' } });
                    }
                } else if (res.status === 401) {
                    if (stateService.current.parent && stateService.current.parent == 'adminUser') {
                        stateService.go('adminUser.error', { ptpParam: { 'title': 'Unauthorized User', 'body': 'Sorry, you do not have permission to view this page.', 'homeState': 'adminUser.analyst' } });
                    } else if (stateService.current.parent && stateService.current.parent == 'analystUser') {
                        stateService.go('analystUser.error', { ptpParam: { 'title': 'Unauthorized User', 'body': 'Sorry, you do not have permission to view this page.', 'homeState': 'analystUser.tests' } });
                    }
                    else {
                        stateService.go('tester.error', { ptpParam: { 'homeState': 'tester.login' } });
                    }
                }

                var reqUrl = res.config.url;
                urlList = [];
                loaderService.hideLoader();
                root.$broadcast('http-call');
                // if ((_.indexOf(urlList, reqUrl) > -1)) {
                //     //force logout if token not found
                //     /*if((res.data.errorCode == 900090 || res.data.errorCode == 900009) && famConstants.BASE.USER_TYPE == famConstants.COMMON.TESTER) {
                //         userDetails.setUserDetails(null);
                //         var stateService = $injector.get('$state');
                //         stateService.go('tester.login');
                //         return;
                //     }*/
                //     urlList.splice(_.indexOf(urlList, reqUrl), 1);
                //     if (urlList.length === 0) {
                //         loaderService.hideLoader();
                //         root.$broadcast('http-call');
                //     }
                // }
                return res;
            }
        };

    }

//103.56.237.206
})();
