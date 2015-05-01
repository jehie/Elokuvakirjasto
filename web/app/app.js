var ElokuvaApp = angular.module('ElokuvaApp', ['firebase', 'ngRoute']);

ElokuvaApp.config(['$httpProvider', function ($httpProvider) {
        delete $httpProvider.defaults.headers.common["X-Requested-With"]
    }]);

ElokuvaApp.run(function (AuthenticationService, $rootScope) {
    $rootScope.logOut = function () {
        AuthenticationService.logUserOut();
    };

    $rootScope.userLoggedIn = AuthenticationService.getUserLoggedIn();
});

ElokuvaApp.config(function ($routeProvider) {
    $routeProvider
            .when('/', {
                controller: 'ListController',
                templateUrl: 'app/views/listMovies.html'
            })
            .when('/movies', {
                controller: 'ListController',
                templateUrl: 'app/views/listMovies.html',
                resolve: {
                    currentAuth: function (AuthenticationService) {
                        return AuthenticationService.checkLoggedIn();
                    }
                }
            })
            .when('/login', {
                controller: 'UserController',
                templateUrl: 'app/views/login.html',
            })
            .when('/movies/new', {
                controller: 'AddMovieController',
                templateUrl: 'app/views/addMovie.html',
                resolve: {
                    currentAuth: function (AuthenticationService) {
                        return AuthenticationService.checkLoggedIn();
                    }
                }
            })

            .when('/movies/:key/edit', {
                controller: 'editMovieController',
                templateUrl: 'app/views/editMovie.html',
                resolve: {
                    currentAuth: function (AuthenticationService) {
                        return AuthenticationService.checkLoggedIn();
                    }
                }
            })

            .when('/find', {
                controller: 'omdbController',
                templateUrl: 'app/views/findMovie.html'
            })
            .when('/movies/:key', {
                controller: 'viewMovieController',
                templateUrl: 'app/views/viewMovie.html'
            })

            .otherwise({
                redirectTo: '/'
            });
});