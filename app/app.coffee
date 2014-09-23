app = angular.module 'morphPractice', ['ui.router']

app.config(['$stateProvider', '$locationProvider', ($stateProvider, $locationProvider) ->
  $locationProvider.html5Mode(true);

  $stateProvider.state 'home', {
    url: '/',
    templateUrl: 'public/templates/home.html'
  }