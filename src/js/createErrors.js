import Stat from './Stat.js'
import Stats from './checkStats.js'


let Errs = new Stats(["ElementEr", "ArrayEr"]);

let errIsANum = new Stat( function (el) {
    if(typeof(el) !== 'number') {
        return  true;
    }
    else {
        return false;
    }
},
"ErisANotNum", false, "ElementEr"
)

let errIsANaN = new Stat( function (el) {
    if(Number.isNaN(el)) {
        return  true;
    }
    else {
        return false;
    }
},
"ErisANaN", false, "ElementEr"
)

let errIsANotArrOfNum = new Stat( function (mass) {
    let Err = false;
    for(let i=0;i<mass.length;i++){
        if(typeof(mass[i]) !== 'number') {
            Err = true;
        } 
    }     
      return Err;
},
"ErisANotArrayOfNumber", false, "ArrayEr"
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
"ErArrayHasNaN", false, "ArrayEr"
)


Errs.addStats([errIsANum,errIsANaN],"ElementEr");
Errs.addStats([errIsANotArrOfNum,errArrayHasNaN],"ArrayEr");


export { Errs }