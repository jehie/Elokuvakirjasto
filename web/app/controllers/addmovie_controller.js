ElokuvaApp.controller('AddMovieController', function ($scope, FirebaseService, $location) {


    
    $scope.addMovie = function () {
        console.log("xxxxxx")
        if ($scope.movieTitle !== '' && $scope.movieDirector !== '' && $scope.movieYear !== '' && $scope.movieDescription !== '') {


            FirebaseService.addMovies({
                title: $scope.movieTitle,
                director: $scope.movieDirector,
                release: $scope.movieYear,
                description: $scope.movieDescription
            });
            
            $scope.movieTitle = '';
            $scope.movieDirector = '';
            $scope.movieYear = '';
            $scope.movieDescription = '';
            
             $location.path('/movies');
            

            
        }
    };

});
