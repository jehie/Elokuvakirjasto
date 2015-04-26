describe('Movie list', function () {
    var controller, scope;

    var FirebaseServiceMock;

    beforeEach(function () {
        // Lisää moduulisi nimi tähän
        module('ElokuvaApp');



        FirebaseServiceMock = (function () {
            var movies = [
                {
                    title: 'Batman Begins',
                    director: 'Christopher Nolan',
                    release: '2005',
                    description: 'Epic movie'
                },
                {
                    title: 'The Dark Knight',
                    director: 'Christopher Nolan',
                    release: '2008',
                    description: 'Epic movie part 2'
                },
                {
                    title: 'The Dark Knight Rises',
                    director: 'Christopher Nolan',
                    release: '2012',
                    description: 'Epic movie part 3'
                }
            ];

            return {
                addMovie: function (movie) {
                    movies.push(movie);
                },
                getMovies: function () {
                    return movies;
                },
            }
        })();

        // Lisää vakoilijat
        // spyOn(FirebaseServiceMock, 'jokuFunktio').and.callThrough();
        spyOn(FirebaseServiceMock, 'getMovies').and.callThrough();

        // Injektoi toteuttamasi kontrolleri tähän
        inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            // Muista vaihtaa oikea kontrollerin nimi!
            controller = $controller('ListController', {
                $scope: scope,
                FirebaseService: FirebaseServiceMock
            });
        });
    });

    /*
     * Testaa alla esitettyjä toimintoja kontrollerissasi
     */

    /*
     * Testaa, että Firebasesta (mockilta) saadut elokuvat löytyvät konrollerista
     * Testaa myös, että Firebasea käyttävästä palvelusta kutsutaan oikeaa funktiota,
     * käyttämällä toBeCalled-oletusta.
     */
    it('should list all movies from the Firebase', function () {
        
        
        expect(scope.movies.length).toBe(3);
        expect(scope.movies[0].name).toBe("Batman Begings");
        expect(scope.movies[2].name).toBe("The Dark Knight Rises");
        expect(FirebaseServiceMock.getMovies).toHaveBeenCalled();

    });

    /* 
     * Testaa, että elokuvan pystyy poistamaan Firebasesta.
     * Testaa myös, että Firebasea käyttävästä palvelusta kutsutaan oikeaa funktiota,
     * käyttämällä toBeCalled-oletusta.
     */
    it('should be able to remove a movie', function () {
        expect(true).toBe(false);
    });
});