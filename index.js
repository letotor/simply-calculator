const msg= 
`'                               ___'
'      /|    //| |                 / /                                                             //   ) )'
'     //|   // | |                / /      ___                   ___        ___        __         //            ___       //   __  ___     ___        ___       / __        ___'
'    // |  //  | |  //   / /     / /     //   ) )   //   / /   //   ) )   //___) )   //  ) )     //           //   ) )   //     / /      //   ) )   //   ) )   //   ) )   //___) )'
'   //  | //   | | ((___/ /     / /     //   / /   //   / /   //___/ /   //         //          //           //   / /   //     / /      //   / /   //         //   / /   //'
'  //   |//    | |     / /     / /___  ((___/ /   ((___( (   //         ((____     //          ((____/ /    ((___( (   //     / /      ((___/ /   ((____     //   / /   ((____'
`
console.log(msg);
let scrennLcd = document.getElementById("result");


/**Detect mouse input by clicking */
const inputTouch=(e)=>{ 
    switch (e) {
        case 1:
             console.log("mouse un ", e)
            scrennLcd.innerText += 1
            break;
        case 2:
             console.log("mouse deux ", e)
             scrennLcd.innerText += 2
            break;
        case 3:
             console.log("mouse trois ", e)
             scrennLcd.innerText += 3
            break;
        case 4:
             console.log("mouse quatre ", e)
             scrennLcd.innerText += 4
            break;
        case 5:
             console.log("mouse cinq ", e)
             scrennLcd.innerText += 5
            break;
        case 6:
             console.log("mouse six ", e)
             scrennLcd.innerText += 6
            break;
        case 7:
             console.log("mouse sept ", e)
             scrennLcd.innerText += 7
            break;
        case 8:
             console.log("mouse huit ", e)
             scrennLcd.innerText += 8
            break;
        case 9:
             console.log("mouse neuf ", e)
             scrennLcd.innerText += 9
            break;
        case 0:
             console.log("mouse zero ", e)
             scrennLcd.innerText += 0
            break;
        case ".":
            console.log("mouse decimale ", e)
            scrennLcd.innerText += "."
        break;
        case "+":
             console.log(" mouse op plus ", e)
             scrennLcd.innerText = "+"
            break;
        case "-":
             console.log(" mouse op moins ", e)
             scrennLcd.innerText = "-"
            break;
        case "*":
             console.log("mouse op multiply ",e)
             scrennLcd.innerText = "*"
            break;
        case "/":
             console.log("mouse op divided ", e)
             scrennLcd.innerText = "/"
            break;
        case "%":
             console.log("mouse  op percent ", e)
             scrennLcd.innerText = "%"
            break;
        case "sqrt":
             console.log("mouse  op sqrt ", e)
             scrennLcd.innerText = "sqrt"
            break;
        
         case ("="):
            console.log(" mouse OK ", e)
            scrennLcd.innerText = "="
        break;
        
         case ("AC"):
            console.log("mouse Reset", e)
              scrennLcd.innerText = 0
        break;
        
        default:
             console.log(`click mouse other`);
   
            break;
    }


     scrennLcd.innerText = detectFirstNumberZero(scrennLcd.innerText);
}





/**Which touch is pressed on keyboard directly */
document.onkeydown = checkKey;
function checkKey(e) {
    e = e || window.event;
    switch (e.key) {
        case "1":
            //  console.log(e.key),
             console.log("touche un ", e.key)
            scrennLcd.innerText += 1
            break;
        case "2":
             console.log("touche deux ", e.key)
             scrennLcd.innerText += 2
            break;
        case "3":
             console.log("touche trois ", e.key)
             scrennLcd.innerText += 3
            break;
        case "4":
             console.log("touche quatre ", e.key)
             scrennLcd.innerText += 4
            break;
        case "5":
             console.log("touche cinq ", e.key)
             scrennLcd.innerText += 5
            break;
        case "6":
             console.log("touche six ", e.key)
             scrennLcd.innerText += 6
            break;
        case "7":
             console.log("touche sept ", e.key)
             scrennLcd.innerText += 7
            break;
        case "8":
             console.log("touche hutit ", e.key)
             scrennLcd.innerText += 8
            break;
        case "9":
             console.log("touche neuf ", e.key)
             scrennLcd.innerText += 9
            break;
            
        case "0":
             console.log("touche zero ", e.key)
             scrennLcd.innerText += 0
            break;
         case ".":
             console.log("touche decimale ", e.key)
              scrennLcd.innerText += "."
            break;
        case "+":
             console.log("op plus ", e.key)
             scrennLcd.innerText = "+"
            break;
        case "-":
             console.log("op moins ", e.key)
            break;
        case "*":
             console.log("op multiply ", e.key)
            break;
        case "/":
             console.log("op divided ", e.key)
            break;
        case "%":
             console.log("op percent ", e.key)
            break;
       
         case ("="):
            console.log("OK ", e.key)
        break;
         case ("Enter"):
            console.log("OK", e.key)
        break;
         case ("Escape"):
               scrennLcd.innerText = 0
            console.log("Reset", e.key)
        break;
        
        default:
             console.log(`other invalid or shift touch ${ e.key} , code : ${e.keyCode}`);
   
            break;
    }
    scrennLcd.innerText = detectFirstNumberZero(scrennLcd.innerText);
}




/*** detect null before display */
const detectFirstNumberZero = (str)=>{
     if (str.length==2 && str.split('').includes("0") ){
        console.log("suppresion zero")
        let msgT = str.split('');
         str = msgT.slice(1).concat()
    }
    return  str;
}

/*** detect operator/special key or number */
const detect=()=>{
    return
}




/****detect screen LCD too small*/
const isDisplayLong= ()=>{
    return
}





// function calculer(operateur, ...nombres) {
//   let resultat = 0;
//   if (operateur === '+') {
//     for (let i = 0; i < nombres.length; i++) {
//       resultat += nombres[i];
//     }
//   }
// //   console.log(resultat);
// }

// calculer('+', 42, 22, 12, 23); // 99