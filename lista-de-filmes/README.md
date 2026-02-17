🎬 Movies App

Aplicação web para listar filmes populares e realizar buscas utilizando a API do TMDB (The Movie Database).
Projeto desenvolvido com foco em boas práticas de front-end, consumo de API REST e organização de código.

🚀 Tecnologias utilizadas

TypeScript
JavaScript (ES6+)
HTML5
CSS3
Fetch API
TMDB API

📌 Funcionalidades

✅ Listagem de filmes populares

🔍 Busca de filmes por título

🌍 Suporte a idioma (pt-BR)

⚠️ Tratamento de erros de requisição

🔐 Uso de variáveis de ambiente para segurança do token

🔑 Configuração da API (TMDB)

Crie uma conta em https://www.themoviedb.org/

Acesse Settings → API

Copie o Read Access Token (v4 auth)

Crie um arquivo .env na raiz do projeto:

VITE_TMDB_TOKEN=SEU_TOKEN_AQUI


⚠️ O arquivo .env não deve ser versionado.
Utilize o arquivo .env.example como referência.

▶️ Como rodar o projeto
# Instalar dependências
npm install

# Rodar em ambiente de desenvolvimento
npm run dev


A aplicação ficará disponível em:

http://localhost:5173

🛡️ Boas práticas adotadas

Uso de .gitignore para evitar versionamento de arquivos sensíveis

Separação de responsabilidades (API, lógica e tipos)

Tipagem com TypeScript

Tratamento de erros HTTP

📌 Possíveis melhorias futuras

Paginação de resultados

Página de detalhes do filme

Loading states e skeletons

Testes automatizados

Deploy em Vercel ou Netlify

👨‍💻 Autor

José Augusto Ribeiro Bascherotto
Estudante de Engenharia de Software
Foco em Back-end, APIs e boas práticas de desenvolvimento