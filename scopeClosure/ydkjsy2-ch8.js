ModulePattern

encapsulationAndPOLE

encapsulation = "goal: to bundling of data and behavior(functions) that together serve a common purpose"


whatIsAModule 

defined = [
    "collection of data and functions",
    "divided between hidden and public accessible details",
    "public = public API"
]

someUsefulCodePatterns = "not quite a module"

namespaces = "stateless grouping"

var Utils = {  // Collection of utilities
    cancelEvt(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        evt.stopImmediatePropagation();
    },
    wait(ms) {
        return new Promise(function c(res){
            setTimeout(res,ms);
        });
    },
    isValidEmail(email) {
        return /[^@]+@[^@.]+\.[^@.]+/.test(email);
    }
};

dataStructures = "stateful grouping"

var Student = {
    records: [  // This is publicly accessible data
        { id: 14, name: "Kyle", grade: 86 },
        { id: 73, name: "Suzy", grade: 87 },
        { id: 112, name: "Frank", grade: 75 },
        { id: 6, name: "Sarah", grade: 91 }
    ],
    getName(studentID) {
        var student = this.records.find(
            student => student.id == studentID
        );
        return student.name;
    }
};

Student.getName(73);
// Suzy


Modules = "stateful access control"

var Student= (function defineStudent() {  // Instance of a model, an IFEE returning an object publicAPI
    var records = [
        { id: 99, name: "Toni", grade: 88 },
        { id: 79, name: "Tank", grade: 90 },
        { id: 100, name: "Terrie", grade: 88 },
        { id: 77, name: "Gasper", grade: 90 }
    ];

    var publicApi = {  // Here is the poublic API object with one method = getName()
        getName  // This can access the private hidden records data 
    };

    return publicApi;

    function getName(studentID) { 
        var student = records.find(  // establishing the identifier student as the local variable records
            student => student.id == studentID
        );
        return student.name;
    }
})();

Student.getName(79);  // Invoking the exposed innner function/method on the publicApi object
                      // maintaining access to the inner records variable via closure 
// "Tank"


moduleFactory = "defining a module for supporting multiple instances"

function defineStudent() {  // The module factory
    var records = [
        { id: 99, name: "Toni", grade: 88 },
        { id: 79, name: "Tank", grade: 90 },
        { id: 100, name: "Terrie", grade: 88 },
        { id: 77, name: "Gasper", grade: 90 }
    ];

    var publicAPI = {
        getName
    };

    return publicAPI;

    function getName(studentID) {  // getName closses over records
                                   // function getName() now invokes the method for the specific instance fullTime

        var student = records.find(
            student => student.id == studentID
        );
        return student.name;
    }
}

var fullTime = defineStudent();  // Calling defineStudent to instanciate a module fullTime
fullTime.getName(79);

// ****
var partTime = defineStudent();  // Calling defineStudents again to instanciate a module partTime
partTime.getName(100)


nodeCommonJSModules 

details = "no bundling, rather file based = one module per file and everything is private by default"

// example tweaked to adhere to this format 

module.exports.getName = getName;

var records = [
{ id: 99, name: "Toni", grade: 88 },
{ id: 79, name: "Tank", grade: 90 },
{ id: 100, name: "Terrie", grade: 88 },
{ id: 77, name: "Gasper", grade: 90 }
];

function getName(studentID) {
    var student = records.find(
        student => student.id == studentID
    );
    return student.name;
}

// using Node's require() method 
// to include another module instance in the program
// where the above module is called student.js
// get access like this
var Student = require("path/to/student.js");

Student.getName(79);



ESMFormat

details = "similar to CommonJS, but these files are assumed to be in strict mode, no way to set as non-strict"

// example 

export function getName(studentID);
// or export { getName };

var records = [
    { id: 99, name: "Toni", grade: 88 },
    { id: 79, name: "Tank", grade: 90 },
    { id: 100, name: "Terrie", grade: 88 },
    { id: 77, name: "Gasper", grade: 90 }
    ];
    
    function getName(studentID) {
        var student = records.find(
            student => student.id == studentID
        );
        return student.name;
    }


