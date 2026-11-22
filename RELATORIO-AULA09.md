# Relatório de entrega — Aula 09

## Projeto

**Tela Extra — Jogos para explorar** é uma aplicação React responsiva sobre jogos. A atividade foi desenvolvida na estrutura existente, preservando o tema visual, as páginas dos jogos e as integrações que já faziam parte do projeto.

## O que foi implementado

- **Estado com `useState`:** controla filtros e pesquisa do catálogo, jogos salvos na sessão, campos do formulário, recomendações do mural e estados da consulta à API.
- **Formulários e validação:** o mural usa campos controlados, valida os dados antes do envio, exibe mensagens na própria página e limpa o formulário após o envio bem-sucedido.
- **`useEffect`:** carrega os resumos da Wikipedia na página `/api` e as recomendações salvas na página `/comunidade`.
- **Consumo de APIs:** a aplicação consulta informações dos jogos na Wikipedia e usa o Supabase para manter o mural compartilhado entre visitantes.
- **React Router:** as páginas internas são acessadas sem recarregar o documento; páginas de jogo usam rotas com identificador.
- **Experiência de uso:** o catálogo tem filtros, cards e páginas individuais dos jogos; as telas de API e comunidade apresentam estados de carregamento, erro e ausência de dados.

## Páginas

- `/` — página inicial e destaques.
- `/jogos` — catálogo, pesquisa, filtros e lista de jogos salvos.
- `/jogos/:id` — detalhes do jogo selecionado.
- `/comunidade` — mural público de recomendações.
- `/api` — resumos dos jogos consultados na Wikipedia.

## APIs e persistência

### Wikipedia

A página `/api` faz uma requisição `GET` para `https://pt.wikipedia.org/w/api.php` e apresenta resumos em português dos jogos. A interface trata carregamento, erros HTTP/rede e ausência de resultados, e mostra links para as fontes. Não é necessária uma chave de API.

### Supabase

O mural usa a tabela `game_suggestions`, criada pelo script [`supabase/schema.sql`](./supabase/schema.sql):

- `GET /rest/v1/game_suggestions` — lista recomendações em ordem de criação.
- `POST /rest/v1/game_suggestions` — salva uma recomendação com jogo e justificativa.

As políticas de Row Level Security (RLS) permitem leitura e inserção anônimas, validam os tamanhos dos campos e não concedem edição ou exclusão. O mural é público; não há autenticação, moderação ou proteção contra spam.

## Configuração e segurança

Para executar o mural localmente, crie um projeto Supabase, aplique `supabase/schema.sql` pelo SQL Editor e configure as variáveis locais com base no arquivo `.env.example`:

```env
VITE_SUPABASE_URL=https://SEU-PROJETO.supabase.co
VITE_SUPABASE_ANON_KEY=SUA_CHAVE_PUBLICAVEL
```

No PowerShell, copie o exemplo para `.env.local` com `Copy-Item .env.example .env.local`. Preencha os valores no arquivo local, que não deve ser enviado ao GitHub.

Na publicação, as mesmas variáveis estão configuradas na Vercel para Production. Durante a verificação, a chave anteriormente configurada foi identificada como uma chave secreta, inadequada para uso no navegador. Ela foi substituída pela chave Publishable e a chave secreta antiga foi revogada no Supabase. Nenhum valor de chave deve ser incluído neste documento, no código ou em arquivos versionados.

## Como executar

Requer Node.js LTS e npm:

```bash
npm install
npm run dev
```

Para validar a versão de produção localmente:

```bash
npm run build
npm run preview
```

## Repositório e publicação

- Repositório GitHub: <https://github.com/vfazano/aula09-react-api-router>
- Aplicação publicada: <https://aula09-react-api-router.vercel.app/>
- Mural: <https://aula09-react-api-router.vercel.app/comunidade>

O projeto está na branch `main`. O build da Vercel usa `npm run build`, gera a pasta `dist` e publica a aplicação a partir da raiz deste repositório.

## Verificações realizadas

- O comando `npm run build` passou durante a implementação.
- Foram verificados o carregamento e a exibição de dados da API, o envio com mocks e o comportamento sem configuração local do Supabase.
- Após a configuração da chave Publishable, o deploy de produção ficou **Ready** e a página `/comunidade` foi aberta sem erro de autorização. O mural mostrou o estado vazio esperado.
- Nenhuma recomendação de teste foi gravada no banco real.
