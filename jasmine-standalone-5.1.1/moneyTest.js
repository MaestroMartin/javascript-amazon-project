import {formatCurrency} from '../scripts/utils/money.js';

describe("test suite: formatCurrency", function() {

    it("formats 2095 cents as '20.95'", function() {
        expect(formatCurrency(2095)).toEqual("20.95");
    });
});