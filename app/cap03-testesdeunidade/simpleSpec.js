/**
 * Created by mayco on 22/04/2017.
 */
describe('My Function', function () {

    var t;

    beforeEach(function () {
        t = true;
    });

    afterEach(function () {
        t = null;
    });

    it('should perform action 1', function () {
        expect(t).toBeTruthy();
    });

    it('should perform action 2', function () {
       var expectetValue = true;
       expect(t).toEqual(expectetValue);
    });

});