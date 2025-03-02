import Carrinho from "../carrinho.js";
import Item from "../item.js";

describe("Teste carrinho de compras", () => {
    test("Deve inicializar vazio", () => {
        const carrinho = new Carrinho();
        expect(carrinho.subtotal).toBeNull();
    });

    test("Deve conter um determinada propriedade", () => {
        const carrinho = new Carrinho();
        expect(carrinho).toHaveProperty('total');
    })

    test("Deve conter itens", () => {
        const item1 = new Item('celular', 1500, 1);
        const item2 = new Item('mexerica', 0.5, 5);
        const carrinho = new Carrinho();

        carrinho.adiciona(item1);
        carrinho.adiciona(item2);

        expect(carrinho.itens[0]).toBe(item1);
        expect(carrinho.itens[1]).toBe(item2);

        expect(carrinho.itens).toContain(item1);
    });

    test("Deve lançar erro ao finalizar compra com carrinho vazio", () => {

        function capturaErro() {
            const carrinhoVazio = new Carrinho();
            carrinhoVazio.finalizaCompra();
        };

        expect(capturaErro).toThrowError('Carrinho de compras vazio');
    });

    test("Deve adicionar o frete", () => {
        const carrinho = new Carrinho();
        carrinho.adicionaFrete(10)
        expect(carrinho.frete).toBe(10);
    });

    test("Deve finalizar as compras", () => {
        const item1 = new Item('celular', 1500, 1);
        const item2 = new Item('mexerica', 0.5, 5);
        const carrinho = new Carrinho();

        carrinho.adiciona(item1);
        carrinho.adiciona(item2);
        carrinho.adicionaFrete(5);

        expect(carrinho.finalizaCompra()).toStrictEqual({
            subtotal:1502.5,
            total: 1507.5,
            frete: 5
        });

    })
})