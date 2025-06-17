describe("pow", function () {
  describe("raises x to the power 3", function () {
    function makeTest(x) {
      let expectedResult = x * x * x;
      it(`${x} in the power 3 is ${expectedResult}`, function () {
        assert.equal(pow(x, 3), expectedResult);
      });
    }

    for (let i = 1; i < 7; i++) {
      makeTest(i);
    }
  });

  it("for negative numbers the result is NaN", function () {
    assert.isNaN(pow(2, -1));
  });

  it("for non-integer n the result is NaN", function () {
    assert.isNaN(pow(2, 1.5));
  });
});
