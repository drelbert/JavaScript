
if (!Object.is || true) {
    Object.is = function ObjectIs(pOne, pTwo) {
        //get indication that the params are T or F
        var pOneNegZero = isItNegZero(pOne);
        var pTwoNegZero = isItNegZero(pTwo);

        if (pOneNegZero || pTwoNegZero) {
            return pOneNegZero && pTwoNegZero;
        }
        else if (isItNaN(pOne) || isItNaN(pTwo)){
            return true;
        }
        else {
            return pOne === pTwo;
        }

        //test the value for -0
        function isItNegZero(v) {
            return pOne === 0 && (1/v) == -Infinity;
        }
        //test for Nan
        function isItNaN(v) {
            return v !== v;
        }
     };
}

// tests:
console.log(Object.is(42,42) === true);
console.log(Object.is("foo","foo") === true);
console.log(Object.is(false,false) === true);
console.log(Object.is(null,null) === true);
console.log(Object.is(undefined,undefined) === true);
console.log(Object.is(NaN,NaN) === true);
console.log(Object.is(-0,-0) === true);
console.log(Object.is(0,0) === true);

console.log(Object.is(-0,0) === false);
console.log(Object.is(0,-0) === false);
console.log(Object.is(0,NaN) === false);
console.log(Object.is(NaN,0) === false);
console.log(Object.is(42,"42") === false);
console.log(Object.is("42",42) === false);
console.log(Object.is("foo","bar") === false);
console.log(Object.is(false,true) === false);
console.log(Object.is(null,undefined) === false);
console.log(Object.is(undefined,null) === false);
