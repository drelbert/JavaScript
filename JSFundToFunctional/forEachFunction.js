usingFunctions;

context = "list transformations with a function";

function createSuspectsObject(name) {
  return {
    name: name,
    color: name.split(" ")[2],
    speak: function () {
      console.log(`I am ${name}.`);
    },
  };
}

var people = [
  // these need to be passed to the function
  "Magnus",
  "Martha",
  "Mirriam",
];

var peopleList = [];

forEach;

adding = "looping with _.each for the list above as an alternative to forEach";

notes = [
  "abstracting a loop into a function",
  "this iterates over a list of elements, passing the values to a function",
  "iterator corresponds to lists that can be looped through",
  "forEach vs _each(from the underscore library)",
];

_.each(people, function (name) {
  // this is the iterator function taking two arguments, a list and a callback function
  let peopleObj = createSuspectsObject(name);
  peopleList.push(peopleObj);
});

forEachAnd_eachSolution;

_.each = function (list, callback) {
  // check for object or array
  if (Array.isArray(list)) {
    // loop through array
    for (let i = 0; i < list.length; i++) {
      callback(list[i], i, list); // call the callback with args = value, index, list
    }
  } else {
    // loop through the object
    for (let key in list) {
      callback(list[key], key, list);
    }
  }
};

_.each(["user202", "user409", "user999"], function theCallback(name, i, list) {
  if (list[i + 1]) {
    console.log(name, "employed more recent than", list[i + 1]);
  } else {
    console.log(name, "has been here longest");
  }
});
