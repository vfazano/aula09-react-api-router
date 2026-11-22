# Tela Extra — Aula 09

Landing page/catálogo responsivo de jogos, desenvolvido com React para demonstrar os conceitos da Aula 09: estado, formulários, efeitos, consumo de API e navegação por rotas.

## Executar localmente

Requer Node.js LTS e npm.

```bash
npm install
npm run dev
```

Abra no navegador o endereço local informado pelo Vite. Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Páginas

- `/`: landing page com destaques da seleção e créditos.
- `/jogos`: catálogo com filtros por gênero, fotos e botões para adicionar/remover jogos da lista da sessão.
- `/jogos/:id`: página individual de cada jogo, com apresentação, lembrança pessoal e galeria quando há imagens disponíveis.
- `/comunidade`: formulário controlado para recomendações, com validação e estado local.
- `/api`: consulta a API da Wikipedia em português para mostrar resumos dos cinco jogos, com estados de carregamento, erro e lista vazia e links para as fontes.

## Conceitos da aula

- **JSX e componentes:** `Layout`, `GameCard`, `GameGrid` e componentes de página compõem a interface.
- **Props e reutilização:** `GameGrid` e `GameCard` recebem os dados e os eventos por props.
- **State / `useState`:** filtros, lista de jogos salvos, campos do formulário, sugestões e respostas da API atualizam a interface.
- **Formulário e validação:** nome do jogo e recomendação são validados antes de aparecerem no mural da sessão.
- **`useEffect`:** busca dados da API ao abrir `/api` e cancela a requisição se a página for desmontada.
- **API:** a página `/api` consulta a API pública da Wikipedia (`GET https://pt.wikipedia.org/w/api.php`) para obter informações relacionadas aos jogos. Não é necessária chave de API; falhas HTTP, carregamento e lista vazia são tratados na interface.
- **React Router:** `BrowserRouter`, `Routes`, `Route`, `Link` e `NavLink` permitem navegação pelas URLs da aplicação.
- **Páginas dos jogos:** os cards abrem páginas individuais; as imagens são importadas das pastas locais de cada jogo e não alteram a integração com a API.
- **Listas e keys:** jogos, filtros, recomendações e resumos externos são renderizados com `map()` e IDs estáveis.
- **Renderização condicional:** estados da API, mural vazio, filtros e jogos salvos apresentam conteúdos diferentes conforme o estado.

## Créditos e direitos

Os nomes dos jogos e franquias pertencem aos respectivos titulares: Rockstar Games (Grand Theft Auto), Sony Interactive Entertainment (God of War), CD PROJEKT (The Witcher), Activision (Guitar Hero) e Ubisoft (Assassin's Creed). Este é um projeto acadêmico independente, sem afiliação ou endosso. As imagens dos jogos são arquivos locais fornecidos para este projeto.

Os resumos da página de integração são obtidos da Wikipedia em português: <https://pt.wikipedia.org/>.

## Publicar no GitHub e na Vercel

Crie um repositório público para esta pasta e envie os arquivos:

```bash
git init
git add .
git commit -m "Cria landing page de jogos para a Aula 09"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git push -u origin main
```

Na Vercel, importe o repositório e configure `aula09-react-api-router` como **Root Directory** se estiver publicando a partir do repositório principal com várias aulas. O comando de build é `npm run build` e a pasta de saída é `dist`. O arquivo `vercel.json` encaminha URLs das páginas React Router para a aplicação. Não há URL de repositório ou deploy preenchida, pois essas ações dependem da sua conta.
