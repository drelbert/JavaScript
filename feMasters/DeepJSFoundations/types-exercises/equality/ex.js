// TODO: write `findAll(..)` utility 
// that will return 'true' for all the console.log() statements below

// this illustrates that coercion can be safe, when corner cases are controlled for

function findAll(matchingAgainst, listOfValuesToPullFrom) {
	var returnedArray = [];  // returning an array
	for (let v of listOfValuesToPullFrom) {   // looping through all values in listOfValuesToPullFrom that match 
		if (Object.is(matchingAgainst, v)) {  //case to check that both are definetly the same value
			returnedArray.push(v);
		}
		else if  ( matchingAgainst == null && v == null ) {  // case to check for null and undefined
			returnedArray.push(v);
		}	
		else if (typeof matchingAgainst == "boolean"  && typeof v == "boolean") {
			if (match == v) {
				returnedArray.push(v);
			}
		}
		else if (typeof matchingAgainst == "string" && matchingAgainst.trim() != ""  && typeof v == "number" && !Object.is(-0, v)) {
			if (match == v) {
				returnedArray.push(v);
			}
		}
		else if (
			typeof matchingAgainst == "number" && 
			!Object.is(match, -0) &&
			!Object.is(matchingAgainst, NaN) && 
			!Object.is(match, Infinity) &&
			!Object.is(match, -Infinity)  && 
			typeof v == "string" &&
			v.trim() != ""
			) {
				if (match == v) {
					returnedArray.push(v);
				}
			}
	}
	return returnedArray;
}

// tests:
var myObj = { a: 2 };

var values = [
	null, undefined, -0, 0, 13, 42, NaN, -Infinity, Infinity,
	"", "0", "42", "42hello", "true", "NaN", true, false, myObj
];

console.log(setsMatch(findAll(null,values),[null,undefined]) === true);
console.log(setsMatch(findAll(undefined,values),[null,undefined]) === true);
console.log(setsMatch(findAll(0,values),[0,"0"]) === true);
console.log(setsMatch(findAll(-0,values),[-0]) === true);
console.log(setsMatch(findAll(13,values),[13]) === true);
console.log(setsMatch(findAll(42,values),[42,"42"]) === true);
console.log(setsMatch(findAll(NaN,values),[NaN]) === true);
console.log(setsMatch(findAll(-Infinity,values),[-Infinity]) === true);
console.log(setsMatch(findAll(Infinity,values),[Infinity]) === true);
console.log(setsMatch(findAll("",values),[""]) === true);
console.log(setsMatch(findAll("0",values),[0,"0"]) === true);
console.log(setsMatch(findAll("42",values),[42,"42"]) === true);
console.log(setsMatch(findAll("42hello",values),["42hello"]) === true);
console.log(setsMatch(findAll("true",values),["true"]) === true);
console.log(setsMatch(findAll(true,values),[true]) === true);
console.log(setsMatch(findAll(false,values),[false]) === true);
console.log(setsMatch(findAll(myObj,values),[myObj]) === true);

console.log(setsMatch(findAll(null,values),[null,0]) === false);
console.log(setsMatch(findAll(undefined,values),[NaN,0]) === false);
console.log(setsMatch(findAll(0,values),[0,-0]) === false);
console.log(setsMatch(findAll(42,values),[42,"42hello"]) === false);
console.log(setsMatch(findAll(25,values),[25]) === false);
console.log(setsMatch(findAll(Infinity,values),[Infinity,-Infinity]) === false);
console.log(setsMatch(findAll("",values),["",0]) === false);
console.log(setsMatch(findAll("false",values),[false]) === false);
console.log(setsMatch(findAll(true,values),[true,"true"]) === false);
console.log(setsMatch(findAll(true,values),[true,1]) === false);
console.log(setsMatch(findAll(false,values),[false,0]) === false);

// ***************************

function setsMatch(arr1,arr2) {
	if (Array.isArray(arr1) && Array.isArray(arr2) && arr1.length == arr2.length) {
		for (let v of arr1) {
			if (!arr2.includes(v)) return false;
		}
		return true;
	}
	return false;
}
