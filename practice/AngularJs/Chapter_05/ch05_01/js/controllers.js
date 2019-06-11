var app = angular.module("app", []);

app.controller("FirstController",function ($scope, $log){
	$log.info("FirstController -> " + $scope.name);
	$log.info("FirstController -> " + $scope.age);
});

