/**
 * Falsy;
 * 0
 * ""
 * undefined
 * null
 * Nan
 * Trutly
 * '0', ' ', [], {}
 */
// const age = 0; // tread false
// const age = -4; // tread true
// const age = 4; // tread true

// const name = "Solaiman"; // treat true
// const name = " "; // treat true

// if(name){
//    console.log("condition is true"); 
// }else{
//     console.log("condition is false");
// }

// let name; // undefined => false

// if(name){
//     console.log("condition is true"); 
//  }else{
//      console.log("condition is false");
//  }

// let name = null; // treat is false
// let name = NaN; // treat is false

// if(name){
//     console.log("condition is true"); 
//  }else{
//      console.log("condition is false");
//  }

// let name = []; // treat true
// let name = {}; // treat true

// if(name){
//     console.log("condition is true"); 
//  }else{
//      console.log("condition is false");
//  }


let name = 12;
 if(name || name == 0){
    console.log("condition is true"); 
 }else{
     console.log("condition is false");
 }