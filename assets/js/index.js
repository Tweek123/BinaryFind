// Main js file

// another js file (example)
//import Stat from './Stat.js'
import { Errs } from './createErrors.js'
import  binFind  from './binaryFind.js'
import  Tests  from './createTests.js'
import  binFindMain  from './binFindMain.js'

let inputMass =document.getElementById('input-mass');
let inputEl = document.getElementById('input-el');
let log = document.getElementById('log');
let buttonSolve = document.getElementById('button-solve');

var binaryFind = new binFindMain(inputMass,inputEl,buttonSolve,log,Errs,Tests,binFind);