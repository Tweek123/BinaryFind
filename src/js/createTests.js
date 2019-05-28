import Stat from './Stat.js'
import Stats from './checkStats.js'
import { Errs } from './createErrors.js'
import  binFind  from './binaryFind.js'

let TestErIsANum = new Stat( function () {

    let testingVal = [2,NaN,undefined,'a',new Object,,null]; 
    let testExpect = [false,false,true,true,true,true,true];

    let testingFunc = Errs.findStat("ElementEr","isANotNum");
    let testSucces = true;
    let chechedTestStat = new Array(testingVal.length);

    for(let i =0; i <testingVal.length; i++) {
        chechedTestStat[i] = testingFunc.checkStat(testingVal[i]).status;
    }

    for(let i = 0; i<chechedTestStat.length;i++){
        if(chechedTestStat[i] !== testExpect[i]) {
            testSucces = false;
        }
    }

        this.value = testingVal;
        return testSucces;    
    },
    "TestErNotNum", false, "ElementTest"
    )

let TestErIsANaN = new Stat( function () {

    let testingVal = [2,NaN,undefined,'a',new Object,,null]; 
    let testExpect = [false,true,false,false,false,false,false];
    
    let testingFunc = Errs.findStat("ElementEr","isANaN");
    let testSucces = true;
    let chechedTestStat = new Array(testingVal.length);
    
    for(let i =0; i <testingVal.length; i++) {
        chechedTestStat[i] = testingFunc.checkStat(testingVal[i]).status;
    }

    for(let i = 0; i<chechedTestStat.length;i++){
        if(chechedTestStat[i] !== testExpect[i]) {
            testSucces = false;
        }
    }

        this.value = testingVal;
        return testSucces;  
    },
    "TestErIsNaN", false, "ElementTest"
    )

let TestIsANaN = new Stat( function () {

    let testingVal = [2,NaN,undefined,'a',new Object,,null]; 
    let testExpect = [false,true,false,false,false,false,false];
    
    let testingFunc = Errs.findStat("ElementEr","isANaN");
    let testSucces = true;
    let chechedTestStat = new Array(testingVal.length);
    
    for(let i =0; i <testingVal.length; i++) {
        chechedTestStat[i] = testingFunc.checkStat(testingVal[i]).status;
    }

    for(let i = 0; i<chechedTestStat.length;i++){
        if(chechedTestStat[i] !== testExpect[i]) {
            testSucces = false;
        }
    }
        this.value = testingVal;
        return testSucces;  
    },
    "TestErIsNaN", false, "ElementTest"
    )

let TestErIsANotArrayOfNum = new Stat( function () {

    let testingVal = [
    [1,2,3,4,5,6],
    [NaN,2,3],
    [new Object,2,5,6],
    ['a',2,3,5,6,'7'],
    [undefined,2,3,4,5,6,7],
    [,2,3,4,5,6,7],
    [null,2,3,4,5,6,7]
    ]; 
    
    let testExpect = [false,false,true,true,true,true,true];
    
    let testingFunc = Errs.findStat("ArrayEr","isANotArrayOfNumber");
    let testSucces = true;
    let chechedTestStat = new Array(testingVal.length);
    
    for(let i =0; i <testingVal.length; i++) {
   
        chechedTestStat[i] = testingFunc.checkStat(testingVal[i]).status;
    }

    for(let i = 0; i<chechedTestStat.length;i++){
        if(chechedTestStat[i] !== testExpect[i]) {
            testSucces = false;
        }
    }
    
        this.value = testingVal;
        return testSucces;  
    },
    "TestErIsNaN", false, "ElementTest"
    )

    let TestErArrayHasNaN = new Stat( function () {
    
    let testingVal = [
    [1,2,3,4,5,6],
    [NaN,2,3],
    [new Object,2,5,6],
    ['a',2,3,5,6,'7'],
    [undefined,2,3,4,5,6,7],
    [,2,3,4,5,6,7],
    [null,2,3,4,5,6,7]
    ]; 
    
    let testExpect = [false,true,false,false,false,false,false];
    
    let testingFunc = Errs.findStat("ArrayEr","ArrayHasNaN");
    let testSucces = true;
    let chechedTestStat = new Array(testingVal.length);
    
    for(let i =0; i <testingVal.length; i++) {
    
        chechedTestStat[i] = testingFunc.checkStat(testingVal[i]).status;
    }

    for(let i = 0; i<chechedTestStat.length;i++){
        if(chechedTestStat[i] !== testExpect[i]) {
            testSucces = false;
        }
    }
        return testSucces;  
    },
    "TestErIsNaN", false, "ElementTest"
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
        let testSucces = true;
        let chechedTestStat = new Array(testingVal.length);
        
        for(let i =0; i <testingVal.length; i++) {
            chechedTestStat[i] = testingFunc(testingMass[i],testingVal[i]).findIndex;
        }
        for(let i = 0; i<chechedTestStat.length;i++){
            if(chechedTestStat[i] !== testExpect[i]) {
                testSucces = false;
            }
        }
            this.value = testingMass.toString() + '\n\n\n' + testingVal.toString();
            return testSucces;  
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
        let testSucces = true;
        let chechedTestStat = new Array(testingVal.length);
        
        for(let i =0; i <testingVal.length; i++) {
            chechedTestStat[i] = testingFunc(testingMass[i],testingVal[i]).toLong;
        }

        for(let i = 0; i<chechedTestStat.length;i++){
            if(chechedTestStat[i] !== testExpect[i]) {
                testSucces = false;
            }
        }
            this.value = testingMass.toString() + '       ' + testingVal.toString();
            return testSucces;  
        },
        "InterTest", false, "FuncTest"
        )
        
let Tests = [TestErIsANum,TestErIsANaN,TestErIsANaN,TestIsANaN,
    TestErIsANotArrayOfNum,TestErArrayHasNaN,
    TestBinFindAnswer,TestBinFindInter];
    
    for(let i=0; i<Tests.length;i++) {
        console.log(Tests[i].checkStat().status);    
    }

export { Tests }