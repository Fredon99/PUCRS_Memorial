import Item from "../item.js";

describe("Teste de itens", () => {
    test("Deve possuir 3 campos - nome, valor e quantidade", () => {
        const item = new Item('Fruta', 5, 2.5);
        
        expect(item.nome).toBe('Fruta');
        expect(item.valor).toBe(5);
        expect(item.quantidade).toBe(2.5);
    });

    test("Deve possuir o subtotal daquele item", () => {
        const item = new Item('Fruta', 5, 2.5);

        expect(item.pegaValorTotalItem()).toBeCloseTo(12.5);
    });
});