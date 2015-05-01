ElokuvaApp.controller('ListController', function ($scope, FirebaseService, $location) {

    $scope.movies = FirebaseService.getMovies();
    $scope.removeMovie = function (movie) {
        FirebaseService.removeMovie(movie);
    }
    
 

});

