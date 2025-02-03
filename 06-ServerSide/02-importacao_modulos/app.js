
import { add, sub, mul, div, bhaskara, factorial } from "./calculos.js";

const addResult = add(5,3);
const subResult = sub(5,3);
const mulResult = mul(5,3);
const divResult = div(5,3);
const bhaskResult = bhaskara(1,2,-1);
const facResult = factorial(5);

console.log("Resultado adição:",addResult)
console.log("Resultado subtração:",subResult)
console.log("Resultado multiplicação:",mulResult)
console.log("Resultado divisão:",divResult)
console.log("Resultado bhaskara:",bhaskResult)
console.log("Resultado factorial:",facResult)