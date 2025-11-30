import { formatCurrency } from "../scripts/utils/money.js";

console.log("Running money.js tests...");

if (formatCurrency(2095) === "20.95"){

    console.log("Test passed: formatCurrency(2095) === '20.95'");
} else {
    console.error("Test failed: formatCurrency(2095) !== '20.95'");
}

console.log("works with 0");

if (formatCurrency(0)=== "0.00") {
    console.log("Test passed: formatCurrency(0) === '0.00'");
}else {
    console.error("Test failed: formatCurrency(0) !== '0.00'");
}

console.log("works with round nearest cents");

if (formatCurrency(2000.5) === "20.01") {
    console.log("Test passed: formatCurrency(2000.5) === '20.01'");
} else {
    console.error("Test failed: formatCurrency(2000.5) !== '20.01'");
}