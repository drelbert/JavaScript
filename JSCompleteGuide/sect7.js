//El DOM
  //HTML, DOM and JavaScript
    const domNodes = {
        html: 'has an HTML node created for it',
        head: 'also has a node ...',
        title: 'TITLE node and so on for the rest of the elements',
        thusCreatedA: 'node tree reflecting hierarchy of elements'
    } 

  //Nodes and Elements
    // Nodes = objects that make up the DOM
        //Eveything in DOM is a node 

    
    //Elements = one type of nodes 
        //made off of html tags that were rendered 
        //have special props and methods to interact with them 

    //Node Query Methods 
        //set of various methods to access DOM elements 
    const elBrowser = {
        has: 'two global objects', 
        are: {
            document: 'the DOM (and is a property of window)',
            DOMHas: 'root DOM node amd provides access to element querying',

            window: 'the window = top most object',
            windowHas: 'the active browser window',
            windowIs: 'global storage for script and access to window specific properties and methods'
        }
    }

    const dOMProperties = {
        point: 'each element has a set of properties for eval and manipulation',
        useCase: 'change the rendered view, read for instance <p>',
        details: '<p> has textContent, id, className',
        seeExample: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLParagraphElement'
    }

    //Attributes v properties 
        //often attributes are mapped to properties and 'live sync' is set up
        //not always the case though

        //attributes = placed in HTML on element tags 
            //example = input, class, value
            //whatever is written on the element

        //properties = browser creates dom object and then preconfig properties based on attributes 
            // property is value stored in object created based on the html code
            // properties auto added on created DOM objects 
            //but not always a 1:1 mapping 


//Querying and traversing the DOM
    //Querying = access to manipulate 

    //Traversing = access to manipulate individual elements 
    //terms 
        // children, decendants, parent and ancestors 

    //selecting 
        //working with an <ul>
        const ul = document.querySelector('ul');
        //and
        ul.children //returns an array like object 
        //or use 
        ul.childNodes //returns a node list like object 


//Eval and Manipulate DOM nodes 
    //see videos

//Create and Remove DOM nodes  
    //two ways 
        //html string in JS
            //innerHTML
        
        //createElement() method for new node and insert it
