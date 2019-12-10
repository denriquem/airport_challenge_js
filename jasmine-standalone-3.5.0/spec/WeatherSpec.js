'use strict';

describe('Weather', function() {
  var weather;
  beforeEach(function() {
    weather = New Weather();
  });
  it('gives stormy weather sometimes', function(){
    spyOn(Math,'random').and.returnValue(1);
    expect(weather.isStormy()).toBeTruthy();
  });

  it('gives not stomry weather other tiems', function(){
    spyOn(Math,'random').and.returnValue(0);
    expect(weather.isStormy()).toBeFalsy();
  });
});
