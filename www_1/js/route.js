(function() {
    'use strict';
    angular.module(FAM_ROUTES)
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider', '$locationProvider'];

    function config($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {

        //.config(function($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        // $httpProvider.interceptors.push('loaderInterceptor');
        //$httpProvider.useApplyAsync(true);
        $urlRouterProvider.otherwise('/login')
        $stateProvider
            .state('user', {
                abstruct: true,
                url: "/user",
                views: {
                    "": {
                        templateUrl: "templates/user.html",
                        controller: "userController",
                        controllerAs: "userCtrl"
                    }
                },
                resolve: {
                    loadScripts: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load(['js/userController.js',
                            //'js/tester/shared/testerProxy.js',
                            'js/tester/login/loginService.js',
                            'js/login/loginDataService.js',
                            //'js/tester/survey/surveyDataService.js',
                            //'js/tester/shared/testerDataService.js',
                            //'js/tester/shared/testerService.js',
                            //'js/tester/shared/testerUserDtl.js'
                        ]);
                    }]
                }
            })
            .state('login', {
                //parent: 'user',
                url: '/login',
                views: {
                    "": {
                        templateUrl: "templates/login/login.html",
                        controller: "loginCtrl",
                        controllerAs: "login"
                            //abstract: true
                    }
                },
                resolve: {
                    loadScripts: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load(['js/login/loginCtrl.js',
                            //'js/tester/login/loginService.js',
                            'js/login/loginDataService.js'
                        ]);
                    }]
                }
            })
            .state('registration', {
                url: '/registration',
                views: {
                    "": {
                        templateUrl: 'templates/registration/registration.html',
                        controller: 'registrationCtrl',
                        controllerAs: 'registration'
                    }
                },
                resolve: {
                    loadScripts: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load(['js/registration/registrationCtrl.js',
                            'js/registration/registrationService.js'
                        ]);
                    }]
                }

            })
            .state('dosignup', {
                url: '/dosignup',
                views: {
                    "": {
                        templateUrl: 'templates/registration/dosignup.html',
                        controller: 'dosignupCtrl',
                        controllerAs: 'dosignup'
                    }
                },
                resolve: {
                    loadScripts: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load(['js/registration/dosignupCtrl.js',
                            'js/registration/dosignupService.js'
                        ]);
                    }]
                }

            })
            .state('registration_statup', {
                url: '/registration_statup',
                views: {
                    "": {
                        templateUrl: 'templates/registration/registration-statup.html',
                        controller: 'registration_statupCtrl',
                        controllerAs: 'registration_statup'
                    }
                },
                resolve: {
                    loadScripts: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load(['js/registration/registration_statupCtrl.js']);
                    }]
                }

            })
            .state('registration_step1', {
                url: '/registration_step1',
                views: {
                    "": {
                        templateUrl: 'templates/registration/registration-step1.html',
                        controller: 'registration_step1Ctrl',
                        controllerAs: 'registration_step1'
                    }
                },
                resolve: {
                    loadScripts: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load(['js/registration/registration_step1Ctrl.js',
                            'js/registration/registration_step1Service.js'
                        ]);
                    }]
                }

            })
            .state('registration_step2', {
                url: '/registration_step2',
                views: {
                    "": {
                        templateUrl: "templates/registration/registration-step2.html",
                        controller: "registration_step2Ctrl",
                        controllerAs: "registration_step2"
                    }
                },
                resolve: {
                    loadScripts: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load(['js/registration/registration_step2Ctrl.js',
                            'js/registration/registration_step2Service.js'
                        ]);
                    }]
                }
            })
            .state('registration_step3', {
                url: '/registration_step3',
                views: {
                    "": {
                        templateUrl: "templates/registration/registration-step3.html",
                        controller: "registration_step3Ctrl",
                        controllerAs: "registration_step3"
                    }
                },
                resolve: {
                    loadScripts: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load(['js/registration/registration_step3Ctrl.js',
                            'js/registration/registration_step3Service.js'
                        ]);
                    }]
                }
            })
            .state('registration_step4', {
                url: '/registration_step4',
                views: {
                    "": {
                        templateUrl: "templates/registration/registration-step4.html",
                        controller: "registration_step4Ctrl",
                        controllerAs: "registration_step4"
                    }
                },
                resolve: {
                    loadScripts: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load(['js/registration/registration_step4Ctrl.js',
                            'js/registration/registration_step4Service.js'
                        ]);
                    }]
                }
            })
            .state('home', {
                url: '/home',
                views: {
                    "": {
                        templateUrl: 'templates/home/home.html',
                        controller: 'homeCtrl',
                        controllerAs: 'home'
                    }
                },
                resolve: {
                    loadScripts: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load(['js/home/homeCtrl.js'
                            //'js/tester/login/loginService.js',
                            //'js/registration/loginDataService.js'
                        ]);
                    }]
                }

            })
            .state('balance', {
                url: '/balance',
                views: {
                    "": {
                        templateUrl: 'templates/profile/balance.html',
                        controller: 'balanceCtrl',
                        controllerAs: 'balance'
                    }
                },
                resolve: {
                    loadScripts: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load(['js/profile/balance/balanceCtrl.js'
                            //'js/tester/login/loginService.js',
                            //'js/registration/loginDataService.js'
                        ]);
                    }]
                }

            })

        .state('education_details', {
            url: '/education_details',
            views: {
                "": {
                    templateUrl: 'templates/profile/education-details.html',
                    controller: 'education_detailsCtrl',
                    controllerAs: 'education_details'
                }
            },
            resolve: {
                loadScripts: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load(['js/profile/education_details/education_detailsCtrl.js'
                        //'js/tester/login/loginService.js',
                        //'js/registration/loginDataService.js'
                    ]);
                }]
            }

        })

        .state('employment_details', {
            url: '/employment_details',
            views: {
                "": {
                    templateUrl: 'templates/profile/employment-details.html',
                    controller: 'employment_detailsCtrl',
                    controllerAs: 'employment_details'
                }
            },
            resolve: {
                loadScripts: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load(['js/profile/employment_details/employment_detailsCtrl.js'
                        //'js/tester/login/loginService.js',
                        //'js/registration/loginDataService.js'
                    ]);
                }]
            }

        })

        .state('identity_details', {
            url: '/identity_details',
            views: {
                "": {
                    templateUrl: 'templates/profile/identity-details.html',
                    controller: 'identity_detailsCtrl',
                    controllerAs: 'identity_details'
                }
            },
            resolve: {
                loadScripts: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load(['js/profile/identity_details/identity_detailsCtrl.js'
                        //'js/tester/login/loginService.js',
                        //'js/registration/loginDataService.js'
                    ]);
                }]
            }

        })

        .state('monthly_statement', {
            url: '/monthly_statement',
            views: {
                "": {
                    templateUrl: 'templates/profile/monthly-statement.html',
                    controller: 'monthly_statementCtrl',
                    controllerAs: 'monthly_statement'
                }
            },
            resolve: {
                loadScripts: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load(['js/profile/monthly_statement/monthly_statementCtrl.js'
                        //'js/tester/login/loginService.js',
                        //'js/registration/loginDataService.js'
                    ]);
                }]
            }

        })


        .state('professional_details', {
            url: '/professional_details',
            views: {
                "": {
                    templateUrl: 'templates/profile/professional-details.html',
                    controller: 'professional_detailsCtrl',
                    controllerAs: 'professional_details'
                }
            },
            resolve: {
                loadScripts: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load(['js/profile/professional_details/professional_detailsCtrl.js'
                        //'js/tester/login/loginService.js',
                        //'js/registration/loginDataService.js'
                    ]);
                }]
            }

        })

        .state('profile', {
            url: '/profile',
            views: {
                "": {
                    templateUrl: 'templates/profile/profile.html',
                    controller: 'profileCtrl',
                    controllerAs: 'profile'
                }
            },
            resolve: {
                loadScripts: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load(['js/profile/profile/profileCtrl.js'
                        //'js/tester/login/loginService.js',
                        //'js/registration/loginDataService.js'
                    ]);
                }]
            }

        })

        .state('service_fund', {
            url: '/service_fund',
            views: {
                "": {
                    templateUrl: 'templates/profile/service-fund.html',
                    controller: 'service_fundCtrl',
                    controllerAs: 'service_fund'
                }
            },
            resolve: {
                loadScripts: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load(['js/profile/service_fund/service_fundCtrl.js'
                        //'js/tester/login/loginService.js',
                        //'js/registration/loginDataService.js'
                    ]);
                }]
            }

        })

        .state('service_review', {
            url: '/service_review',
            views: {
                "": {
                    templateUrl: 'templates/profile/service-review.html',
                    controller: 'service_reviewCtrl',
                    controllerAs: 'service_review'
                }
            },
            resolve: {
                loadScripts: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load(['js/profile/service_review/service_reviewCtrl.js'
                        //'js/tester/login/loginService.js',
                        //'js/registration/loginDataService.js'
                    ]);
                }]
            }

        })

        .state('transaction_history', {
                url: '/transaction_history',
                views: {
                    "": {
                        templateUrl: 'templates/profile/transaction-history.html',
                        controller: 'transaction_historyCtrl',
                        controllerAs: 'transaction_history'
                    }
                },
                resolve: {
                    loadScripts: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load(['js/profile/transaction_history/transaction_historyCtrl.js'
                            //'js/tester/login/loginService.js',
                            //'js/registration/loginDataService.js'
                        ]);
                    }]
                }

            })
            /*.state('login', {
                parent: 'user',
                url: "/login",
                views: {
                    "": {
                        templateUrl: "templates/login/login.html",
                        controller: "loginCtrl",
                        controllerAs: "login"
                    }
                },
                resolve: {
                    loadScripts: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load(['js/login/loginCtrl.js',
                            //'js/tester/login/loginService.js',
                            'js/tester/login/loginDataService.js']);
                    }]
                }
            })*/
            .state('tabsController.cartTabDefaultPage', {
                url: '/page3',
                views: {
                    'tab2': {
                        templateUrl: 'templates/cartTabDefaultPage.html',
                        controller: 'cartTabDefaultPageCtrl'
                    }
                }
            })

        .state('tabsController.cloudTabDefaultPage', {
            url: '/page4',
            views: {
                'tab3': {
                    templateUrl: 'templates/cloudTabDefaultPage.html',
                    controller: 'cloudTabDefaultPageCtrl'
                }
            }
        })

        .state('tabsController', {
            url: '/page1',
            templateUrl: 'templates/tabsController.html'
                //abstract:true
        })

    }
})();