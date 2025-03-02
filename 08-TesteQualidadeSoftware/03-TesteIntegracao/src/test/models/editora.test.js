import { describe, expect, test, jest } from "@jest/globals";
import Editora from "../../models/editora.js";

describe("Testando modelo Editora", () => {

    const objetoEditora = {
        nome: "Cambridge Editor",
        cidade: "Cambridge",
        email: "a@a.com"
    };

    test('Deve instanciar uma nova editora', () => {
        const editora = new Editora(objetoEditora);

        expect(editora).toEqual(
            expect.objectContaining(objetoEditora),
        );
    });

    test.skip('Deve salvar editora no DB', ()=> {
        const editora = new Editora(objetoEditora);

        editora.salvar().then((dados) => {
            expect(dados.nome).toBe("Cambridge Editor");
        });
    });

    test.skip("Deve salvar no DB com sintaxe moderna", async () => {
        const editora = new Editora(objetoEditora);

        const dados = await editora.salvar();
        const retornado = await Editora.pegarPeloId(dados.id);

        expect(retornado).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                ...objetoEditora,
                created_at: expect.any(String),
                updated_at: expect.any(String),
            })
        );
    });

    test("Chamada simulada ao DB", () => {
        const editora = new Editora(objetoEditora);
        
        editora.salvar = jest.fn().mockReturnValue({
            id: 10,
            nome: "Cambridge Editor",
            cidade: "Cambridge",
            email: "a@a.com",
            created_at: "2025-02-25",
            updated_at: "2025-02-27",
        });

        const retornado = editora.salvar();

        expect(retornado).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                ...objetoEditora,
                created_at: expect.any(String),
                updated_at: expect.any(String),
            })
        );
    });
});