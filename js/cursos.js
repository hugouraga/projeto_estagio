var modulo = angular.module('modulo',[]);

modulo.controller("MyController", function($scope, $http){
	$http.get("js/cursos.json").then(function(response){
		$scope.cursos = response.data.cursos
	})
})