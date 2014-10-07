// app = angular.module 'morphPractice', ['ui.router']



app = angular.module('Blocitoff', ['ui.router']);

app.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
    
  $stateProvider.state('landing', {
    url: '/',
    controller: 'Landing.controller',
     templateUrl: 'public/templates/landing.html'
  });
  
  $stateProvider.state('past', {
    url: '/past',
    controller: 'Past.controller',
     templateUrl: 'public/templates/past.html'
  });
 
  $stateProvider.state('addTask', {
    url: '/addTask',
    controller: 'AddTask.controller',
     templateUrl: 'public/templates/addTask.html'
  });

}]);
            
app.controller('Landing.controller', ['$scope', 'Tasks',function($scope, Tasks) {
  var current = Tasks.getCurrentTasks();
    $scope.taskList = current;
  
  $scope.completeTask = function(task) {
      Tasks.completeTask(task);
    };
 }]);

app.controller('Past.controller', ['$scope', 'Tasks',function($scope, Tasks) {
   var past = Tasks.getPastTasks();
    $scope.taskList = past;
 }]);

app.controller('AddTask.controller', ['$scope', 'Tasks',function($scope, Tasks) {
   $scope.addTask = function(){
     var data = Tasks.getTasks();
     var dateEntered = $scope.taskDate;
     console.log(dateEntered);
     
      var dateParts = dateEntered.split('-');
      var dateCreated = new Date(dateParts[0],dateParts[1] - 1,dateParts[2]);
     var newTask = {name: $scope.taskName, dateCreated: dateCreated.toLocaleDateString(), isComplete: false};
     data.push(newTask);
     console.log(data);
     $scope.addForm.$setPristine();
     $scope.taskDate = '';
     $scope.taskName = ''; 
       
   }
 }]);

app.service('Tasks', ['$rootScope', function($rootScope) {
  var taskList = [
  { name:'Bread', desc:'buy bread',dateCreated:'10/5/2014',isComplete: false },
  {name:'BlocItoff', desc:'complete task list',dateCreated:'10/1/2014',isComplete: false },
  {name:'Book Vacation', desc:'plan and book vacation',dateCreated:'9/4/2014',isComplete: false },
  { name:'Groceries', desc:'buy blueberry',dateCreated:'10/4/2014',isComplete: true },
  { name:'Cancel Netflix', desc:'cancel netflix connection',dateCreated:'9/4/2014',isComplete: true }
     ];
  
  
  this.getTasks =  function() {
      return taskList;
    };
  
  this.getCurrentTasks = function(){
    var today = new Date();
    var d = new Date(today.getFullYear(), today.getMonth(), today.getDay());
    d.setDate(d.getDate()-7);
    
    console.log("getcurrenttasks");
    console.log(taskList);
    
    
    var currentTasks = taskList.filter(function(task){ 
      var dateParts = task.dateCreated.split('/');
      var dateCreated = new Date(dateParts[2],dateParts[0] - 1,dateParts[1]- 1);
      console.log(dateCreated);
        return ((+dateCreated >= +d) && task.isComplete === false);
    });
    console.log(currentTasks);
    return currentTasks;
  };
  
  this.getPastTasks =  function(){
    var today = new Date();
    var d = new Date(today.getFullYear(), today.getMonth(), today.getDay());
    d.setDate(d.getDate()-7);
    
    var pastTasks = taskList.filter(function(task){ 
      var dateParts = task.dateCreated.split('/');
      var dateCreated = new Date(dateParts[2],dateParts[0] - 1,dateParts[1]- 1);
        return ((+dateCreated <= +d) || task.isComplete === true);
    });
    return pastTasks;
  };
   
  this.completeTask = function(task){
    console.log(task);
    task.isComplete = true;
  }
  
}]);