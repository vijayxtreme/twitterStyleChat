//launch angular with any dependencies
var app = angular.module('app', []);

app.controller('PostsCtrl', ['$scope', '$http', function($scope, $http){
	$scope.username, $scope.body;

	$scope.posts;
	$http.get('/posts').success(function(res){
		$scope.posts = res;
	})

	$scope.addPost = function(){
		var data = {
			username: $scope.username,
			body: $scope.body
		};

		$scope.posts.push(data);
		$http.post('/post', data).success(function(res){
			console.log(res)
		});

		$scope.username = "";
		$scope.body = "";
	}

}]);


