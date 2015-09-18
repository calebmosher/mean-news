var app = angular.module("meanNews", ["ui.router"]);

app
	.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state("home", {
				url: "/home",
				templateUrl: "/home.html",
				controller: "MainCtrl"
			})
			.state("post", {
				url: "/post/{id}",
				templateUrl: "/post.html",
				controller: "PostCtrl"
			});
		$urlRouterProvider.otherwise("home");
	}])
	
	.factory("posts", [function() {
		var posts = {
			posts: [ ]
		};
		return posts;
	}])
	
	.controller("MainCtrl", ["$scope", "posts", function($scope, posts) {
		$scope.posts = posts.posts = [
			{
				title: "Ut pretium eros nec lorem lacinia faucibus",
				url: "http://example.com",
				upvotes: 5,
				description: "Suspendisse vulputate sem et mauris convallis consequat. Donec posuere sit amet velit sed sollicitudin."
			},
			{
				title: "Phasellus non lacus congue, sagittis justo tincidunt",
				url: "http://example.com",
				upvotes: 9,
				description: "Quisque vulputate ante sit amet nibh sagittis sagittis. Etiam et nisi nisi. Nam vulputate ornare eros, et imperdiet augue congue nec."
			},
			{
				title: "Nunc facilisis in erat ut blandit",
				url: "http://example.com",
				upvotes: 2,
				description: "Curabitur fermentum eros et leo dictum, eu fermentum velit vulputate. Sed pellentesque urna nec posuere aliquam. Praesent semper fringilla enim ac sagittis."
			},
			{
				title: "Suspendisse iaculis velit augue",
				url: "http://example.com",
				upvotes: 13,
				description: "Phasellus vitae velit facilisis, vehicula diam id, blandit est. Integer sed mauris enim."
			},
			{
				title: "Donec laoreet dui nec malesuada condimentum",
				url: "http://example.com",
				upvotes: 4,
				description: "Curabitur rhoncus lorem eu dignissim condimentum. Mauris laoreet, metus id sodales ornare, justo magna laoreet erat, sed posuere massa tellus sed lectus."
			},
		];
		
		$scope.addPost = function() {
			if (!$scope.title) return;
			
			$scope.posts.push({
				title: $scope.title,
				url: $scope.url,
				upvotes: 0,
				description: $scope.description,
				comments: [
					{
						author: "Louis CK",
						body: "Curabitur rhoncus lorem eu dignissim condimentum. Mauris laoreet, metus id sodales ornare, justo magna laoreet erat, sed posuere massa tellus sed lectus.",
						upvotes: 0
					},
					{
						author: "Bo Burnham",
						body: "Suspendisse vulputate sem et mauris convallis consequat. Donec posuere sit amet velit sed sollicitudin.",
						upvotes: 0
					},
					{
						author: "Bill Burr",
						body: "Phasellus vitae velit facilisis, vehicula diam id, blandit est. Integer sed mauris enim. Curabitur fermentum eros et leo dictum, eu fermentum velit vulputate. Sed pellentesque urna nec posuere aliquam. Praesent semper fringilla enim ac sagittis.",
						upvotes: 0
					}
				]
			});
			$scope.title = $scope.url = $scope.description = "";
		};
		
		$scope.upvote = function(post, $event) {
			var target = $event.target.classList.contains("votes") ? $event.target : $event.target.parentElement;
			
			if (target.classList.contains("voted")) {
				post.upvotes--;
				target.classList.remove("voted");
				return;
			}
			
			post.upvotes++;
			target.classList.add("voted");
		};
	}])
	
	.controller("PostCtrl", ["$scope", "$stateParams", "posts", function($scope, $stateParams, posts) {
		$scope.post = posts.posts[$stateParams.id];
	}]);
