upToNow = 'Discussion has been around using a coding style that makes our types more obvious.'
limitedToJS = 'This disucssion has entailed only what we have in JS proper'

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

typeScriptAndFlowExample

var teacher = 'Jose';

teacher = { name: 'Jose'}; // Error: can't assign object to string

staticTypes = 'infering that the variable has a type based on the value that goes into it'