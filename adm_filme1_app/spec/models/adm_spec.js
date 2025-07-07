const Adm = require('../../app/models/adm');

describe("Modelos de Adms", () => {
    describe('Testes para o objeto Adm', () => {
        it('Deve retornar o modelo de Adm', () => {
            let adm = Adm;

            expect(adm).not.toBeUndefined();
            expect(adm.acao()).not.toBeUndefined();
            expect(adm.comedia()).not.toBeUndefined();
            expect(adm.terror()).not.toBeUndefined();
        });

        it("Deve retornar 3 filmes de ação", () => {
            const filmes = Adm.acao();
            expect(filmes.length).toBe(3);
        });

        it("O primeiro filme de ação deve ser 'O resgate do soldado Ryan'", () => {
            const filmes = Adm.acao();
            expect(filmes[0].titulo).toBe("O resgate do soldado Ryan");
        });

        it("Deve retornar 3 filmes de terror com classificação '+16'", () => {
            const filmes = Adm.terror();
            filmes.forEach(filme => {
                expect(filme.classificacao).toBe("+16");
            });
        });

        it("Deve retornar 3 filmes de comédia e o segundo deve ser 'Os trapalhões'", () =>{
            const filmes = Adm.comedia();
            expect(filmes.length).toBe(3);
            expect(filmes[1].titulo).toBe("Os trapalhões");
        });
    });
});

