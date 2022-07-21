// JavaSCript Design Patterns
//https://javascriptpatterns.vercel.app/patterns

import { disconnect } from "process";

// design patterns

// modules
let moduleDef = "split code into smaller reuseable chunks";

// singleton pattern
let singletonDef = "share one single global instance throughout an app";

singletonFeature =
  "contain the instanciation of certain classes to one single instance, accessd globally";

// in ES6 two ways to create
// classes: done using ES2015 class

// objects: much more compact, no use of class
let counter = 0;

// create object with methods
const counterObj = {
  getCount: () => counter,
  increment: () => ++counter,
  decrement: () => --counter,
};

// freeze it to ensure object cannot be modified
const singleCounter = Object.freeze(counterObj);

// export to use
export default singleCounter;

// create object for db connection

let mongoURI = "mongo://...";

const dbConnectObj = {
  getConnection: () => mongoURI,
  connect: () => console.log(`Connected to ${getConnection}`),
  disconnect: () => console.log(`Terminated connection`),
};

const connection = Object.freeze(dbConnectObj);

// proxy pattern

proxyDef =
  "intermetiate object that holds methods for updating the main object";

// observer pattern

obsDef = "observables notify subscribers when event occurs";

// factory pattern

use = "create objects";

// prototype pattern

protoDef = "share props among many object at the same time";

// example
class Student {
  constructor(name, email, service) {
    this.name = name;
    this.email = email;
    this.service = service;
  }

  serviceAdd() {
    console.log(`${this.name} has been added to IEP service.`);
  }

  emailStudent() {
    console.log(`Hello ${this.name}, you have a new notification.`);
  }
}

const studnet1 = new Student("Tor", "tor@sb.edu");

console.log(studnet1.emailStudent());

// React Patterns

// con and pres pattern

presentational = "component for how the data is shown to the user, the logic";
container = "coponent for what data is shown";
