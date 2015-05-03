var expect = require('chai').expect
  , chainable = require('./')

describe('chainable', function() {
  it('should call function and return it', function() {
    var result = 0
      , fn = function(x){ result = x }

    expect(chainable(fn)(5)).to.equal(fn)
    expect(result).to.equal(5)
  })

})