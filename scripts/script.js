angular.module('JsonAPP', [])
.controller('JsonCtrl', ['$scope', function($scope) {
	$scope.attrs = [];
	$scope.jsonData = [];

	//add attribute
	$scope.addAttr = function() {
		$scope.attrs.push({
			name: $scope.attr_name,
			value: $scope.attr_value
		});
		$scope.attr_name = "";
		$scope.attr_value = "";
	};

	//delete attribute
	$scope.deleteAttr = function() {
		var i = this.$index;
		$scope.attrs.splice(i, 1);
	};

	//add data
	$scope.addData = function() {

	};
}]);