describe('Show movie', function(){
	var controller, scope;

	var FirebaseServiceMock, RouteParamsMock;

  	beforeEach(function(){
  		// Lisää moduulisi nimi tähän
    	module('ElokuvaApp');

    	FirebaseServiceMock = (function(){ 
			return {
                            getMovie: function(key, done){
                                if(key == 'abc123'){
                                    done({
                                        title: 'Batman 1',
                                        director: 'Christopher Nolan',
                                        year: '2005',
                                        description: 'Epic movie'
                                    } );
                                } else {
                                    done(null);
                                }
                            }
				
			}
		})();

		RouteParamsMock = (function(){
			return {
				key: 'abc123'
			}
		});

		// Lisää vakoilijat
	     spyOn(FirebaseServiceMock, 'getMovie').and.callThrough();

    	// Injektoi toteuttamasi kontrolleri tähän
	    inject(function($controller, $rootScope) {
	      scope = $rootScope.$new();
	      // Muista vaihtaa oikea kontrollerin nimi!
	      controller = $controller('viewMovieController', {
	        $scope: scope,
	        FirebaseService: FirebaseServiceMock,
	       	$routePrams: RouteParamsMock
	      });
	    });
  	});

  	/*
  	* Testaa alla esitettyjä toimintoja kontrollerissasi
  	*/

  	/* 
  	* Testaa, että Firebasesta (mockilta) saatu elokuva löytyy kontrollerista.
  	* Testaa myös, että Firebasea käyttävästä palvelusta kutsutaan oikeaa funktiota
  	* käyttämällä toBeCalled-oletusta.
	*/
	it('should show current movie from Firebase', function(){
            
		expect(scope.elokuva.title).toEqual('Batman 1');
                expect(FirebaseServiceMock.getMovie).toHaveBeenCalled();
	});
});