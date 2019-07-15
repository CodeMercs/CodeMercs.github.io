var app = angular.module('animateTodo', ['ngAnimate']);

app.controller('MainController', function($scope) {
	$scope.items = [{
		text: "這是一件已完成事件",
		complete: true
	}];
	$scope.newTodo = "";
	$scope.addTodo = function(){
		$scope.items.push({
			text:$scope.newTodo,
			complete: false
		});
		$scope.newTodo = "";
	};
	$scope.removeTodo = function(index){
		$scope.items.splice(index, 1);
	};
	$scope.clearAll = function(){
		$scope.items = [];
	};
});
