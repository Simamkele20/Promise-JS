
let myPromise= new Promise((resolve, reject) =>{
    let Numb1 = +prompt("Please enter a Number");
    let Numb2 = +prompt("Please enter a Number");
    // For division
    if(typeof Numb1 == "number" )  (typeof Numb2 == "number") 
        resolve(`${Numb1} + ${Numb2} = ${Numb1 + Numb2}`) 
        reject(` both, or either ${Numb1} or ${Numb2} (is or are) not number(s).`)
})
 
myPromise.then(
    (correct)=> {
        console.log(correct);
    },
    (denied)=> {
        console.log(denied);
    }
    )