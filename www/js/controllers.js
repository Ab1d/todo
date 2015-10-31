
angular.module('todoApp.contollers',[]).controller('TodoListController',['$scope','Todo', function($scope,Todo){

  Todo.getAll().success(function(data){
    $scope.items=data.results;

  });

  $scope.onItemDelete = function(item){

    Todo.delete(item.objectId);
    $scope.items.splice($scope.items.indexOf(item),1);
  }

  $scope.todo={};
  $scope.create =function(){
    Todo.create({content:$scope.todo.content}).success(function(data){

    $state.go('todos');
  });
}

}]);