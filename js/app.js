'use strict';

var messengerbotApp = angular.module('messengerbotApp', [
	'ngRoute',
	'messengerbotControllers'
]);

messengerbotApp.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.
			when('/', {
				templateUrl: 'partials/home.html',
				controller: 'homeController'
			}).
			when('/:message', {
				templateUrl: 'partials/message.html',
				controller: 'messageController'
			}).
			otherwise({
				redirectTo: '/'
			})
}]);