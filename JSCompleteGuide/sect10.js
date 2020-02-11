//OOP

//Is 
    //objects as core container for organizing code + logic 

    //example online store 
        const productList = {
            holds: 'data',
            hasMethods: 'with all the logic for rendering + fetching' 
        };

        const product = {
            dealsWith: 'redering details about a product',
            contectedTo: 'the productList'
        };

        const cart = {
            connectedTo: 'product to add it to the cart',
            contents: 'productOne2',
            someMethod() {
                return cart.contents();
            }
        };

//classes and instances 
    //objects 
        //are the things worked with in code 

        //are instances 
            //instance of a class 
    
    //classes 
        //define blue prints for objects 
        //define the look and feel of objects 
        //where the logic is stored 

    
    //compare this approach to the object literal approach 
    
  //how to create
        class Bax {
            field = 'default'; //class field
            bax;
            baz;

            //constructor (arguments, parameters)
            constructor(field, bax, baz) {
                this.field = field;
                this.bax = bax;
                this.baz = baz; //class property
            }
        }
    
    //to use 
        const barList = {
            baz: [
                //This is a function expression taking the arguments from the above constructor 
                new Bax(
                    'valueOne', 
                    'valueTwo', 
                    'valueThree'
                    ),
                new Bax(
                    'valueOne', 
                    'valueTwo', 
                    'valueThree'
                    ),
            ]
        }

