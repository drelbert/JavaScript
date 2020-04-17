filter 

isAbout= "returns a new array with the items for which callback returns true"

// Example 
var assortedData = ["a", 10, 30, "b", 77, "dog"];

var extractValue = assortedData.filter(function(item){
    return typeof item == "string"; 
});

console.log(extractValue);