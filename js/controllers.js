'use strict';

var messengerbotControllers = angular.module('messengerbotControllers', []);

messengerbotControllers.controller('homeController', function($scope){
	var messages = ['Hello, beautiful!',
					'Hello, you!',
					'sup dawg',
					'yo dawg',
					'why hello there']
	$scope.randomMessage = messages[Math.floor(Math.random() * messages.length)];
});

messengerbotControllers.controller('messageController', ['$scope', '$routeParams',
	function($scope, $routeParams){
		var greetings = ['Special delivery!',
						 'You\'ve got a message!',
						 'Here\'s a message for you!',
						 'Incoming!',
						 'This is for you!'];
		var emotes = ['╭( ･ㅂ･)و',
					  'ヾ(*・ω・)ノ',
					  '☆ﾐ(o*･ω･)ﾉ',
					  '─=≡Σ((( つ•̀ω•́)つ'];
		$scope.greeting = greetings[Math.floor(Math.random() * greetings.length)];
		$scope.emote = emotes[Math.floor(Math.random() * emotes.length)];
		$scope.message = $routeParams.message;
	}
]);