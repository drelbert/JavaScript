// Nested functions and block scopes

// blue scope
var programs = [
  { id: 805, title: "Solo Flight Training" },
  { id: 999, title: "Finance 101 with Jaba the Hut" },
];

// red scope
function addNewProgram(added) {
  // green scope
  var added = programs.push({ id: 555, title: "Freelancing with Mando" });

  return added;
}

console.log(addNewProgram());

// black scope
function renderProgram(programID) {
  for (let program of programs) {
    // pink scope
    if (program.id == programID) {
      return program.title;
    }
  }
}

var viewProgram = renderProgram(555);

console.log(viewProgram);

// orange scope
function renderAllPrograms() {
  list = programs;
  items = [];

  programs.forEach(function (list) {
    items.push(list);
  });
  return list;
}

console.log(renderAllPrograms());

// forEach scope

function logArrayElements(element, index) {
  for (let element of programs) {
    if (element.id == element) {
      return element.title;
    }
  }
  console.log(`Currently at index of ${index},  ${element}`);
}

programs.forEach(logArrayElements);

//Closure Part 2
