describe('Add movie', function () {
    var controller, scope;

    var FirebaseServiceMock;

    beforeEach(function () {
        // Lisää moduulisi nimi tähän
        module('ElokuvaApp');

        FirebaseServiceMock = (function () {
            var movies = [];
            return {
                addMovies: function (movie) {
                    movies.push(movie);
                },
                getMovies: function () {
                    return movies;
                }
            }
        })();

        // Lisää vakoilijat
        spyOn(FirebaseServiceMock, 'addMovies').and.callThrough();

        // Injektoi toteuttamasi kontrolleri tähän
        inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            // Muista vaihtaa oikea kontrollerin nimi!
            controller = $controller('AddMovieController', {
                $scope: scope,
                FirebaseService: FirebaseServiceMock
            });
        });
    });

    /*
     * Testaa alla esitettyjä toimintoja kontrollerissasi
     */

    /*
     * Testaa, että käyttäjä pystyy lisäämään elokuvan oikeilla tiedoilla.
     * Muista myös tarkistaa, että Firebasen kanssa keskustelevasta palvelusta
     * on kutsutta oikeaa funktiota lisäämällä siihen vakoilijan ja käyttämällä
     * toBeCalled-oletusta.
     */
    it('should be able to add a movie by its name, director, release date and description', function () {

        scope.movieTitle = 'Batman';
        scope.movieYear = '1234';
        scope.movieDescription = '1123123213';
        scope.movieDirector = '1232132ADD';
        scope.addMovie();
        
        expect(FirebaseServiceMock.getMovies().length).toBe(1);
        expect(FirebaseServiceMock.addMovies).toHaveBeenCalled();
    });

    /*	
     * Testaa, ettei käyttäjä pysty lisäämään elokuvaa väärillä tiedoilla.
     * Muista myös tarkistaa, että Firebasen kanssa keskustelevasta palvelusta
     * EI kutsuta funktiota, joka hoitaa muokkauksen. Voit käyttää siihen
     * not.toBeCalled-oletusta (muista not-negaatio!).
     */
    it('should not be able to add a movie if its name, director, release date or description is empty', function () {
        scope.movieTitle = '';
        scope.movieYear = '1234';
        scope.movieDescription = '1123123213';
        scope.movieDirector = '1232132ADD';
        scope.addMovie();

        expect(FirebaseServiceMock.getMovies().length).toBe(0);

        expect(FirebaseServiceMock.addMovies).not.toHaveBeenCalled();
    });
});