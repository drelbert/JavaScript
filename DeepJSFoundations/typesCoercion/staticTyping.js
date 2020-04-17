upToNow = 'Discussion has been around using a coding style that makes our types more obvious.'
limitedToJS = 'This disucssion has entailed only what we know of JS proper'

linting = 'tool that applies opinion about code and presents that  for dev to make decision about'

//Exploration of TypeScript and Flow

benfitsOf = {
    one: 'catch type-related mistakes',
    two: 'communicate type intent',
    three: 'provide IDE feedback'
}

caveats = {
    one: 'inferencing is best-guess only, do not really know',
    two: 'annotations are optional and one can not opt in',
    three: 'any place where type is unknown, there is uncertainty'
}

inferencing 

staticType = 'infering that the variable has a type based on the variable that does into it'

typeScriptAndFlowExample

var teacher = 'Jose';  // this is signaling that teacher only ever holds a string

teacher = { name: 'Jose'}; // Error: can't assign object to string

staticTypes = 'infering that the variable has a type based on the value that goes into it'


customTypes 

point = 'a parameter to a function is alot like a variable'


validatingOperandTypes

typeScript = 'in addition to identifying information about variables -> it can indicate the validity of an operation.'

typeScriptChecks = 'check operations and ensures they are valid'

typeAwareLinting = ' validating operand types'

but = 'TS does not allow coercion to occur, an all or nothing proposition'

summary
// https://github.com/niieani/typescript-vs-flowtype

perspective = {
    oneSide: 'do not use types and rely on ===',
    sideTwo: 'use a TypeScript or Flow that layer something that is not fundamentally JS',
    middle: ''
}

staticTypingPros = {
    one: 'make types more obvious in code',
    two: 'similar to other languages typing systems',
    three: 'really good at infering'
}

staticTypingCons = {
    one: 'use of the non-JS-standard syntax',
    two: 'TS and Flow focus on statuc types',
    point: 'JS DNA is value typeing not variable typing'
}


understandingTypes = {
    systemIs: 'a dynamic type system',
    coercionForms: 'for value type conversion',
    approachToTypes : {
        one: 'dont think about them and use ===',
        two: 'adopt a static type system like TypeScript or Flow',
        balanced: [
            'learn the type system', 
            'code so types are clearly obvious'
        ]
    }
}