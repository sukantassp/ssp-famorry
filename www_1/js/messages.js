(function () {
    'use strict';

    angular
        .module(FAM_MODULE)
        .constant("famMessages", {
            "MESSAGE": {
                "M100001": "No records found",
                "M100002": "Famorry says",
                "M100003": "Terms & Condition",
                "M100004": "DEMO collects personally identifying information and data about individuals, their company, and the companies demographics “personally identifying information and data” including (i) when you provide information to DEMO, such as when you register or sign up for any of our products such as, but not limited to, events, conferences, on-line seminars contests, RSS Feeds, webcasts, and other communications with DEMO; (ii) when you register or sign up on any DEMO site, your information will be known to DEMO; and (iii) from time to time we may add other information that we collect from third party sources to enhance the information that you provided to DEMO.",
            },
            "ERROR": {
                "M200001": "Unable to save data",                
                "M200002": "Please enter userID",
                "M200003": "Please enter valid email address",
                "M200004": "Please enter password",
                "M200005": "Please enter valid password",
                "M200006": "Please confirm your password",
                "M200007": "Passwords entered are not matching",
                "M200008": "Invalid Credential",
                "M200009": "Error Code 404",
                "M200010": "Please enter your first name",
                "M200011": "Please enter your last name",
                "M200012": "Please enter your phone number",
                "M200013": "Please select your sex",
                "M200014": "Please select your birth day",
                "M200015": "Please select your birth month",
                "M200016": "Please select your birth year",
                "M200017": "Please enter your email",
                "M200018": "Please enter valid Phone number",
                "M200019": "Verification doesn't match",
                "M200020": "Verification code is required",
				"M200021": "Please select your service location",
				"M200022": "Please select your service center",
				"M200023": "Please enter your location address",
				"M200024": "Please enter your center address",
				"M200025": "You entered a wrong verification code",
				"M200026": "Please select the mode of payment",
				"M200027": "Please enter request number",
				"M200028": "Please enter bank name",
				"M200029": "Please enter reference number",
				"M200030": "Please enter amount",
				"M200031": "Please select date",
				"M200032": "Flat number is required",
				"M200033": "Premises/Building/Village address is required",
				"M200034": "Road/Street/P.O is required",
				"M200035": "Area is required",
				"M200036": "Country is required",
				"M200037": "State is required",
				"M200038": "Town is required",
				"M200039": "Pincode is required",
				"M200040": "Mobile Number is required",
				"M200041": "Please Accept Terms And Condition",
				"M200042": "You are already a registered member with Phone Number 1111111111, Please login 		through your credential",
				"M200043": "Something Went Wrong,Try again After Sometime",
				"M200044": "Enter the verification code here",
				"M200045": "Please don't modify location address",
				"M200046": "Please don't modify service address",
				"M200047": "Please enter a valid pincode"
				
				
				
            },
            "SUCCESS": {
                "M300001": "Data saved successfully.",
                "M300002": "Data deleted successfully."
            },
            "WARNING": {
                "M400001": ""
            },
            "CONFIRM": {
                "M500001": "Are you sure you want to cancel?",
                "M500002": "Are you sure you want to delete this?",
                "M500003": "Are you sure you want logout?",
                "M500004": "Are you sure you want to Activate this Test?",
                "M500005": "Are you sure you want to Complete this Test?",
                "M500006": "Are you sure you want to reset the information?",
                "M500007": "Are you sure want to add blank log"
            },
            'BUSINESS_MESSAGE': {
                '0': 'Email Address is not registered',
                '900001': 'Please enter valid email address',
                '900002': 'Please contact Product Test Group',
                '900003': 'Password not matching',
                '900004': 'Password does not meet requirements',
                '900005': 'Email Address is not registered',
                '900006': 'Please contact Product Test Group to reset username and password',
                '900007': 'Please enter correct password',
                '900008': 'Please contact Product Test Group to reset username and password',
                '900009': 'Security code incorrect',
                '900010': 'Please contact product test group',
                '900011': 'Date selected earlier than ship date',
                '900012': 'Data invalid or missing',
                '900013': 'Data invalid or missing',
                '900014': 'Data invalid or missing',
                '900015': 'User already exists. please contact Product Test Group',
                '900016': 'Login account/password not yet created.',
                '900017': 'Security Violation',
                '900018': 'Test not found',
                '900019': 'Data already exists; cannot add new',
                '900020': 'Cannot inactivate test when test is active with testers',
                '900021': 'Record not found',
                '900022': 'Due date cannot be in the past',
                '900023': 'Survey not active or not open',
                '900090': 'Missing required field(s)',
                '900091': 'Invalid data'
            }
        });
})();
