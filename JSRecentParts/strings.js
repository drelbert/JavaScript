Intro-Section 

JSEvolvingTo = "declarative approach"

declarative = [
    "declare the what/outcome and the abstractions are up to the langauge",
    "more communicative"
]


transpilers 

transpilersFor = [
"tooling for linkage between how the program was built now and browser requirements of the past",
"example: babel"
]


strings 

template-strings 
about = [
    "from ES6",
    "interpolated literals",
    "allows for declarative approach",
    "mental model = IFEE"
]

// example string interpolation = declarative 
var name = "Tor Tolstrom-Gonzales";
var email = "gonzales@mail.com";
var title = "Jr Dev Engineer";

var msg = `Log in to the class ${name}, ${email}, ${title}.`

typeof(msg);


taggedTemplates 

about = [
    "fully control the pre-processing",
    "have a special kind of function call = named tagged template literal"
]

// example string interpolation: tagged 

var amount = 12.4;

var msg = formatCurrency `Total charged: ${amount}`;

formatCurrency = "function built specifically for this use, see code in video"
taggedFunctions = "many exist in libraries in npm or github"


applyingTaggedTemplates

when = "need to create a custom tagged function"



stringPaddingTrimming