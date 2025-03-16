import app from '../../app.js';
import request from 'supertest';
import { describe, expect, test, jest } from '@jest/globals';

let server;
beforeEach( () => {
    let port = 3013;
    server = app.listen(port);
});


afterEach(() => {
    server.close();
});

describe("GET em /editoras", () => {
    test("Deve retornar uma lista de editoras", async () => {
        const resposta = await request(app)
            .get('/editoras')
            .set('Accept', 'application/json')
            .expect('content-type', /json/)
            .expect(200);

        expect(resposta.body[0].email).toEqual('e@e.com');
    });
});

let idResposta;
describe("POST em /editoras", () => {
    test("Deve adicionar uma nova editora", async () => {
        const resposta = await request(app)
            .post('/editoras')
            .send({
                nome: "Cambridge Editor",
                cidade: "Cambridge",
                email: "a@a.com"
            })
            .expect(201);

        idResposta = resposta.body.content.id;
    });

    test("Não deve adicionar nada ao passar o body vazio", async () => {
        await request(app)
            .post('/editoras')
            .send({})
            .expect(400);
    })
});

describe("GET em /editoras/id", () => {
    test("Deve retornar recurso selecionado", async () => {
        await request(app)
            .get(`/editoras/${idResposta}`)
            .expect(200);
    });
});

//realiza o teste para cada um dos elementos do array
describe("PUT em /editoras/id", () => {
    test.each([
        ['nome', {nome: 'Casa do Codigo'}],
        ['cidade',{cidade: 'Belo Horizonte'}],
        ['email',{email: 'd@d.com'}]
    ])("Deve alterar o campo %s", async (chave, param) => {
        
        const requisicao = { request };
        const spy = jest.spyOn(requisicao, 'request');

        await requisicao.request(app)
            .put(`/editoras/${idResposta}`)
            .send(param)
            .expect(204);

            expect(spy).toHaveBeenCalled();
    })
})

describe("DELETE em /editoras/id", () => {
    test("Delecao do recurso adicionado no teste anterior", async () => {
        await request(app)
            .delete(`/editoras/${idResposta}`)
            .expect(200);
    });
});







