var routeModule = angular.module('routeModule', ['ngRoute']);

routeModule.config(['$routeProvider', 
	function($routeProvider){
		$routeProvider.
		when('addOrder',{
			templateUrl : 'templates/addOrder.html',
			cotroller : 'addOrderController'
		}).
		when('showOrder',{
			templateUrl : 'templates/showOrder.html',
			cotroller : 'showOrderController'
		}).
		otherwise({
			redirectTo: '/addOrder'
		});
}]);