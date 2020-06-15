(function() {
	angular
		.module("TextAngularDemo", ['textAngular'])
		.config(function() {
  angular.lowercase = angular.$$lowercase;  
}).controller("DemoController", ['$scope', 'textAngularManager', DemoController]);

	function DemoController($scope, textAngularManager) {
		$scope.version = textAngularManager.getVersion();
        $scope.versionNumber = $scope.version.substring(1);
		$scope.htmlContent = '<h2>Try me!</h2><p>textAngular is a super cool WYSIWYG Text Editor directive for AngularJS</p><p><b>Features:</b></p><ol><li>Automatic Seamless Two-Way-Binding</li><li style="color: blue;">Super Easy <b>Theming</b> Options</li><li>Simple Editor Instance Creation</li><li>Safely Parses Html for Custom Toolbar Icons</li><li>Doesn&apos;t Use an iFrame</li><li>Works with Firefox, Chrome, and IE8+</li></ol><p><b>Code at GitHub:</b> <a href="#">Here</a> </p>';
	};
})();
