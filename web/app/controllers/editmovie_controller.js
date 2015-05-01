ElokuvaApp.controller('editMovieController', function ($scope, FirebaseService, currentAuth, $routeParams, $location) {
    if (!currentAuth) {
        $location.path('/login');
    }


    FirebaseService.getMovie($routeParams.key, function (elokuva) {
        $scope.elokuva = elokuva;
        $scope.movieTitle = $scope.elokuva.title;
        $scope.movieDirector = $scope.elokuva.director;
        $scope.movieYear = $scope.elokuva.release;
        $scope.movieDescription = $scope.elokuva.description;
    });

    if ($scope.elokuva) {
        $location.path('/movies');
    }


    $scope.editMovie = function () {
        if ($scope.movieTitle !== '' && $scope.movieDirector !== '' && $scope.movieYear !== '' && $scope.movieDescription !== '') {
            $scope.elokuva.title = $scope.movieTitle;
            $scope.elokuva.director = $scope.movieDirector;
            $scope.elokuva.release = $scope.movieYear;
            $scope.elokuva.description = $scope.movieDescription;
            console.log('asdasdasdva.title')
            FirebaseService.editMovie($scope.elokuva);
            $location.path('/movies');
        }


    }



});