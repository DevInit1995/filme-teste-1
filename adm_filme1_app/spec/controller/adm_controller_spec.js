const axios = require("axios");
const host = "http://localhost:3000";

describe("AdmController", () => {
    describe("GET /adm.json - deve retornar uma lista de administradores", () => {
        it("deve retornar o status code 200", (done) => {
            let options = {
                method: "GET",
                url: `${host}/adm.json`
            }

            axios(options).then((response) => {
                console.log("==========================");
                expect(response.status).toBe(200);
                console.log(response.status);
                console.log("==========================");
            })
            .catch((err) => {
                throw err.message;
            });
            done();
        });

        it("Deve retornar os dados da API", (done) => {
            let options = {
                method: "GET",
                url: `${host}/adm.json`
            };

            axios(options).then(response => {
                itens = JSON.parse(response.body);
                expect(itens[0].id).toBe(1);
                expect(itens[1].id).toBe(2);
            })
            .catch((err) => {
                throw err.message;
            });
            done();
        });
    });
});