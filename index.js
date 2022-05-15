const welcome = `╔═╗╔═╗████╔════╗████████████████████╔╗╔╗██████╔╗█████
║║╚╝║║████╚══╗═║████████████████████║╠╝╚╗█████║║█████
║╔╗╔╗╠╗█╔╗██╔╝╔╬══╦╗╔╦══╦══╦═╗╔══╦══╣╠╗╔╬══╦══╣╚═╦══╗
║║║║║║║█║║█╔╝╔╝║╔╗║║║║╔╗║║═╣╔╝║╔═╣╔╗║║║║║╔╗║╔═╣╔╗║║═╣
║║║║║║╚═╝║╔╝═╚═╣╚╝║╚╝║╚╝║║═╣║█║╚═╣╔╗║╚╣╚╣╚╝║╚═╣║║║║═╣
╚╝╚╝╚╩═╗╔╝╚════╩══╩══╣╔═╩══╩╝█╚══╩╝╚╩═╩═╩══╩══╩╝╚╩══╝
█████╔═╝║████████████║║██████████████████████████████
█████╚══╝████████████╚╝██████████████████████████████
`

console.log(welcome);
let scrennLcd = document.getElementById("result");
let lcd=scrennLcd.innerText;
let res=0;
let calc=[];
let lastNumber;
let nums=[];
let isOp=false;
let isReset=false;


// TODO next step clean code and factorisation en fonction

/**Detect mouse input by clicking */
const inputTouch=(e)=>{ 
    switch (e) {
        case 1:
             console.log("mouse un ", e)
            isOp ? scrennLcd.innerText =1 : scrennLcd.innerText += 1
            isOp=false;
            calc.push(1);
    
            break;
        case 2:
             console.log("mouse deux ", e)
              isOp ? scrennLcd.innerText =2 : scrennLcd.innerText += 2
             isOp=false;
             calc.push(2);
            break;
        case 3:
             console.log("mouse trois ", e)
              isOp ? scrennLcd.innerText =3 : scrennLcd.innerText += 3
             isOp=false;
              calc.push(3);
            break;
        case 4:
             console.log("mouse quatre ", e)
            isOp ? scrennLcd.innerText =4 : scrennLcd.innerText += 4
             isOp=false;
             calc.push(4);
            break;
        case 5:
             console.log("mouse cinq ", e)
              isOp ? scrennLcd.innerText =5 : scrennLcd.innerText += 5
             isOp=false;
             calc.push(5);
            break;
        case 6:
             console.log("mouse six ", e)
              isOp ? scrennLcd.innerText =6 : scrennLcd.innerText += 6
             isOp=false;
             calc.push(6);
            break;
        case 7:
             console.log("mouse sept ", e)
              isOp ? scrennLcd.innerText =7 : scrennLcd.innerText += 7
             isOp=false;
             calc.push(7);
            break;
        case 8:
             console.log("mouse huit ", e)
              isOp ? scrennLcd.innerText =8 : scrennLcd.innerText += 8
             isOp=false;
             calc.push(8);
            break;
        case 9:
             console.log("mouse neuf ", e)
              isOp ? scrennLcd.innerText =9 : scrennLcd.innerText += 9
             isOp=false;
             calc.push(9);
            break;
        case 0:
             console.log("mouse zero ", e)
            isOp ? scrennLcd.innerText =0 : scrennLcd.innerText += 0
             isOp=false;
            calc.push(0);
            break;
        case ".":
            console.log("mouse decimale ", e)
             isOp ? scrennLcd.innerText ="." : scrennLcd.innerText += "."
            isOp=false;
            calc.push(".");
        break;
        case "+":
             console.log(" mouse op plus ", e)
             scrennLcd.innerText = "+"
            
             
            lastNumber = parseFloat(calc.join(''))
             nums.push(lastNumber);
             res=eval(nums.join(''));
             nums.push("+");
             calc=[];
             
            //  scrennLcd.innerText = res;
             isOp=true;
             
            break;
        case "-":
             console.log(" mouse op moins ", e)
             scrennLcd.innerText = "-"
              isOp=true;

               lastNumber = parseFloat(calc.join(''))
             nums.push(lastNumber);
             res=eval(nums.join(''));
              nums.push("-");
             calc=[];
            
            break;
        case "*":
             console.log("mouse op multiply ",e)
             scrennLcd.innerText = "*"
              isOp=true;
                lastNumber = parseFloat(calc.join(''))
                
            
             nums.push(lastNumber);
             res=eval(nums.join(''));
              nums.push("*");
             calc=[];
            break;
        case "/":
             console.log("mouse op divided ", e)
             scrennLcd.innerText = "/"
            
              isOp=true;

              lastNumber = parseFloat(calc.join(''))
                
            
             nums.push(lastNumber);
             res=eval(nums.join(''));
              nums.push("/");
             calc=[];
            break;
        case "%":
             console.log("mouse  op percent ", e)
             scrennLcd.innerText = "%"
              isOp=true;
              isOp=true;

              lastNumber = parseFloat(calc.join(''))
                
            
             nums.push(lastNumber*0.001);
             res=eval(nums.join(''));
             
             
             calc=[];
            break;
        case "sqrt":
             console.log("mouse  op sqrt ", e)
             scrennLcd.innerText = "sqrt"
              isOp=true;
            break;
        
         case ("="):
             console.log("mouse op egqual ",e)
             
              isOp=true;

              nums.push(parseFloat(calc.join('')));
            res=eval(nums.join(''));

            lastNumber = res
             calc=[res];
             nums=[];
            scrennLcd.innerText = res
             
            
        break;
        
         case ("AC"):
            console.log("mouse Reset", e)
              scrennLcd.innerText = 0
              isReset=true;
              lastNumber=0;
              res=[0];
                calc=[];
                nums=[];
                isOp=false;

        break;
        
        default:
             console.log(`click mouse other`);
   
            break;
    }

    //maj lcd global
     scrennLcd.innerText = detectFirstNumberZero(scrennLcd.innerText);
    lcd=scrennLcd.innerText;
    //    lastNumber = parseFloat(calc.join(''))

   // RG01 supprimer si double operateur a la suite
   
     debug({lcd,lastNumber,nums,res,calc,isOp,isReset})
}


/** Fonction affichage debug */
const debug=(obj)=>{
console.log(obj)
}

let  = document.getElementById("result");



/**Which touch is pressed on keyboard directly */
document.onkeydown = (e) =>{

    e = e || window.event;
    switch (e.key) {
        case "1":
            //  console.log(e.key),
             console.log("touche un ", e.key)
           isOp ? scrennLcd.innerText =1 : scrennLcd.innerText += 1
            isOp=false;
            calc.push(1);
            break;
        case "2":
             console.log("touche deux ", e.key)
             isOp ? scrennLcd.innerText =2 : scrennLcd.innerText += 2
             isOp=false;
             calc.push(2);
            break;
        case "3":
             console.log("touche trois ", e.key)
             isOp ? scrennLcd.innerText =3 : scrennLcd.innerText += 3
             isOp=false;
              calc.push(3);
            break;
        case "4":
             console.log("touche quatre ", e.key)
             isOp ? scrennLcd.innerText =4 : scrennLcd.innerText += 4
             isOp=false;
             calc.push(4);
            break;
        case "5":
             console.log("touche cinq ", e.key)
              isOp ? scrennLcd.innerText =5 : scrennLcd.innerText += 5
             isOp=false;
             calc.push(5);
            break;
        case "6":
             console.log("touche six ", e.key)
              isOp ? scrennLcd.innerText =6 : scrennLcd.innerText += 6
             isOp=false;
             calc.push(6);
            break;
        case "7":
             console.log("touche sept ", e.key)
             isOp ? scrennLcd.innerText =7 : scrennLcd.innerText += 7
             isOp=false;
             calc.push(7);
            break;
        case "8":
             console.log("touche hutit ", e.key)
              isOp ? scrennLcd.innerText =8 : scrennLcd.innerText += 8
             isOp=false;
             calc.push(8);
            break;
        case "9":
             console.log("touche neuf ", e.key)
             isOp ? scrennLcd.innerText =9 : scrennLcd.innerText += 9
             isOp=false;
             calc.push(9);
            break;
            
        case "0":
             console.log("touche zero ", e.key)
             isOp ? scrennLcd.innerText =0 : scrennLcd.innerText += 0
             isOp=false;
            calc.push(0);
            break;
         case ".":
             console.log("touche decimale ", e.key)
              isOp ? scrennLcd.innerText ="." : scrennLcd.innerText += "."
            isOp=false;
            calc.push(".");
            break;
        case "+":
             console.log("op plus ", e.key)
            scrennLcd.innerText = "+"
            
             
            lastNumber = parseFloat(calc.join(''))
             nums.push(lastNumber);
             res=eval(nums.join(''));
             nums.push("+");
             calc=[];
             
            //  scrennLcd.innerText = res;
             isOp=true;
            break;
        case "-":
             console.log("op moins ", e.key)
              scrennLcd.innerText = "-"
              isOp=true;

               lastNumber = parseFloat(calc.join(''))
             nums.push(lastNumber);
             res=eval(nums.join(''));
              nums.push("-");
             calc=[];
            break;
        case "*":
             console.log("op multiply ", e.key)
               scrennLcd.innerText = "*"
              isOp=true;
                lastNumber = parseFloat(calc.join(''))
                
            
             nums.push(lastNumber);
             res=eval(nums.join(''));
              nums.push("*");
             calc=[];
            break;
        case "/":
             console.log("op divided ", e.key)
              scrennLcd.innerText = "/"
            
              isOp=true;

              lastNumber = parseFloat(calc.join(''))
                
            
             nums.push(lastNumber);
             res=eval(nums.join(''));
              nums.push("/");
             calc=[];
            break;
        case "%":
             console.log("op percent ", e.key)
             scrennLcd.innerText = "%"
              isOp=true;
              isOp=true;

              lastNumber = parseFloat(calc.join(''))
                
            
             nums.push(lastNumber*0.001);
             res=eval(nums.join(''));
             
             
             calc=[];
            break;
       
         case ("="):
            console.log("OK ", e.key)
              isOp=true;

              nums.push(parseFloat(calc.join('')));
            res=eval(nums.join(''));

            lastNumber = res
             calc=[res];
             nums=[];
            scrennLcd.innerText = res
             
        break;
         case ("Enter"):
              isOp=true;

              nums.push(parseFloat(calc.join('')));
            res=eval(nums.join(''));

            lastNumber = res
             calc=[res];
             nums=[];
            scrennLcd.innerText = res
             
        break;
         case ("Escape"):
               scrennLcd.innerText = 0
            console.log("Reset", e.key)
           
              isReset=true;
              lastNumber=0;
              res=[0];
                calc=[];
                nums=[];
                isOp=false;

        break;
        
        default:
             console.log(`other invalid or shift touch ${ e.key} , code : ${e.keyCode}`);
   
            break;
    }
    scrennLcd.innerText = detectFirstNumberZero(scrennLcd.innerText);
}




/*** detect null before display */
const detectFirstNumberZero = (str)=>{
     if (str.length==2 && str[0]=="0" ){
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





const  calculer= (operateur, ...nombres) =>{
  let resultat = 0;
  if (operateur === '+') {
    for (let i = 0; i < nombres.length; i++) {
      resultat += nombres[i];
    }
  }
  if (operateur === '-') {
    for (let i = 0; i < nombres.length; i++) {
      resultat -= nombres[i];
    }
  }
//   console.log(resultat);
}

// calculer('+', 42, 22, 12, 23); // 99