ElokuvaApp.controller('AddMovieController', function ($scope, FirebaseService) {

    $scope.message = 'asdd'
    $scope.newMovie = 'asdds'
    
    $scope.addMovie = function () {
        console.log("xxxxxx")
        if ($scope.newMovie !== '') {


            FirebaseService.addMovies({
                title: 'LOTR',
                director: 'Jamie Oliver',
                release: 1990,
                description: 'xx'
            });

            
        }
    };

});
