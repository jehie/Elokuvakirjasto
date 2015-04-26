describe('Edit movie', function () {
    var controller, scope;

    var FirebaseServiceMock, RouteParamsMock;

    beforeEach(function () {
        // Lisää moduulisi nimi tähän
        module('ElokuvaApp');

        FirebaseServiceMock = (function () {
            return {
                getMovie: function (key, done) {
                    if (key == 'abc123') {
                        done({
                            title: 'Batman 1',
                            director: 'Christopher Nolan',
                            release: '2005',
                            description: 'Epic movie'
                        });
                    } else {
                        done(null);
                    }
                }, // Toteuta FirebaseServicen mockatut metodit tähän

                editMovie: function (movie) {
                    
                }
            }
        })();

        RouteParamsMock = (function () {
            return {
                key: 'abc123'
            }
        })();

        // Lisää vakoilijat
         spyOn(FirebaseServiceMock, 'getMovie').and.callThrough();
         spyOn(FirebaseServiceMock, 'editMovie').and.callThrough();

        // Injektoi toteuttamasi kontrolleri tähän
        inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            // Muista vaihtaa oikea kontrollerin nimi!
            controller = $controller('editMovieController', {
                $scope: scope,
                FirebaseService: FirebaseServiceMock,
                $routeParams: RouteParamsMock
            });
        });
    });

    /*
     * Testaa alla esitettyjä toimintoja kontrollerissasi
     */

    /*
     * Testaa, että muokkauslomakkeen tiedot täytetään muokattavan elokuvan tiedoilla.
     * Testaa myös, että Firebasea käyttävästä palvelusta kutsutaan oikeaa funktiota,
     * käyttämällä toBeCalled-oletusta.
     */
    it('should fill the edit form with the current information about the movie', function () {
        expect(scope.movieTitle).toEqual('Batman 1');
        expect(scope.movieDirector).toEqual('Christopher Nolan');
        expect(scope.movieYear).toEqual('2005');
        expect(scope.movieDescription).toEqual('Epic movie');
        expect(FirebaseServiceMock.getMovie).toHaveBeenCalled();
    })

    /* 
     * Testaa, että käyttäjä pystyy muokkaamaan elokuvaa, jos tiedot ovat oikeat
     * Testaa myös, että Firebasea käyttävästä palvelusta kutsutaan oikeaa funktiota,
     * käyttämällä toBeCalled-oletusta.
     */
    it('should be able to edit a movie by its name, director, release date and description', function () {
        scope.movieTitle = 'ASDASD';
        scope.editMovie();
        expect(FirebaseServiceMock.getMovie).toHaveBeenCalled();
        expect(FirebaseServiceMock.editMovie).toHaveBeenCalled();
        
        
    });

    /*
     * Testaa, ettei käyttäjä pysty muokkaaman elokuvaa, jos tiedot eivät ole oikeat
     * Testaa myös, että Firebasea käyttävästä palvelusta ei kutsuta muokkaus-funktiota,
     * käyttämällä not.toBeCalled-oletusta.
     */
    it('should not be able to edit a movie if its name, director, release date or description is empty', function () {
        scope.movieTitle = '';
        scope.editMovie();
        expect(FirebaseServiceMock.getMovie).toHaveBeenCalled();
        expect(FirebaseServiceMock.editMovie).not.toHaveBeenCalled();
        
    });
});