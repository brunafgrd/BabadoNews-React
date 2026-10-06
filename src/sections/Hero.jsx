import { useEffect, useState } from 'react'

const noticiasCarrossel = [
  {
    categoria: 'ENTRETENIMENTO',
    imagem: '/img/anitta.jpg',
    titulo: 'Anitta agita ensaio no Rio e anuncia novidades para 2027',
    texto:
      'Cantora levou o público ao delírio e confirmou novidades especiais para o próximo ano.',
  },
  {
    categoria: 'ESPORTES',
    imagem: '/img/tecnico.png',
    titulo: 'Confira os convocados para amistoso da seleção brasileira.',
    texto: 'Novos jogadores com oportunidade de observação.',
  },
  {
    categoria: 'TECNOLOGIA',
    imagem: '/img/ai.jpg',
    titulo: 'Tecnologia e inovação ganham destaque em 2026',
    texto:
      'Descubra as novidades tecnológicas que estão transformando o nosso dia a dia.',
  },
  {
    categoria: 'CULTURA',
    imagem: '/img/party.jpg',
    titulo: 'Cultura e entretenimento movimentam o fim de semana',
    texto:
      'Eventos, música e novidades culturais para você acompanhar nessa semana.',
  },
]

function Hero() {
  const [noticiaAtual, setNoticiaAtual] = useState(0)

  useEffect(() => {
    const intervalo = setInterval(() => {
      setNoticiaAtual((atual) => {
        if (atual >= noticiasCarrossel.length - 1) {
          return 0
        }

        return atual + 1
      })
    }, 6000)

    return () => clearInterval(intervalo)
  }, [])

  const noticia = noticiasCarrossel[noticiaAtual]

  return (
    <section
      id="inicio"
      className="container-fluid px-4 px-lg-5 secao-destaque"
    >
      <div className="row g-4">
        <div className="col-lg-8">
          <article className="noticia-destaque">
            <img
              className="imagem-destaque"
              src={noticia.imagem}
              alt={noticia.titulo}
            />

            <div className="sobreposicao-destaque"></div>

            <div className="conteudo-destaque">
              <span className="etiqueta-noticia">
                {noticia.categoria}
              </span>

              <h1>{noticia.titulo}</h1>

              <p>{noticia.texto}</p>

              <a href="#destaques" className="botao-materia">
                Ler matéria
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>

            <div className="indicadores-destaque">
              {noticiasCarrossel.map((_, index) => (
                <span
                  key={index}
                  className={
                    index === noticiaAtual ? 'selecionado' : ''
                  }
                  onClick={() => setNoticiaAtual(index)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Ir para notícia ${index + 1}`}
                  onKeyDown={(event) => {
                    if (
                      event.key === 'Enter' ||
                      event.key === ' '
                    ) {
                      setNoticiaAtual(index)
                    }
                  }}
                ></span>
              ))}
            </div>
          </article>
        </div>

        <div className="col-lg-4">
          <section className="noticias-laterais">
            <div className="titulo-secao">
              <h2>Últimas notícias</h2>

              <a href="#destaques">
                Ver todas <i className="bi bi-arrow-right"></i>
              </a>
            </div>

            <article className="cartao-noticia">
              <img
                src="/img/show.jpg"
                alt="Palco de show"
              />

              <div className="texto-cartao">
                <span className="categoria-noticia">
                  ENTRETENIMENTO
                </span>

                <h3>
                  Shows no Brasil em 2027: confira as novidades
                </h3>

                <small>Há 2 horas</small>
              </div>
            </article>

            <article className="cartao-noticia">
              <img
                src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=400&q=80"
                alt="Bola de futebol"
              />

              <div className="texto-cartao">
                <span className="categoria-noticia">
                  ESPORTES
                </span>

                <h3>
                  Futebol brasileiro se prepara para novos confrontos
                </h3>

                <small>Há 4 horas</small>
              </div>
            </article>

            <article className="cartao-noticia">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80"
                alt="Computador e tecnologia"
              />

              <div className="texto-cartao">
                <span className="categoria-noticia">
                  TECNOLOGIA
                </span>

                <h3>
                  Novas tecnologias prometem transformar o cotidiano
                </h3>

                <small>Há 6 horas</small>
              </div>
            </article>
          </section>
        </div>
      </div>
    </section>
  )
}

export default Hero