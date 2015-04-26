ElokuvaApp.controller('editMovieController', function ($scope, FirebaseService, $routeParams, $location) {
    var elokuvat = FirebaseService.getMovies();

    var ok = false;

    for (var i = 0; i < elokuvat.length; i++) {
        if (elokuvat[i].$id == $routeParams.key) {
            var ok = true;
            $scope.elokuva = elokuvat[i];
        }
    }

    if (!ok) {
        $location.path('/');
    }

    if ($scope.elokuva) {
        $scope.movieTitle = $scope.elokuva.title;
        $scope.movieDirector = $scope.elokuva.director;
        $scope.movieYear = $scope.elokuva.release;
        $scope.movieDescription = $scope.elokuva.description;
    }
    
    


    $scope.editMovie = function () {
        $scope.elokuva.title = $scope.movieTitle;
        $scope.elokuva.director = $scope.movieDirector;
        $scope.elokuva.release = $scope.movieYear;
        $scope.elokuva.description = $scope.movieDescription;
        console.log('asdasdasdva.title')
        FirebaseService.editMovie($scope.elokuva);
        $location.path('/movies');

    }
    
    

});