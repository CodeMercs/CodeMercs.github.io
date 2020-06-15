/*(function() {
	angular
		.module("TextAngularDemo", ['textAngular'])
		.config(function() {
			angular.lowercase = angular.$$lowercase;  
		}).controller("DemoController", ['$scope', 'textAngularManager', DemoController]);
	function DemoController($scope, textAngularManager) {
		$scope.version = textAngularManager.getVersion();
		$scope.versionNumber = $scope.version.substring(1);
		$scope.htmlContent = '<h2>Hi!</h2><p>textAngular is a super cool WYSIWYG Text Editor directive for AngularJS</p>';
	};
})();
*/


(function() {
	angular
		.module("TextAngularDemo", ['textAngular'])
		.config(function() {
			angular.lowercase = angular.$$lowercase;  
		}).controller("DemoController", ['$scope', '$compile', 'textAngularManager', DemoController]);
	function DemoController($scope, $compile, textAngularManager) {
		$("div#toolbarWC").off("click");
		$("div#toolbarCC").off("click");
		$("div#toolbarWC").attr('disabled',"true");
		$("div#toolbarCC").attr('disabled',"true");
		$scope.num = 0;
		$scope.message = 0;
		$scope.messages = [];
		$scope.megmod = 0;
		$scope.peoplemegmod = 0;
		$scope.megmods = [];
		$scope.megcontent = '';
		$scope.megmodcontent = '';
		$scope.version = textAngularManager.getVersion();
		$scope.versionNumber = $scope.version.substring(1);
		$scope.htmlContent = '<h2>Hi!</h2><p>textAngular is a super cool WYSIWYG Text Editor directive for AngularJS</p>';
		$scope.htmlContent2 = '<h2>Hi!</h2><p>textAngular is a super cool WYSIWYG Text Editor directive for AngularJS</p>';
		$scope.peoplemeg = $scope.message + 3 +'';
		$scope.setMessage = function () {
			var temcontent = '';
			var dt = new Date();
			$scope.message = $scope.message + 1;
			$scope.peoplemeg = $scope.message + 3 +'';
			$scope.messages.message = $scope.message;
			$scope.megcontent = $scope.htmlContent;
			$scope.messages.megcontent = $scope.megcontent;
			$scope.messages.megtime = dt;
			temcontent = `<div class="direct-chat-msg right" id="${$scope.messages.message}">
                <div class="direct-chat-info clearfix">
                    <span class="direct-chat-name pull-right">User ${$scope.messages.message}</span>
                    <span class="direct-chat-timestamp pull-left">${$scope.messages.megtime}</span>
                </div>
                <img class="direct-chat-img" src="img/user3-128x128.jpg" alt="Message User Image">
                <div class="direct-chat-text">${$scope.messages.megcontent}</div>
            </div>`;
            var linkOfDOMToAdd = $compile(temcontent);
            var nodeOfCompiledDOM = linkOfDOMToAdd($scope);
            $('#megcon').append(nodeOfCompiledDOM);
        };
		$scope.setMessageModal = function () {
			var temcontent = '';
			var dt = new Date();
			$scope.megmod = $scope.megmod + 1;
			$scope.peoplemegmod = $scope.megmod;
			$scope.megmods.megmod = $scope.megmod;
			$scope.megmodcontent = $scope.htmlContent2;
			$scope.megmods.megmodcontent = $scope.megmodcontent;
			$scope.megmods.megtime = dt;
			temcontent = `<div class="direct-chat-msg right" id="M${$scope.megmods.megmod}">
                <div class="direct-chat-info clearfix">
                    <span class="direct-chat-name pull-right">User Modal ${$scope.megmods.megmod}</span>
                    <span class="direct-chat-timestamp pull-left">${$scope.megmods.megtime}</span>
                </div>
                <img class="direct-chat-img" src="img/user3-128x128.jpg" alt="Message User Image">
                <div class="direct-chat-text">${$scope.megmods.megmodcontent}</div>
            </div>`;
            var linkOfDOMToAdd = $compile(temcontent);
            var nodeOfCompiledDOM = linkOfDOMToAdd($scope);
    		$('#megconmod').append(nodeOfCompiledDOM);
        };
	};
})();