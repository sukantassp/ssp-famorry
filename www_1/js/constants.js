(function () {
    'use strict';

    angular
        .module(FAM_MODULE)
        .constant('famConstants', {
            'BASE': {
                'API_HOST': 'http://fabfamilylife.com/app/frontend/mobapi/', //Stub
                //'API_HOST': 'https://qa.producttesting.reebok.com', //Stub
                
                //'API_HOST':'' //Actual
                'API_PATH': '',
                'USER_TYPE': ''
            },
            'STATE_USER': {
                'USER_LOGIN': 'Front/dologin',  
                'USER_REGISTRATION': 'registration',
                'dosignup':'dosignup',
				'registration_statup': 'registration_statup',
				'registration_step1': 'registration_step1',
				'registration_step2': 'registration_step2',
				'registration_step3': 'registration_step3',
				'registration_step4': 'registration_step4',
                'LOGIN': 'login',
                'HOME': 'home'       
            },
             'COMMON': {
                'SUCCESS': 'SUCCESS',
                'ERROR': 'ERROR',
                'WARNING': 'WARNING',
                'MESSAGE': 'MESSAGE',
                'CONFIRM': 'CONFIRM',
                'OK': 'OK',
                'CANCEL': 'CANCEL',

                // REST API Methods
                'GET': 'GET',
                'POST': 'POST',
                'DELETE': 'DELETE',

                //User Type
                'ADMIN': 'ADMIN',
                'ANALST': 'ANALYST',
                'TESTER': 'TESTER',

                //Test Status
                'IN_PREP': 'IN_PREP',
                'ACTIVE': 'ACTIVE',
                'FINISHED': 'FINISHED',

                //Date Format
                'DATE_FORMAT_1': 'MMM dd, yyyy',
                'DATE_FORMAT_2': 'MM/dd/yyyy',
                'DATE_FORMAT_3': 'MMM dd, yyyy hh:mm a',
                'DATE_FORMAT_4': 'hh:mm a; MMM dd, yyyy',

                //Document Type
                'DOC_TYPE_GLOSSARY': 'glossary',
                'DOC_TYPE_TERMS': 'terms',
                'DOC_TYPE_DISCLAIMER': 'disclaimer',
                'DOC_TYPE_COMPENSATION': 'compensation',
                'DOC_TYPE_SHIPPING': 'shipping',
                'DOC_TYPE_MEASUREMENTS': 'measurements',
                'DOC_TYPE_FAQ': 'faq',

                //Survey Type
                'SURVEY_TYPE_INTERNAL': 'internal',
                'SURVEY_TYPE_EXTERNAL': 'external',

                //Irritation Severity
                'SLIGHT': 'Slight',
                'MODERATE': 'Moderate',
                'SEVERE': 'Severe',

                //Ittitation Cell Count
                'IRRITATION_CELL_COUNT': 30,
                'FAM_LOGIN': 'dologin',
                'FAM_REGISTRATION': 'register',
                'FAM_INTERNAL': 'app/frontend/mobapi'
            },
            'URL': {
                'BEFORE_LOGIN': {
                    'TESTER_LOGIN': 'tester.login',
                    'TESTER_ACTIVE_ACCOUNT': 'tester.activeact'
                }
            }
        });
})();