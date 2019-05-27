import Stat from './Stat.js'
import Stats from './checkStats.js'
import binaryFind from './binaryFind.js';
import { isArray } from 'util';


let Errs = new Stats(["ElementEr", "ArrayEr"]);

let errIsANum = new Stat( function (el) {
    if(typeof(el) !== 'number') {
        return  true;
    }
    else {
        return false;
    }
},
"isANotNum", false, "ElementEr"
)

let errIsANaN = new Stat( function (el) {
    if(Number.isNaN(el)) {
        return  true;
    }
    else {
        return false;
    }
},
"isANaN", false, "ElementEr"
)

let errIsANotArrOfNum = new Stat( function (mass) {
    let Err = false;
    for(let i=0;i<mass.length;i++){
        console.log(mass[i]);
        if(typeof(mass[i]) !== 'number') {
            Err = true;
        } 
    }     
      return Err;
},
"isANotArrayOfNumber", false, "ArrayEr"
)

let errArrayHasNaN = new Stat( function (mass) {
    let Err = false;
    for(let i=0;i<mass.length;i++) {
        if(Number.isNaN(mass[i])) {
            Err = true;
        }
    }
      return Err;
},
"ArrayHasNaN", false, "ArrayEr"
)


Errs.addStats([errIsANum,errIsANaN],"ElementEr");
Errs.addStats([errIsANotArrOfNum,errArrayHasNaN],"ArrayEr");


export { Errs }