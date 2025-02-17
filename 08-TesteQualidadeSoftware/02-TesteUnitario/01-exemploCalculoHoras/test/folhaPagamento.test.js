import { somaHorasExtras, calculaDescontos } from "../index.js";


describe("Testes da folha de pagamento", () => {
    test("Deve retornar o valor de horas extras", () => {
        const esperado = 2500;
        const retornado = somaHorasExtras(2000,500);
        expect(retornado).toBe(esperado);
    });
    
    
    test("Deve retornar o valor de descontos", () => {
        const esperado = 2200;
        const retornado = calculaDescontos(2500,300);
        expect(retornado).toBe(esperado);
    });
});

