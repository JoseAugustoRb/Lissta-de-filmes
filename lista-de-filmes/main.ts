import { buscarFilmes} from "./src/api/movies_api";
import { renderizarFilmes } from "./src/ui/movies_render";
import { buscar } from "./src/SearchMovie/searchMovie";

async function init() {
    const filmes = await buscarFilmes();
    renderizarFilmes(filmes);
    const input = document.querySelector(".search-input") as HTMLInputElement;
    input?.addEventListener("input", buscar);
}

init()