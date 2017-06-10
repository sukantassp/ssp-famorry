angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

   
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
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  
	
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login/login.html',
    controller: 'loginCtrl',
	controllerAs: 'login'
  })
  .state('home', {
    url: '/home',
    templateUrl: 'templates/home/home.html',
    controller: 'homeCtrl',
	controllerAs: 'home'
  })
  .state('registration', {
    url: '/registration',   
	templateUrl: 'templates/registration/registration.html',
	controller: 'registrationCtrl',
	controllerAs: 'registration'     
  })

  .state('infobank', {
    url: '/infobank',   
	templateUrl: 'templates/home/infobank.html'
	//controller: 'registrationCtrl',
//	controllerAs: 'registration'     
  })

$urlRouterProvider.otherwise('login')

  

});