ElokuvaApp.controller('ListController', function ($scope, FirebaseService, $location) {

    $scope.movies = FirebaseService.getMovies();
    console.log($scope.movies);
    $scope.removeMovie = function (movie) {
        FirebaseService.removeMovie(movie);
    }

});

