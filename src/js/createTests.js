import Stat from './Stat.js'
import { Errs } from './createErrors.js'
import  binFind  from './binaryFind.js'

 function createTestFunc(func) {
    func.checkStat  = function() {
        this.status = this.func();
        this.value = this.testVal;
        this.createHtml();
        return this;
    }
}


let TestErIsANum = new Stat( function () {

    let testingVal = [2,NaN,undefined,'a',new Object,,null]; 
    let testExpect = [false,false,true,true,true,true,true];

    let testingFunc = Errs.findStat("ElementEr","ErisANotNum");
    let testFailed = false;
    let chechedTestStat = new Array(testingVal.length);

    for(let i =0; i <testingVal.length; i++) {
        chechedTestStat[i] = testingFunc.checkStat(testingVal[i]).status;
    }

    for(let i = 0; i<chechedTestStat.length;i++){
        if(chechedTestStat[i] !== testExpect[i]) {
            testFailed = true;
        }
    }
    
    this.testVal = testingVal;
    return testFailed;    
    },
    "TestErNotNum", false, "ElementTest"
    )
    
let TestErIsANaN = new Stat( function () {

    let testingVal = [2,NaN,undefined,'a',new Object,,null]; 
    let testExpect = [false,true,false,false,false,false,false];
    
    let testingFunc = Errs.findStat("ElementEr","ErisANaN");
    let testFailed = false;
    let chechedTestStat = new Array(testingVal.length);
    
    for(let i =0; i <testingVal.length; i++) {
        chechedTestStat[i] = testingFunc.checkStat(testingVal[i]).status;
    }

    for(let i = 0; i<chechedTestStat.length;i++){
        if(chechedTestStat[i] !== testExpect[i]) {
            testFailed = true;
        }
    }

    this.testVal = testingVal;
    return testFailed;  
    },
    "TestErIsNaN", false, "ElementTest"
    )


let TestErIsANotArrayOfNum = new Stat( function () {

    let testingMass = [
    [1,2,3,4,5,6],
    [NaN,2,3],
    [new Object,2,5,6],
    ['a',2,3,5,6,'7'],
    [undefined,2,3,4,5,6,7],
    [,2,3,4,5,6,7],
    [null,2,3,4,5,6,7]
    ]; 
    
    let testExpect = [false,false,true,true,true,true,true];
    
    let testingFunc = Errs.findStat("ArrayEr","ErisANotArrayOfNumber");
    let testFailed = false;
    let chechedTestStat = new Array(testingMass.length);
    
    for(let i =0; i <testingMass.length; i++) {
   
        chechedTestStat[i] = testingFunc.checkStat(testingMass[i]).status;
    }

    for(let i = 0; i<chechedTestStat.length;i++){
        if(chechedTestStat[i] !== testExpect[i]) {
            testFailed = true;
        }
    }

    for(let i = 0;i<testingMass.length;i++){
        testingMass[i] = ' ['+testingMass[i].toString() +'] ';
    }
    
    this.testVal = testingMass;
    return testFailed;  
    },
    "TestErisANotArrayofNum", false, "ElementTest"
    )

let TestErArrayHasNaN = new Stat( function () {

    const testingMass = [
    [1,2,3,4,5,6],
    [NaN,2,3],
    [new Object,2,5,6],
    ['a',2,3,5,6,'7'],
    [undefined,2,3,4,5,6,7],
    [,2,3,4,5,6,7],
    [null,2,3,4,5,6,7]
    ]; 
    
    const testExpect = [false,true,false,false,false,false,false];
    
    let testingFunc = Errs.findStat("ArrayEr","ErArrayHasNaN");
    let testFailed = false;
    let chechedTestStat = new Array(testingMass.length);
    
    for(let i =0; i <testingMass.length; i++) {
    
        chechedTestStat[i] = testingFunc.checkStat(testingMass[i]).status;
    }
    for(let i = 0; i<chechedTestStat.length;i++){
        if(chechedTestStat[i] !== testExpect[i]) {
            testFailed = true;
        }
    }
    
    for(let i = 0;i<testingMass.length;i++){
        testingMass[i] = ' ['+testingMass[i].toString() +'] ';
    }

    this.testVal = testingMass;
    return testFailed;  
    },
    "TestErArrayHasNaN", false, "ElementTest"
)


let TestBinFindAnswer = new Stat( function () {

    let testingMass = [
    [1,2,3,4,5,6,7,8,9,10],
    [1,2,3,4,5,6,7,8,9,10],
    [1,2,3,4,7,8,9,10,6,5],
    [3,4,5,6,7,8,9,10,1,2],
    [1,10,3,9,4,5,6,7,8,2],
    [1,2,3,6,7,8,9,10,4,5],
    [8,9,10,1,2,3,4,5,6,7],
    [8,9,10,5,6,7,11,14,15,1336,229], 
    ]; 
    let testingVal = [2,5,3,4,7,9,10,15];
    let testExpect = [1,4,2,3,6,8,9,8];
    let testingFunc = binFind;
    let testFailed = false;
    let chechedTestStat = new Array(testingVal.length);
    
    for(let i =0; i <testingVal.length; i++) {
        chechedTestStat[i] = testingFunc(testingMass[i],testingVal[i]).findIndex;
    }
    for(let i = 0; i<chechedTestStat.length;i++){
        if(chechedTestStat[i] !== testExpect[i]) {
            testFailed = true;
        }
    }

    this.testVal = testingMass;

    for(let i = 0;i<testingMass.length;i++){
        testingMass[i] = ' ['+testingMass[i].toString() +'] ';
    }

        return testFailed;  
    },
    "AnswerTest", false, "FuncTest"
    )

let TestBinFindInter = new Stat( function () {
    let testingMass = [
    ['1','2','3','4','5','6','7','8','9','10'],
    [1,2,3,4,5,6,7,8,9,10],
    ]; 
    
    let testingVal = [2,5];
    let testExpect = [true,false];
    let testingFunc = binFind;
    let testFailed = false;
    let chechedTestStat = new Array(testingVal.length);
    
    for(let i =0; i <testingVal.length; i++) {
        chechedTestStat[i] = testingFunc(testingMass[i],testingVal[i]).toLong;
    }
    for(let i = 0; i<chechedTestStat.length;i++){
        if(chechedTestStat[i] !== testExpect[i]) {
            testFailed = true;
        }
    }

    for(let i = 0;i<testingMass.length;i++){
        testingMass[i] = ' ['+testingMass[i].toString() +'] ';
    }
        
    this.testVal = testingMass;
    return testFailed;  
    },
    "InterTest", false, "FuncTest"
    )





let Tests = [TestErIsANum,TestErIsANaN,
        TestErIsANotArrayOfNum,TestErArrayHasNaN,
        TestBinFindAnswer,TestBinFindInter];

for(let i =0;i<Tests.length;i++) {
    createTestFunc(Tests[i]);
}

export default Tests