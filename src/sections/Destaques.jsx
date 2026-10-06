const noticias = [
  {
    imagem: '/img/resident evil.webp',
    alt: 'Cinema e entretenimento',
    categoria: 'ENTRETENIMENTO',
    titulo:
      '"Resident Evil" quebra recorde da franquia com US$ 60 milhões em bilheteria',
    tempo: 'Há 4 horas',
  },
  {
    imagem: '/img/diniz.png',
    alt: 'Jogador em campo de futebol',
    categoria: 'ESPORTES',
    titulo: 'Mesmo com a derrota, Diniz permanece no Corinthians',
    tempo: 'Há 5 horas',
  },
  {
    imagem:
      'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=600&q=85',
    alt: 'Prédio do Congresso Nacional',
    categoria: 'POLÍTICA',
    titulo: 'Governo discute novas medidas para o ambiente digital',
    tempo: 'Há 6 horas',
  },
  {
    imagem:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=85',
    alt: 'Placa eletrônica e tecnologia',
    categoria: 'TECNOLOGIA',
    titulo: 'Inteligência artificial e inovação ganham espaço no mercado',
    tempo: 'Há 8 horas',
  },
  {
    imagem:
      'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=600&q=85',
    alt: 'Evento cultural',
    categoria: 'CULTURA',
    titulo:
      'Eventos culturais e atrações para aproveitar o fim de semana',
    tempo: 'Há 9 horas',
  },
]

function Destaques() {
  return (
    <section
      id="destaques"
      className="container-fluid px-4 px-lg-5 secao-destaques"
    >
      <div className="titulo-secao">

        <span className="etiqueta-secao">
          BABADO NEWS
        </span>

        <h2>Em destaque</h2>

        <p>
          Confira assuntos que estão movimentando o Brasil e o mundo.
        </p>

      </div>

      <div className="grade-destaques">

        {/* MATÉRIA PRINCIPAL */}
        <article className="materia-principal">

          <img
            src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1000&q=85"
            alt="Evento e pessoas acompanhando uma apresentação"
          />

          <div className="conteudo-materia">

            <span className="categoria-noticia">
              NOTÍCIAS
            </span>

            <h3>
              Os principais acontecimentos que movimentam o Brasil
            </h3>

            <p>
              Informação, acontecimentos e temas importantes para acompanhar
              as notícias do dia.
            </p>

            <small>Atualizado hoje</small>

          </div>

        </article>

        {/* NOTÍCIAS SECUNDÁRIAS */}
        {noticias.map((noticia) => (
          <article
            className="materia-secundaria"
            key={noticia.titulo}
          >

            <img
              src={noticia.imagem}
              alt={noticia.alt}
            />

            <div className="conteudo-materia">

              <span className="categoria-noticia">
                {noticia.categoria}
              </span>

              <h3>{noticia.titulo}</h3>

              <small>{noticia.tempo}</small>

            </div>

          </article>
        ))}

      </div>
    </section>
  )
}

export default Destaques