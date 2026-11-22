import { useEffect, useState } from 'react';
import { Link, NavLink, Route, Routes, useParams } from 'react-router-dom';
import gtaCard from '../Img GTA VI/Grand Theft Auto VI img card.avif';
import gtaBackdrop from '../Img GTA VI/Grand Theft Auto VI img fundo.avif';
import gtaGame from '../Img GTA VI/Grand Theft Auto VI img game.jpg';
import godOfWarCard from '../Img God of War Trilogia/Gof-of-War-Trilogy  god of war 3.jpg';
import godOfWarBackdrop from '../Img God of War Trilogia/Gof-of-War-Trilogy  img fundo.jpg';
import godOfWarFight from '../Img God of War Trilogia/Gof-of-War-Trilogy  luta mais top.jpg';
import witcherCard from '../Img The Witcher 3 wild hunt/The Wither 3 img principal cartaz.avif';
import witcherBackdrop from '../Img The Witcher 3 wild hunt/The Witcher 3 wild hunt img de fundo.jpg';
import witcherCharacter from '../Img The Witcher 3 wild hunt/The Witcher 3 wild hunt personagem principal.jpg';
import witcherMap from '../Img The Witcher 3 wild hunt/The Witcher 3 wild hunt mapa do game.jpg';
import guitarHeroCard from '../img guitar hero/guitar hero warriors of rock game play.jpg';
import assassinCard from "../img assassin's creed black/assassin's creed black foto catalogo.jpg";
import assassinBackdrop from "../img assassin's creed black/assassins-creed-black-flag-img fundo.avif";
import assassinSailing from "../img assassin's creed black/assassin's creed black foto fundo 2.jpg";

const games = [
  {
    id: 'gta-vi',
    number: '01',
    title: 'Grand Theft Auto VI',
    shortTitle: 'GTA VI',
    category: 'Aventura · Mundo aberto',
    description: 'Uma nova viagem por Vice City e pelo estado de Leonida.',
    theme: 'vice',
    label: 'MUNDO ABERTO',
    cover: gtaCard,
    story: 'Grand Theft Auto VI leva a série de volta a Vice City, em uma aventura de mundo aberto ambientada no estado fictício de Leonida. A cidade, seus arredores e os personagens formam o cenário para explorar e acompanhar uma nova história.',
    memory: 'Este é o único jogo desta seleção que não marcou a minha infância: chegou muito tempo depois. Ainda assim, é um lançamento que quero jogar e estou animado para conhecer esse novo mundo.',
    gallery: [
      { src: gtaBackdrop, alt: 'Imagem de fundo de Grand Theft Auto VI' },
      { src: gtaGame, alt: 'Imagem de Grand Theft Auto VI' },
    ],
  },
  {
    id: 'god-of-war',
    number: '02',
    title: 'God of War — Trilogia',
    shortTitle: 'God of War',
    category: 'Ação · Mitologia',
    description: 'Uma jornada intensa entre deuses, escolhas e legado.',
    theme: 'ashes',
    label: 'AÇÃO ÉPICA',
    cover: godOfWarCard,
    story: 'A trilogia clássica acompanha Kratos em uma jornada de vingança e confrontos grandiosos com figuras da mitologia grega. Combates intensos e uma narrativa marcada por escolhas e consequências fazem parte dessa aventura.',
    memory: 'God of War fez parte da minha infância e ficou entre os jogos que mais me marcaram. Passei muitas horas acompanhando a jornada de Kratos e enfrentando os desafios desse universo.',
    gallery: [
      { src: godOfWarBackdrop, alt: 'Kratos diante de um cenário da mitologia grega' },
      { src: godOfWarFight, alt: 'Cena de combate de God of War' },
    ],
  },
  {
    id: 'the-witcher',
    number: '03',
    title: 'The Witcher 3: Wild Hunt',
    shortTitle: 'The Witcher 3',
    category: 'RPG · Fantasia',
    description: 'Geralt enfrenta monstros e escolhas em uma aventura de fantasia.',
    theme: 'wild',
    label: 'RPG',
    cover: witcherCard,
    story: 'Em The Witcher 3: Wild Hunt, Geralt de Rívia é um bruxo que percorre um mundo de fantasia enfrentando monstros e seguindo pistas em uma busca pessoal. Contratos, personagens e decisões ajudam a construir uma aventura extensa.',
    memory: 'The Witcher 3 também marcou a minha infância. Passei muitas horas explorando esse mundo de fantasia e acompanhando as aventuras de Geralt.',
    gallery: [
      { src: witcherBackdrop, alt: 'Personagens de The Witcher 3 em uma paisagem' },
      { src: witcherCharacter, alt: 'Personagem de The Witcher 3' },
      { src: witcherMap, alt: 'Mapa do mundo de The Witcher 3' },
    ],
  },
  {
    id: 'guitar-hero',
    number: '04',
    title: 'Guitar Hero: Warriors of Rock',
    shortTitle: 'Guitar Hero',
    category: 'Ritmo · Música',
    description: 'Suba ao palco, acompanhe o ritmo e faça o seu show.',
    theme: 'neon',
    label: 'NO RITMO',
    cover: guitarHeroCard,
    story: 'Guitar Hero: Warriors of Rock transforma músicas em desafios de ritmo: acompanhe as notas na tela e toque junto usando o controle em formato de guitarra. É uma experiência feita para entrar no clima do palco e tentar melhorar a cada música.',
    memory: 'Guitar Hero marcou a minha infância de um jeito especial. Joguei muitas horas tentando acompanhar as músicas e curtindo a sensação de estar no palco.',
    gallery: [],
  },
  {
    id: 'assassins-creed-black-flag',
    number: '05',
    title: "Assassin's Creed IV: Black Flag",
    shortTitle: 'Black Flag',
    category: 'Ação · Aventura',
    description: 'Uma aventura de piratas, exploração e batalhas navais.',
    theme: 'ocean',
    label: 'AVENTURA',
    cover: assassinCard,
    story: "Em Assassin's Creed IV: Black Flag, Edward Kenway se aventura pelo Caribe em uma história de piratas, exploração e conflitos entre Assassinos e Templários. Navegar, descobrir ilhas e participar de batalhas navais fazem parte da jornada.",
    memory: "Assassin's Creed IV: Black Flag também marcou a minha infância. Passei muitas horas explorando o mar e vivendo essa aventura de piratas.",
    gallery: [
      { src: assassinBackdrop, alt: 'Imagem de Assassin’s Creed IV: Black Flag' },
      { src: assassinSailing, alt: 'Cena de navegação de Assassin’s Creed IV: Black Flag' },
    ],
  },
];

function Layout({ children }) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <Link to="/" className="wordmark" aria-label="Tela Extra, início">
          <span className="brand-mark">TX</span>
          <span>TELA EXTRA</span>
        </Link>
        <nav aria-label="Navegação principal">
          <NavLink to="/" end>Início</NavLink>
          <NavLink to="/jogos">Jogos</NavLink>
          <NavLink to="/comunidade">Comunidade</NavLink>
          <NavLink to="/api">API</NavLink>
        </nav>
        <Link className="header-cta" to="/jogos">Explorar <span>↘</span></Link>
      </header>
      {children}
      <footer className="site-footer">
        <Link to="/" className="footer-brand">TELA EXTRA <span>© 2026</span></Link>
        <p>Projeto acadêmico independente. Não afiliado às marcas citadas.</p>
        <a href="/#creditos">Créditos e direitos <span>↗</span></a>
      </footer>
    </div>
  );
}

function GameCard({ game, saved, onToggleSave }) {
  return (
    <article className={`game-card art-${game.theme}`}>
      <Link className="game-art" to={`/jogos/${game.id}`} aria-label={`Conheça ${game.title}`}>
        <img src={game.cover} alt="" loading="lazy" />
        <span className="art-index">{game.number} / SELEÇÃO</span>
        <span className="art-monogram">{game.shortTitle}</span>
        <span className="art-label">{game.label}</span>
      </Link>
      <div className="game-card-body">
        <div className="game-meta"><span>{game.category}</span><span>PLAYSTATION</span></div>
        <h3>{game.title}</h3>
        <p>{game.description}</p>
        <Link className="game-detail-link" to={`/jogos/${game.id}`}>Conhecer a história <span>↗</span></Link>
        <button
          className={`save-button${saved ? ' is-saved' : ''}`}
          type="button"
          onClick={() => onToggleSave(game.id)}
          aria-pressed={saved}
        >
          {saved ? '✓ Na sua lista' : '＋ Quero jogar'}
        </button>
      </div>
    </article>
  );
}

function GameGrid({ savedGames, onToggleSave, items = games }) {
  return (
    <div className="game-grid">
      {items.map((game) => (
        <GameCard
          key={game.id}
          game={game}
          saved={savedGames.includes(game.id)}
          onToggleSave={onToggleSave}
        />
      ))}
    </div>
  );
}

function HomePage({ savedGames, onToggleSave }) {
  return (
    <Layout>
      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow"><span className="live-dot" /> SEU PRÓXIMO UNIVERSO COMEÇA AQUI</p>
            <h1>Mais um jogo.<br /><span>Outra vida.</span></h1>
            <p className="hero-description">
              Aventuras grandiosas, mundos para explorar e histórias que ficam com você.
              Escolha seu próximo destino.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/jogos">Ver a seleção <span>↗</span></Link>
              <a className="text-link" href="#colecao">Descer para explorar <span>↓</span></a>
            </div>
            <div className="hero-note"><span>05</span> universos em destaque <i /> uma coleção feita para explorar</div>
          </div>
          <div className="hero-art" role="img" aria-label="Arte abstrata original em tons de vermelho e violeta">
            <div className="hero-sun" />
            <div className="hero-ring ring-a" />
            <div className="hero-ring ring-b" />
            <div className="hero-shape shape-left" />
            <div className="hero-shape shape-right" />
            <span className="hero-art-tag">PLAY / DISCOVER / REPEAT</span>
            <span className="hero-art-title">LEVEL<br /><i>UP</i></span>
            <span className="hero-art-foot">T.E. — 001</span>
          </div>
          <div className="hero-index"><span>01</span><i /> 03</div>
        </section>

        <section className="collection section-wrap" id="colecao">
          <div className="section-heading">
            <div><p className="eyebrow">A SUA PRÓXIMA FASE</p><h2>Escolha seu <span>universo.</span></h2></div>
            <Link to="/jogos" className="section-link">Ver todos os jogos <span>↗</span></Link>
          </div>
          <GameGrid savedGames={savedGames} onToggleSave={onToggleSave} items={games.slice(0, 3)} />
        </section>

        <section className="feature-band">
          <div className="feature-symbol" aria-hidden="true">✳</div>
          <div><p className="eyebrow">CONTROLE NA MÃO. MUNDO AOS SEUS PÉS.</p><h2>Qual história<br />vai ser a sua?</h2></div>
          <Link className="button button-light" to="/comunidade">Entrar na conversa <span>↗</span></Link>
          <span className="band-decoration" aria-hidden="true">PRESS<br />START</span>
        </section>

        <section className="credits section-wrap" id="creditos">
          <p className="eyebrow">CRÉDITOS & DIREITOS</p>
          <p>Os títulos e nomes de franquias pertencem aos respectivos titulares: Rockstar Games, Sony Interactive Entertainment, CD PROJEKT, Activision e Ubisoft. Este é um projeto acadêmico independente, sem afiliação ou endosso. As ilustrações abstratas da identidade visual são originais; as imagens dos jogos são arquivos locais fornecidos para este projeto.</p>
        </section>
      </main>
    </Layout>
  );
}

function GameDetailPage({ game, saved, onToggleSave }) {
  if (!game) return <NotFoundPage />;

  return (
    <Layout>
      <main className={`game-detail section-wrap detail-${game.theme}`}>
        <Link className="detail-back" to="/jogos">← Voltar para os jogos</Link>
        <section className="detail-hero">
          <img className="detail-cover" src={game.cover} alt="" />
          <div className="detail-shade" />
          <div className="detail-hero-copy">
            <p className="eyebrow">{game.number} / {game.category}</p>
            <h1>{game.title}</h1>
            <p>{game.description}</p>
            <button
              className={`save-button${saved ? ' is-saved' : ''}`}
              type="button"
              onClick={() => onToggleSave(game.id)}
              aria-pressed={saved}
            >
              {saved ? '✓ Na sua lista' : '＋ Quero jogar'}
            </button>
          </div>
        </section>
        <section className="detail-story">
          <div>
            <p className="eyebrow">SOBRE O JOGO</p>
            <h2>Uma aventura<br /><span>para conhecer.</span></h2>
          </div>
          <p>{game.story}</p>
        </section>
        <section className="detail-memory">
          <span className="memory-mark" aria-hidden="true">“</span>
          <div>
            <p className="eyebrow">{game.id === 'gta-vi' ? 'NA MINHA LISTA DE PRÓXIMOS JOGOS' : 'LEMBRANÇA DE INFÂNCIA'}</p>
            <p>{game.memory}</p>
          </div>
        </section>
        {game.gallery.length > 0 && (
          <section className="detail-gallery">
            <div className="section-heading">
              <div><p className="eyebrow">GALERIA</p><h2>Imagens do <span>jogo.</span></h2></div>
            </div>
            <div className="gallery-grid">
              {game.gallery.map((image) => (
                <img key={image.src} src={image.src} alt={image.alt} loading="lazy" />
              ))}
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

function GameDetailRoute({ savedGames, onToggleSave }) {
  const { id } = useParams();
  const game = games.find((item) => item.id === id);
  return (
    <GameDetailPage
      game={game}
      saved={game ? savedGames.includes(game.id) : false}
      onToggleSave={onToggleSave}
    />
  );
}

function GamesPage({ savedGames, onToggleSave }) {
  const [filter, setFilter] = useState('Todos');
  const filters = ['Todos', 'Aventura', 'Ação', 'RPG', 'Ritmo'];
  const filteredGames = filter === 'Todos'
    ? games
    : games.filter((game) => game.category.toLowerCase().includes(filter.toLowerCase()));

  return (
    <Layout>
      <main className="inner-page section-wrap">
        <div className="page-intro">
          <p className="eyebrow">01 / CATÁLOGO</p>
          <h1>Seu próximo<br /><span>mundo.</span></h1>
          <p>Uma seleção para quem gosta de descobrir, competir, explorar e se perder em boas histórias.</p>
        </div>
        <div className="catalog-toolbar">
          <div className="filter-list" aria-label="Filtrar por gênero">
            {filters.map((item) => (
              <button
                type="button"
                key={item}
                className={filter === item ? 'filter-chip active' : 'filter-chip'}
                onClick={() => setFilter(item)}
                aria-pressed={filter === item}
              >{item}</button>
            ))}
          </div>
          <span>{filteredGames.length} JOGOS NA SELEÇÃO</span>
        </div>
        {filteredGames.length
          ? <GameGrid savedGames={savedGames} onToggleSave={onToggleSave} items={filteredGames} />
          : <p className="empty-state">Nenhum jogo encontrado nesta categoria.</p>}
      </main>
    </Layout>
  );
}

function CommunityPage() {
  const [values, setValues] = useState({ game: '', reason: '' });
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState('');
  const [feedback, setFeedback] = useState('');

  function updateField(event) {
    setValues((current) => ({ ...current, [event.target.name]: event.target.value }));
    setError('');
    setFeedback('');
  }

  function submitSuggestion(event) {
    event.preventDefault();
    const game = values.game.trim();
    const reason = values.reason.trim();
    if (game.length < 2) {
      setError('O nome do jogo precisa ter pelo menos 2 caracteres.');
      return;
    }
    if (reason.length < 10) {
      setError('Conte um pouco mais: escreva pelo menos 10 caracteres.');
      return;
    }
    setSuggestions((current) => [
      { id: crypto.randomUUID(), game, reason },
      ...current,
    ]);
    setValues({ game: '', reason: '' });
    setError('');
    setFeedback('Sugestão adicionada à lista desta sessão.');
  }

  return (
    <Layout>
      <main className="inner-page section-wrap community-page">
        <div className="page-intro">
          <p className="eyebrow">02 / COMUNIDADE</p>
          <h1>O que você<br /><span>joga?</span></h1>
          <p>Indique um jogo para a próxima seleção e conte por que ele merece entrar na conversa.</p>
        </div>
        <div className="community-layout">
          <form className="suggestion-form" onSubmit={submitSuggestion} noValidate>
            <p className="eyebrow">SUA PRÓXIMA RECOMENDAÇÃO</p>
            <label htmlFor="game">Nome do jogo</label>
            <input id="game" name="game" value={values.game} onChange={updateField} minLength="2" required placeholder="Ex.: um jogo que você recomenda" />
            <label htmlFor="reason">Por que você recomenda?</label>
            <textarea id="reason" name="reason" value={values.reason} onChange={updateField} minLength="10" required rows="4" placeholder="O que faz esse jogo especial para você?" />
            {error && <p className="form-message form-error" role="alert">{error}</p>}
            {feedback && <p className="form-message form-success" role="status">{feedback}</p>}
            <button type="submit" className="button button-primary">Enviar sugestão <span>↗</span></button>
            <p className="form-note">As sugestões ficam no estado desta página e não são enviadas a um servidor.</p>
          </form>
          <section className="suggestion-list" aria-live="polite">
            <div className="list-heading"><div><p className="eyebrow">MURAL DA SESSÃO</p><h2>Na conversa <span>({suggestions.length})</span></h2></div></div>
            {suggestions.length
              ? suggestions.map((suggestion) => (
                <article className="suggestion-card" key={suggestion.id}>
                  <span className="suggestion-icon">↗</span><div><h3>{suggestion.game}</h3><p>{suggestion.reason}</p></div>
                </article>
              ))
              : <p className="empty-state">O mural está esperando a primeira recomendação.</p>}
          </section>
        </div>
      </main>
    </Layout>
  );
}

function ApiPage() {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    async function loadPosts() {
      setStatus('loading');
      setError('');
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6', { signal: controller.signal });
        if (!response.ok) throw new Error(`A API respondeu com HTTP ${response.status}.`);
        const data = await response.json();
        setPosts(data);
        setStatus('ready');
      } catch (requestError) {
        if (requestError.name !== 'AbortError') {
          setError(requestError.message || 'Não foi possível carregar os dados.');
          setStatus('error');
        }
      }
    }
    loadPosts();
    return () => controller.abort();
  }, []);

  return (
    <Layout>
      <main className="inner-page section-wrap api-page">
        <div className="page-intro">
          <p className="eyebrow">03 / INTEGRAÇÃO</p>
          <h1>Dados em<br /><span>jogo.</span></h1>
          <p>Uma chamada real à JSONPlaceholder demonstra o carregamento de conteúdo externo com React.</p>
        </div>
        <div className="api-caption"><span className="api-dot" /> JSONPLACEHOLDER · POSTS DE DEMONSTRAÇÃO <span>GET /posts?_limit=6</span></div>
        {status === 'loading' && <p className="state-message">Carregando publicações da API...</p>}
        {status === 'error' && <p className="state-message state-error" role="alert">Falha ao carregar: {error}</p>}
        {status === 'ready' && (
          <>
            <p className="api-disclaimer">Estes textos são dados de exemplo da API e não são análises ou informações oficiais sobre os jogos.</p>
            <div className="post-grid">
              {posts.map((post) => (
                <article className="post-card" key={post.id}>
                  <span>POST / {String(post.id).padStart(2, '0')}</span>
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
                </article>
              ))}
            </div>
          </>
        )}
      </main>
    </Layout>
  );
}

function NotFoundPage() {
  return (
    <Layout>
      <main className="not-found section-wrap">
        <p className="eyebrow">404 / FASE NÃO ENCONTRADA</p>
        <h1>Esse caminho<br /><span>não existe.</span></h1>
        <Link className="button button-primary" to="/">Voltar ao início <span>↗</span></Link>
      </main>
    </Layout>
  );
}

export default function App() {
  const [savedGames, setSavedGames] = useState([]);

  function toggleSavedGame(gameId) {
    setSavedGames((current) => (
      current.includes(gameId)
        ? current.filter((id) => id !== gameId)
        : [...current, gameId]
    ));
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage savedGames={savedGames} onToggleSave={toggleSavedGame} />} />
      <Route path="/jogos" element={<GamesPage savedGames={savedGames} onToggleSave={toggleSavedGame} />} />
      <Route path="/jogos/:id" element={<GameDetailRoute savedGames={savedGames} onToggleSave={toggleSavedGame} />} />
      <Route path="/comunidade" element={<CommunityPage />} />
      <Route path="/api" element={<ApiPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
