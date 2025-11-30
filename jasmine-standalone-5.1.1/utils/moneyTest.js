import {formatCurrency} from '../../scripts/utils/money.js';

describe("test suite: formatCurrency", function() {

    it("formats 2095 cents as '20.95'", function() {
        expect(formatCurrency(2095)).toEqual("20.95");
    });

    if("works with 0",()=>{
        expect(formatCurrency(0)).toEqual("0.00");
    });

    it("rounds up nearest cent", () => {
        expect(formatCurrency(199.6)).toEqual("2.00");
    });

    it("rounds down nearest cent", () => {
        expect(formatCurrency(199.4)).toEqual("1.99");
    });
});