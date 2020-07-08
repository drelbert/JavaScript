usingClosures;

seeTheClosure;

notApplicableTo = ["classes", "objects"];

toObserve = [
  "a function must be invoked",
  "specifically in a different branch of the scope chain from its original definition",
  "as a runtime characteristic of function instances",
];

seeTheClosure;

// example
// outer scope: Red
function lookupStudent(studentID) {
  // Creates and returns an inner function greetStudent()
  // function scope: Blue

  var students = [
    { id: 44, name: "Tor" },
    { id: 109, name: "Tead" },
    { id: 66, name: "Tess" },
    { id: 02, name: "Tank" },
  ];

  return function greetStudent(greeting) {
    //function scope: Green

    var student = students.find(
      // NOTE: students is referenced here in the green scope, which is an identifier from the scope of lookupStudent()
      // this reference from the inner scope to the variable in the outer is called a closure
      (student) => student.id == studentID // NOTE: studentID is referenced here in the green scope, which is an identifier from the scope of lookupStudent()
      // this reference from the inner scope to the variable in the outer is called a closure
    );

    return `${greeting}, ${student.name}!`;
  };
}

var choosenStudents = [
  lookupStudent(02), // first call producing an instance of the inner greetStudent
  lookupStudent(109), // second call producing an instance of the inner greetStudent
];

//  accessing the function's name
choosenStudents[0].name;
// greetStudent

choosenStudents[0]("Hi");
// Hi Tank!

chosenStudents[1]("Hola");
// Hola Tead!

addingUpClosures;

// Consider
function adder(num1) {
  // adder() creates a local variable
  return function addTo(num2) {
    // function addTo() is a closure
    // Each instance closes over num1 variable and hence do not get GC'd
    // The addTo() is not a single closure
    return num1 + num2;
  };
}

var add10To = adder(10); // Creating a new inner addTo() function instance and add10To is a  new closure
// add10To is a reference to the instance of the function addTo created when adder is run

var add42To = adder(42); // Creating a new inner addTo() function instance and add42To is a new closure
// add42To is a reference to the instance of the function addTo created when adder is run

add10To(15); // 25
add42To(9); // 51

importantDetail =
  "closure is associated with an instance of a function, not its single lexical definition";

liveLinkNotSnapshot;

closure = [
  "a live link, preserving access to the full variable itself",
  "the closed over variable can be updated",
];

//example
function makeCounter() {
  // creating a function definition in the blue scope
  var count = 0; // creating a variable delcaration identifier count with a vlaue of 0

  return function getCurrent() {
    // creating an inner function getCurrent() and it closes over count
    count = count + 1; // closure count: 0
    return count; // closure count: 1
  };
}

var hits = makeCounter(); // creating a new inner getCurrent function instance and hiots is a new closure
// hits is a reference to the instance of the function getCurrent created wehn makeCounter is run

hits(); // calling or instanciating the getCurrent function  returns 1
hits(); // 2

console.log(hits()); // 3

practicalClosureFromMDN;

use = "closure anywhere we normally use an object with only a single method";
doNotUSe = "in a loop";

// Illustration of closure with a timer to show value-oriented
var askQ = function ask(question) {
  setTimeout(function waitASec() {
    // waitASec() closing over question

    console.log(question);
  });
};

// Illustrating closure as value-oriented only
var studentName = "Olaf";

var greeting = function greet() {
  // greeting() closing over studentName, not Olaf

  console.log(`Greetings, ${studentName}.`);
};

// later
studentName = "Lea";

// later

greeting();
// Greetings, Lea.

commonClosures;

twoAre = ["Ajax", "events"];

// An ajax utility
function lookUpStudent(studentID) {
  ajax(
    `https://some.api/student/${studentID}`,

    function onRecord(record) {
      // The onRecord() callback gets invoked later with lookUpStudent() below
      // onRecord() closes over studentID
      // But the lookUpStudent will have long since completed
      console.log(`${record.name} (${studentID})`);
    }
  );
}

lookUpStudent(114);
// Franchez (114)

whatIfICantSeeIt;

noClosure = [
  "variables are present but never accessed",
  "no function innvocation",
];

// example using just lexical scope lookup != closure
function greet(user) {
  var greeting = "Grettings";
  output();  // inner function that accesses the variables user and greeting from its enclosing scope
             //  and the invocation occurs in the same scope as the varibles, which are still avialable
             //  hence this is jsut lexical scope not closure 

  function output() {
    console.log(`${greeting}, ${user}.`);
  }
}

greet("Vader");

// returns "Greetings Vader"




observableDefinition;

observed = "when a function uses variable(s) from outer scope(s) even while running in a scope where those variable(s) would not be accessible"

definition = [
  "Must have a function involved",
  "must reference at least one variable from an outer scope",
  "must be invoked in a different branch of the scope chain from the variable(s)",
  [
    "FE Masters content definition",
    "closure is when a function remebers its lexial scope",
    "even when the function is executed outside that lexical scope",
  ],
];

closureLifecycleAndGC;

perVarorPerScope;

takeaway = [
  "important to define where closures appear in the program and what variables are included",
  "manage these closures carefully so only hold onto what's minimally needed and no memory is wasted",
];

alternativePerspective;

review = [
  "functions are first-class values - passed around the program like any other value",
  "closure = link-association that connects that function to the scope/variables outside of itself, no matter where that function goes",
];

implementationAboutPassingAsReference = [
  "as opposed to the observational from above",
  "function instance and its scope environment preserved in place",
  "while any reference to it are passed around and invoked from other scopes",
  "closure"
  ["as the magic of keeping alive a function instance",
  " with its scope environment and chain", 
  "as long as there is a function instance of it in the program"
]
];

whyClosure;

givenThat = "closure is the preservation of a linkage to a variable"

// example illustrating efficient function to handle button click for AJAX request

var APIendpoints = {
  studentIDs: "https//some.api/register-students",
};

var data  = {
  studentIDs = [ 55, 101, 805, 404, 202 ],

};

// adapting the partial application approack of functional programming 
function defineHandler(requestURL, requestData) {  // these inputs are provided ahead of time, 
  return function makeRrequest(evt) {     // allowing for makeRequest() to be partially applied
    ajax(requestURL, requestData);        // localy labeled below as "handler"

  };
}

function setupButtonHandler(btn) {
  var recordKind = btn.dataset.kind;
  var handler = defineHandler(
    APIendpoints[recordKind],
    data[recordKind]
  );
  btn.addEventListener("click", handler);
}



<button data-kind="studentIDs">
  Register Students
</button>

setupButtonHandler(btn);
