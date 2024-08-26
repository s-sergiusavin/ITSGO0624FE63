/**
 * Scope
 */

let testLet = 'let-global';
const testConst = 'const-global';
var testVar = 'var-global';

// !!! let&const variables cannot be redeclared in the same scope

// let testLet = 3;
// var testVar = 7;

//if (true) {
    //console.log('--primul If--')
    //testLet = 'let-if';
    //const testConst = 'const-if';
    //var testVar = 'var-if';
    //console.log(testLet);
    //console.log(testConst);
    //console.log(testVar);
    //if (true) {
    //    console.log ('--al doilea If--');
  //  }
//}

//console.log('-------in afara if-ului--------');
//console.log(testLet);
//console.log(testConst);
//console.log(testVar);

let outsideVar = 'outside';
if (true) {
    let outsideVar = 'inside';
    console.log(outsideVar);
}
console.log(outsideVar);
let globalVariable = 'unchanged';

function addTwo(number) {
    globalVariable = 'changed';
    const total = number + 2;
}

console.log(globalVariable);

let hotOutside = true;
if (hotOutside === true) {
    addTwo(3);
}
console.log(globalVariable);

//Pentru functiile declarate cu function keyword, se aplica hoisting, functie poate fi apelata inainte de declararea ei


function showTimisoara () {
    console.log ('Timishoara');
}