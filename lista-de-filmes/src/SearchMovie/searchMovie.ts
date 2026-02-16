import { API_TOKEN } from "../api/movies_api";
import type { filmes, MoviesResponse } from "../types/Movie";
import { renderizarFilmes } from "../ui/movies_render";

export async function searchMovie(termo?:string): Promise<filmes[]>{
    try{
        const url = termo && termo.trim() !== ""
        ? `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(termo)}&language=pt-BR`
        : `https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1`;
        
        const response = await fetch(url, {
        headers: {
                Authorization: `Bearer ${API_TOKEN}`,
                "Content-Type": "application/json;charset=utf-8",
            },
        });

        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        const data: MoviesResponse = await response.json();
        return data.results;
    }catch(err){
        console.error("Erro na busca de filmes");
        return [];
    }
}

export async function buscar(){
    const input = document.querySelector(".search-input") as HTMLInputElement;
    const termo = input?.value.trim();

    if(!termo) return;

    const filmes: filmes[] = await searchMovie(termo);

    const filmesFiltrados = filmes.filter((f) => {
        return f.original_title.toLowerCase().includes(termo.toLocaleLowerCase());
    })
    
    renderizarFilmes(filmesFiltrados);
}
