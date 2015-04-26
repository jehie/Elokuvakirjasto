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
            .when('/movies/:key/edit', {
                controller: 'editMovieController',
                templateUrl: 'app/views/editMovie.html'
            })
            .when('/movies/:key', {
                controller: 'viewMovieController',
                templateUrl: 'app/views/viewMovie.html'
            })

            .otherwise({
                redirectTo: '/'
            });
});