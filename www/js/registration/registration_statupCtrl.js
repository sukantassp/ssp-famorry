(function(){
    'use strict';
        angular.module(FAM_CONTROLLER)
        .controller('registration_statupCtrl', registration_statupCtrl);
        registration_statupCtrl.$inject = ['$scope', '$stateParams', '$http', '$timeout','famMessages','famConstants','userDetails','alertService','$state','$ionicPopup'];  
        function registration_statupCtrl( $scope, $stateParams, $http, $timeout, famMessages, famConstants, userDetails,alertService, $state, $ionicPopup) {
			var registration_statup = this; 
			registration_statup.onsubmit = onsubmit;
			registration_statup.check=0;
			  
			registration_statup.showId = function($event){
			   var registered_type = $event.target.id;
			   angular.element( document.querySelector('#'+registered_type )).addClass('active');
			   registration_statup.check=1;
			   $scope.type = registered_type.split('-');
			  
			   if( registered_type != 'statup-guest' &&  registered_type != 'statup-individual' &&  registered_type != 'statup-famely' ){
				    angular.element( document.querySelector('#statup-guest' )).removeClass('active');
					angular.element( document.querySelector('#statup-individual' )).removeClass('active');
					angular.element( document.querySelector('#statup-famely' )).removeClass('active');
			   }else if(registered_type != 'statup-guest' &&  registered_type != 'statup-individual' &&  registered_type != 'statup-elder'){
				    angular.element( document.querySelector('#statup-guest' )).removeClass('active');
					angular.element( document.querySelector('#statup-individual' )).removeClass('active');
					angular.element( document.querySelector('#statup-elder' )).removeClass('active');
			   }else if(registered_type != 'statup-guest' &&  registered_type != 'statup-famely' &&  registered_type != 'statup-elder'){
				    angular.element( document.querySelector('#statup-guest' )).removeClass('active');
					angular.element( document.querySelector('#statup-famely' )).removeClass('active');
					angular.element( document.querySelector('#statup-elder' )).removeClass('active');
			   }else{
				    angular.element( document.querySelector('#statup-individual' )).removeClass('active');
					angular.element( document.querySelector('#statup-famely' )).removeClass('active');
					angular.element( document.querySelector('#statup-elder' )).removeClass('active');
			   }
			};
			
			
				function onsubmit(){
					
					var R_Type = $scope.type[1];
					userDetails.setUserType(R_Type);
					$state.go(famConstants.STATE_USER.registration_step1);
				
			};
		}            
})();