class binaryFindMain { 
    
    constructor(inpuTArray,inputElement,buttonSolve,logsField,inErrors,inTests,binFind) {

        this.inputArray = inpuTArray;
        this.inputELement = inputElement;
        this.logsField = logsField;

        this.Errors = inErrors; 
        this.Tests = inTests;

        this.binFind = binFind;
        this.buttonSolve = buttonSolve;

        this.Array = [];
        this.El = null;

        this.checkedErrors = [];
        this.checkedTests = [];

        this.haveEr = false;
        this.testFailed = false;

        this.answer = new Object;

        this.initEvent();
    }

    getData() {
        let inputStringArray = this.inputArray.value.split(' ');
        
        this.Array = [];
        for(let i=0;i<inputStringArray.length;i++) {
            this.Array.push(Number.parseFloat(inputStringArray[i]));
        }

        this.El = Number.parseFloat(this.inputELement.value);
  
    }

    checkErrors() {
        let ElementErrors = this.Errors.checkStats("ElementEr",this.El);
        let ArrayErrors = this.Errors.checkStats("ArrayEr",this.Array);
        
        this.checkedErrors = ElementErrors.concat(ArrayErrors);

        let haveEr = false;

        this.checkedErrors.map(function(Err) {
            if(Err.status === true) {
                haveEr = true;
            }
          });

        this.haveEr = haveEr;
    }

    checkTests() {
        let testFailed = false;
        let testSucces = [];  
         
        for(let i=0;i<this.Tests.length;i++)  {    
            testSucces.push(this.Tests[i].checkStat());
        }
        
        this.checkedTests = testSucces;

        this.checkedTests.map(function(Test) {
            if(Test.status === true) {
                testFailed = true;
            }
            });

        this.testFailed = testFailed;
    }

    initEvent() { 
        let func = this.startSolve.bind(this);
        this.buttonSolve.addEventListener("click",func);
    }

    solve() {
        this.answerOut =  document.createElement('div');
        this.answerOut.className = "Answer";

        if(!this.haveEr) {

            this.answer = this.binFind(this.Array,this.El);


            if(this.answer.toLong === true) {

                this.answerOut.innerHTML = "<p>Failed: function was been interupt</p>";
            }
        
            if(this.answer.notFind === true) {

                this.answerOut.innerHTML = "<p>Element not found</p>";
            }

            if(this.answer.Found === true) {

                this.answerOut.innerHTML = "<p>"+"Answer: index "+ this.answer.findIndex + "</p>";
            }
            
            } else {

                this.answerOut.innerHTML = "Error: Wrong input data";
                this.logsField.appendChild(this.answerOut);
            }
    }

    print() { 
        this.logsField.innerHTML='';


        for(let i=0;i<this.checkedErrors.length;i++) {
            
            this.logsField.appendChild(this.checkedErrors[i].htmlMessage);
        }

        for(let i=0;i<this.checkedTests.length;i++) {
            this.logsField.appendChild(this.checkedTests[i].htmlMessage);
        }

        this.logsField.appendChild(this.answerOut);
    }

    startSolve() {
        this.getData();
        this.checkTests();
        this.checkErrors();
        this.solve();
        this.print();
    }
}




export default binaryFindMain
