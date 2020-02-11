//Objects deep dive 
    //Core data structure to reflect real world entity
    //For grouping related data and for breaking up code in logical pieces

    const objectsAreDataStructures = {
        properties: 'variables - with key:value pairs',
        methods: 'functions - also key:value pairs where value = function'
    };

    //Recall that there are two values 
        //primitive = string, numbers, bool, null
        //reference values = objects
            //{...}, Arrays, DOM Nodes, other built ins

    
    const person = {
        name: 'Terna',
        age: '68',
        skills: ['Code', 'Testing'],
        engage: function() {
            alert('Code Time!');
        }
    };

    //How to add mod or delete properties 
    //this syntax adds a property to person object as a boolean 
    person.isAdmin = true;

    //To delete and set property to undefined
    delete person.age;


//special key names and access 
    //see video 

//property types and property order
    //use of numbers as properties and how that allows for interger ordering

//dynamic property access and setting properties dynamically

    //use of square brackets to dynamically change the prop
    

//demo app work 