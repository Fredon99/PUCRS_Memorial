export const add = (a,b) => a + b;

export const sub = (a,b) => a - b;

export const mul = (a,b) => a * b;

export const div = (a,b) => {
    if (b === 0) {
        return "Não é possível fazer divisão por zero."
    }
    
    return (a / b).toFixed(2);
}

export const bhaskara = (a,b,c) => {
    
    const delta = b**2 - 4*a*c;
    
    if (delta < 0) {
        return "A equação não possui raízes reais";
      } else if (delta === 0) {
        const root = -b / (2 * a);
        return `A equação possui uma raiz real: ${root}`;
      } else {
        const root1 = (-b + Math.sqrt(delta)) / (2 * a);
        const root2 = (-b - Math.sqrt(delta)) / (2 * a);
        return `A equação possui duas raízes reais: ${root1.toFixed(2)} e ${root2.toFixed(2)}`;
      }
}

export const factorial = (a) => {
    if (a === 1 || a === 0){
        return 1
    }

    return a * factorial(a - 1);
}