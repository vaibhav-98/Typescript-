/**
 * How to define types for objects
 * 
 *  - classes → data member , membner function 
 *  - interface → its a contract 
 */

class Car {
    name: string
    constructor (name: string) {
        this.name = name
    }

    display() {
        console.log(this.name)
    }
}



interface Product {
    name: string,
    price: number,
    brand: string

    display() : void;
}

let p2 : Product = {
    name: "Iphone",
    price: 100000,
    brand: "Apple",

    display: () => {
        console.log("display");
        
    }

}


// let p1 = new Product() ;
let c1 = new Car("santro");

console.log(p2);





