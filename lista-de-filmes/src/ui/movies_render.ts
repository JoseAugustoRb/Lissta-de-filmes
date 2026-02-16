import type { filmes } from "../types/Movie";

export function renderizarFilmes(filmes: filmes[]) {
  const container = document.querySelector("#movies-row");
  if (!container) return;

  container.innerHTML = "";

  filmes.forEach(movie => {
    container.innerHTML += `
      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card movie-card h-100">

          <img 
            class="card-img-top"
            src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
            alt="${movie.original_title}"
          >

          <div class="card-body d-flex flex-column">
            <h6 class="card-title">${movie.original_title}</h6>

            <div class="mt-auto d-flex justify-content-between align-items-center">
              <span class="rating">⭐ ${movie.vote_average}</span>
              <small class="text-secondary">${movie.release_date}</small>
            </div>
          </div>

        </div>
      </div>
    `;
  });
}
