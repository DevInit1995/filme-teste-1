import { Componente } from "./componentes/retorna_string.js";

document.getElementById("content").innerHTML = `<h1>Projeto Filmes ${Componente.mostra("teste")}</h1>`