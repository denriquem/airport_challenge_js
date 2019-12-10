'use strict';

describe('Plane',function()){
  var plane;
  var airport;
  beforeEach(function(){
    plane = new Plane();
    airport = jamsine.createSpyObj('airport',['clearForLanding']);
  });
  it('can land at an airport', function(){
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });
});
