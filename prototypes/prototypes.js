FEMasters-Content

prototypes 

isA = "pattern"

theProrotypeSystem = [
    "used to implement class systems in JS",
    "objects are created by constructor calls (via new)",
    "often said that in the construction of the new objects" [
        "a constructor call makes an object based on(but actually copying) its own prototype"
    ],
    "tiny detail = JS does not copy at all" [
        "the constructor call makes an object linked to its own prototype",
        "when constructor call makes an object,"
    ]
]

classTheory = [
    "class = is the blueprint, the plan, abstract pattern",
    "instance = is the behavior of actually building the thing, tangible",
    "the implication = class oriented coding is fundamentally a copy operation",
    "the reality = adding a window to the house will not show up on blueprint",
    "the relationship between the two existed for a second and then ceased to exist",
    "instance = copy"
]


prototypal-Class 

// sugarfree example of Workshop model in objects.js
// has some similarities to classes

old-school-way-prototypeal-Class

function Workshop(teacher){  // serving as the constructor
    this.teacher = teacher;
}
Workshop.prototype.ask = function(question){
    console.log(this.teacher, question);
};

var deepJS = new Workshop("Kyle");
var reactJS = new Workshop("Sue");

deepJS.ask("Is 'prptptype' a class?");

reactJS.ask("Isn't prototype ugly?");



thisAnd-ProrotypeQA 

arrowFunctions = [
    "do have lexical scope but no this keyword",
    "do not have a prototype hence calling new will always fail"
]



shadowing-Prototypes 

allowsFor = "polymorphism"



prototypal-Inheritance

means = "linkages not copying"

classesHave = "copying"


classicalVPrototypal-Inheritance

point = [
    "ongoing attempts to make JS like a class oriented langauge",
    "in reality, it is not, just embrace the prototype system",
    "embrace the dynamic 'this' nature"
]


inheritance-Is-Delegation

behaviorDelegation = "JS' prototype system is delegation system, not a class"

theTwoSystems = [
    "delegation",
    "class"
]

OLOO 

standsFor = "objects linked to other objects";


centralToThisApproach = object.Create()

// model 
var Workshop = {  // just an object 
    setTeacher(teacher) {
        this.teacher = teacher;
    },
    ask(question) {
        console.log(this.teacher, question);
    }
};
var AnotherWorkshop = Object.assign(  // just an object 
    Object.create(Workshop),  // linking to Workshop with Object.create
    {
        speakUp(msg) {
            this.ask(msg.toUpperCase());
        }
    }
);

var JSRecentParts = Object.create(AnotherWorkshop);   // just an object linked to AnotherWorkshop with Object.create

JSRecentParts.setTeacher("Kyle");
JSRecentParts.speakUp("So much cleaner");
//Kyle So much cleaner


delegation-DesignPattern

approach = "to solve problems differently, not just writting code differently"

delegationAllowsFor = [
    "dynamic composition",
    "think in peer to peer and they are linked"
]

JS = "does delegation well, specifically prototype delegation"