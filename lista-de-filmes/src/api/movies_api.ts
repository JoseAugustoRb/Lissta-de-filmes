import type { filmes , MoviesResponse} from "../types/Movie";

export const API_TOKEN = import.meta.env.VITE_API_TOKEN;

export async function buscarFilmes(): Promise<filmes[]> {
  try{
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1" , {
      headers: {
        "Authorization": `Bearer ${API_TOKEN}`,
        "Content-type": "application/json;charset=utf-8",
      }
    });

    if(!response.ok){
      throw new Error(`Erro: ${response.status} ${response.statusText}`);
    }

    const data: MoviesResponse = await response.json();
    return data.results;
  }catch(err){
    console.error("Falha ao buscar filmes:",err);
    return [];
  }
}