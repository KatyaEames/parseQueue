var app = angular.module('parseQ');

app.factory('parseService', function($http) {
	return {
		doPost: function(question) {
			$http.post('https://api.parse.com/1/classes/Question')
		}
	}
})