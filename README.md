# Tela Extra — Aula 09

Landing page/catálogo responsivo de jogos, desenvolvido com React para demonstrar os conceitos da Aula 09: estado, formulários, efeitos, consumo de API e navegação por rotas.

## Executar localmente

Requer Node.js LTS e npm.

```bash
npm install
npm run dev
```

Para habilitar o mural compartilhado, crie um projeto no Supabase, execute `supabase/schema.sql` pelo SQL Editor e copie `.env.example` para `.env.local`. Preencha `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY` com a URL e a chave publicável (anon) do projeto. Nunca use a chave `service_role` no navegador nem a publique no GitHub.

Abra no navegador o endereço local informado pelo Vite. Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Páginas

- `/`: landing page com destaques da seleção e créditos.
- `/jogos`: catálogo com filtros por gênero, fotos e botões para adicionar/remover jogos da lista da sessão.
- `/jogos/:id`: página individual de cada jogo, com apresentação, lembrança pessoal e galeria quando há imagens disponíveis.
- `/comunidade`: mural público e compartilhado de recomendações, persistido no Supabase, com formulário controlado e validação.
- `/api`: consulta a API da Wikipedia em português para mostrar resumos dos cinco jogos, com estados de carregamento, erro e lista vazia e links para as fontes.

## Conceitos da aula

- **JSX e componentes:** `Layout`, `GameCard`, `GameGrid` e componentes de página compõem a interface.
- **Props e reutilização:** `GameGrid` e `GameCard` recebem os dados e os eventos por props.
- **State / `useState`:** filtros, lista de jogos salvos, campos do formulário, sugestões e respostas da API atualizam a interface.
- **Formulário e validação:** nome do jogo e recomendação são validados no cliente e no banco antes de serem publicados no mural compartilhado.
- **`useEffect`:** busca dados na Wikipedia ao abrir `/api` e carrega as recomendações do Supabase em `/comunidade`.
- **API:** a página `/api` consulta a API pública da Wikipedia (`GET https://pt.wikipedia.org/w/api.php`) para obter informações relacionadas aos jogos. Não é necessária chave de API; falhas HTTP, carregamento e lista vazia são tratados na interface.
- **Supabase:** o mural lê e grava as recomendações em `game_suggestions`; as políticas RLS permitem leitura e envio anônimos, limitam os campos e não concedem permissões de edição ou exclusão.
- **React Router:** `BrowserRouter`, `Routes`, `Route`, `Link` e `NavLink` permitem navegação pelas URLs da aplicação.
- **Páginas dos jogos:** os cards abrem páginas individuais; as imagens são importadas das pastas locais de cada jogo e não alteram a integração com a API.
- **Listas e keys:** jogos, filtros, recomendações e resumos externos são renderizados com `map()` e IDs estáveis.
- **Renderização condicional:** estados da API, mural vazio, filtros e jogos salvos apresentam conteúdos diferentes conforme o estado.

As recomendações são públicas e podem ser enviadas por qualquer visitante. O exemplo limita o tamanho dos campos e não coleta dados pessoais, mas não inclui autenticação nem proteção contra spam; para uso amplo, adicione moderação e limitação de envios.

## Créditos e direitos

Os nomes dos jogos e franquias pertencem aos respectivos titulares: Rockstar Games (Grand Theft Auto), Sony Interactive Entertainment (God of War), CD PROJEKT (The Witcher), Activision (Guitar Hero) e Ubisoft (Assassin's Creed). Este é um projeto acadêmico independente, sem afiliação ou endosso. As imagens dos jogos são arquivos locais fornecidos para este projeto.

Os resumos da página de integração são obtidos da Wikipedia em português: <https://pt.wikipedia.org/>.

## Configuração da Vercel

Adicione `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY` nas variáveis de ambiente de produção da Vercel e faça um novo deploy. Use somente a chave **Publishable** (ou anon, em projetos com chaves legadas). Nunca use `secret` ou `service_role` em variáveis `VITE_`: valores com esse prefixo são incluídos no JavaScript enviado ao navegador.

As variáveis de produção já estão configuradas para o mural compartilhado. Sem essas variáveis, o mural informa que ainda não está configurado e o formulário fica desabilitado.

## Repositório e publicação

- GitHub: <https://github.com/vfazano/aula09-react-api-router>
- Aplicação: <https://aula09-react-api-router.vercel.app/>
- Mural: <https://aula09-react-api-router.vercel.app/comunidade>

O repositório já está conectado à Vercel; alterações enviadas à branch `main` podem gerar um novo deploy. Como este repositório contém somente a Aula 09, use a raiz (`.`) como **Root Directory**. O comando de build é `npm run build`, a pasta de saída é `dist` e `vercel.json` encaminha as URLs do React Router para a aplicação.

Veja também o [relatório de entrega da Aula 09](./RELATORIO-AULA09.md), com o resumo das funcionalidades, integrações e validações.
