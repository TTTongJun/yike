// 创建一个独立的控制器模块,名字叫Controller
// 该模块专门用于创建各个控制器
angular.module("Controller",[])
// 创建navsCtrl控制器,给导航栏绑定数据,模拟从后台获取
.controller("navsCtrl",["$scope",function($scope){
	$scope.navs = [
		{"href":"#/index","icon":"icon-home","text":"今日一刻"},
		{"href":"#/older","icon":"icon-file-empty","text":"往期内容"},
		{"href":"#/author","icon":"icon-pencil","text":"热门作者"},
		{"href":"#/category","icon":"icon-menu","text":"栏目浏览"},
		{"href":"#/favourite","icon":"icon-heart","text":"我的喜欢"},
		{"href":"#/settings","icon":"icon-cog","text":"设置"}
	];
}])
// 创建index的控制器indexCtrl
.controller("indexCtrl",["$scope","$rootScope","$http","$filter",function($scope,$rootScope,$http,$filter){
	$rootScope.num = 0;//num值为0,第一个导航栏内容选中
	$rootScope.title = "今日一刻";
	$rootScope.isShow = true;//加载图片刚开始时是处于显示状态
	// 获取当前时间2018-7-11
	var today = new Date();
	var time = $filter("date")(today,"yyyy-M-d");
	console.log(time);
	// 发送请求,获取服务器上的数据
	$http({
		url:"./api/index.php",
		params:{time:time}
	}).then(function(result){//success方法已经被淘汰,以后使用then方法
		console.log(result);
		// 绑定数据,传递给视图
		$scope.posts = result.data.posts;
		$rootScope.isShow = false;//获取数据,加载完成,图片隐藏
	});
}])

// 创建older的控制器olderCtrl
.controller("olderCtrl",["$scope","$rootScope","$http","$filter",function($scope,$rootScope,$http,$filter){
	$rootScope.num = 1;//num值为1,第二个导航栏内容选中
	$rootScope.title = "往期内容";
	$rootScope.isShow = true;//加载图片刚开始时是处于显示状态
	// 获取当前时间2018-7-11
	var today = new Date();
	var time = $filter("date")(today,"yyyy-M-d");
	console.log(time);
	// 发送请求,获取服务器上的数据
	$http({
		url:"./api/index.php",
		params:{time:time}
	}).then(function(result){//success方法已经被淘汰,以后使用then方法
		console.log(result.data.posts);
		// 绑定数据,传递给视图
		$scope.posts = result.data.posts;
		$rootScope.isShow = false;//获取数据,加载完成,图片隐藏
	});
}])
// 创建author的控制器authorCtrl
.controller("authorCtrl",["$scope","$rootScope","$http",function($scope,$rootScope,$http){
	$rootScope.num = 2;//num值为2,第三个导航栏内容选中
	$rootScope.title = "热门作者";
	$http({
		url: "./api/author.php"
	}).then(function(result){
		// $scope.authors = result;
		console.log(result);
		console.log(result.data.authors);
	});
}])


















