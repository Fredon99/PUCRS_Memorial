const somaHoraExtra = (salario, qtdHoras) => {
    const salarioTotal = salario + (((salario/30)/8) * qtdHoras);

    return salarioTotal;
};

console.log(somaHoraExtra(3200, 10));