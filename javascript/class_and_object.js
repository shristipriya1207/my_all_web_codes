const employee ={                //creating first object
calcTax(){
    console.log("tax rate is 10%");

},
printMsg : function(){          //two way to define function within object
    console.log("printing the msg")
}
}

employee.calcTax();
employee.printMsg();



const manager={             //creating second object
    salary:50000,
    marks :99,
};

//Prototype in javascript

//if we want to use the object within the other object we use prototype.
 // we want to access the function of employee into the manager object 

 manager.__proto__=employee;
 manager.calcTax();
 //manager();



 //class and object 

 class myclass{
    constructor(){
        console.log("it will automatically invoke while creating  new object")
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("Stop");
    }
    setBrand(brand){
        this.brandname = brand;
        console.log(this.brandname);
    }
 }
 let car = new myclass();
 car.setBrand("maruti");