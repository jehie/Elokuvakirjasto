ElokuvaApp.controller('viewMovieController', function ($scope, FirebaseService, $routeParams, $location) {
    
    FirebaseService.getMovie($routeParams.key, function (elokuva) {
        $scope.elokuva = elokuva;
    });
    
    if($scope.elokuva){
        $location.path('/movies');
    }
    
    
    
});