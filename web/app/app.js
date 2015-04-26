var ElokuvaApp = angular.module('ElokuvaApp', ['firebase', 'ngRoute']);

ElokuvaApp.config(function ($routeProvider) {
    $routeProvider
            .when('/', {
                controller: 'ListController',
                templateUrl: 'app/views/listMovies.html'
            })
            .when('/movies', {
                controller: 'ListController',
                templateUrl: 'app/views/listMovies.html'
            })
            .when('/movies/new', {
                controller: 'AddMovieController',
                templateUrl: 'app/views/addMovie.html'
            })
            .otherwise({
                redirectTo: '/'
            });
});