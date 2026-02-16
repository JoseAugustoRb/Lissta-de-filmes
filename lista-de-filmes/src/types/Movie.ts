export interface filmes {
    id: number,
    original_title:string,
    vote_average: number,
    poster_path: string,
    adult: boolean,
    release_date: string,
    video: boolean
}

export interface MoviesResponse {
  results: filmes[]
}