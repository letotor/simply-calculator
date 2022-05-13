const msg= 
`'                               ___'
'      /|    //| |                 / /                                                             //   ) )'
'     //|   // | |                / /      ___                   ___        ___        __         //            ___       //   __  ___     ___        ___       / __        ___'
'    // |  //  | |  //   / /     / /     //   ) )   //   / /   //   ) )   //___) )   //  ) )     //           //   ) )   //     / /      //   ) )   //   ) )   //   ) )   //___) )'
'   //  | //   | | ((___/ /     / /     //   / /   //   / /   //___/ /   //         //          //           //   / /   //     / /      //   / /   //         //   / /   //'
'  //   |//    | |     / /     / /___  ((___/ /   ((___( (   //         ((____     //          ((____/ /    ((___( (   //     / /      ((___/ /   ((____     //   / /   ((____'
`
const prompt = require("prompt-sync")({ sigint: true });
console.log(msg)
// let username = prompt("What s your name");
let operator = prompt("operator ? ( +,-,*,/) : ");
let firstValue=parseInt(prompt("first value : "));
let secondValue =parseInt(prompt("second value : "));
let res;

switch(operator){
    case("+"): {
        console.log(operator)
        res=firstValue+secondValue;
        break;
    }
    case("-"):{
        console.log(operator)
        res=firstValue-secondValue;
        break;
    }
    case("/"):{
        console.log(operator)
        res=firstValue/secondValue;
        break;
    }
    case("*"):{
        console.log(operator)
        res=firstValue*secondValue;
        break;
    }
    default:{
        operator="+";
          console.log(operator);
          res=firstValue+secondValue;
          break;
    }
}


console.log(firstValue);
console.log(operator);
console.log(secondValue);
console.log("=");

// res=Number(firstValue)+Number(secondValue);
console.log(res);




