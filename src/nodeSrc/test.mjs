export const  oneToTen = () => {
    return  Math.ceil(Math.random() * 10);
}
import {addPreZero, charactor} from "./util.mjs";
import random from "random";
console.log(oneToTen())
console.log(Math.ceil(0.01))
console.log(addPreZero(2))
function forTest(){
    for (let i = 1; i < 10; i++) {
        console.log(i)
    }
}


console.log(random.int(0,2) )
