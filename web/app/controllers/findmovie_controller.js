ElokuvaApp.controller('omdbController', function ($scope, OMDBService) {
    $scope.message = '';
    
    $scope.findMovie = function () {
        console.log("click")
        OMDBService.findMovie($scope.Title, $scope.Year).success(function (movies) {
            $scope.movies = movies.Search;
            if($scope.movies){
               $scope.length = $scope.movies.length; 
            } else {
                $scope.length = 0; 
            }
            
            

        });
    }

});


