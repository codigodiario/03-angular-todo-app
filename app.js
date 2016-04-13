var app = angular.module('codigodario_todo', []);

app.controller('TODOCtrl', ['$scope', function($scope){
	$scope.todos = [];
	var counter = 0;

	$scope.addTodo = function () {
		var todoToAdd = {id: counter, name: $scope.todoInput};
		this.todos.push(todoToAdd);
		counter++;
		$scope.todoInput="";
		
	};

	$scope.deleteTodo = function (todo) {
		this.todos.splice(todo.id, 1); 
	}
}]);