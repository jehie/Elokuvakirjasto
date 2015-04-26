ElokuvaApp.controller('viewMovieController', function ($scope, FirebaseService, $routeParams, $location) {
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
});