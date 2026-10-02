import { useState } from 'react'
import Navbar from './components/navbar'

function App() {
    const [mensagemContato, setMensagemContato] = useState('')
      function validarContato(event) {
    event.preventDefault()

    const nome = document.getElementById('nome-contato').value
    const email = document.getElementById('email-contato').value
    const assunto = document.getElementById('assunto-contato').value
    const mensagem = document.getElementById('campo-mensagem-contato').value
    const aceite = document.getElementById('aceite-contato').checked

    let valido = true

    if (nome.trim() === '') {
      document.getElementById('erro-nome').textContent = 'Digite seu nome.'
      valido = false
    } else {
      document.getElementById('erro-nome').textContent = ''
    }

    if (email.trim() === '') {
      document.getElementById('erro-email').textContent = 'Digite seu e-mail.'
      valido = false
    } else if (!email.includes('@')) {
      document.getElementById('erro-email').textContent = 'Digite um e-mail válido.'
      valido = false
    } else {
      document.getElementById('erro-email').textContent = ''
    }

    if (assunto === '') {
      document.getElementById('erro-assunto').textContent = 'Selecione um assunto.'
      valido = false
    } else {
      document.getElementById('erro-assunto').textContent = ''
    }

    if (mensagem.trim() === '') {
      document.getElementById('erro-mensagem').textContent = 'Digite sua mensagem.'
      valido = false
    } else {
      document.getElementById('erro-mensagem').textContent = ''
    }

    if (!aceite) {
      document.getElementById('erro-aceite').textContent =
        'Confirme as informações preenchidas.'
      valido = false
    } else {
      document.getElementById('erro-aceite').textContent = ''
    }

    const mensagemStatus = document.getElementById('mensagem-contato')

    if (valido) {
      setMensagemContato('Mensagem enviada com sucesso!')
      mensagemStatus.className = 'mensagem-formulario sucesso'
    } else {
      setMensagemContato('')
      mensagemStatus.className = 'mensagem-formulario'
    }
  }
  return (
    <>
      <Navbar />

      <main>

        {/* NOTÍCIA PRINCIPAL */}
        <section
          id="inicio"
          className="container-fluid px-4 px-lg-5 secao-destaque"
        >
          <div className="row g-4">

            {/* CARROSSEL PRINCIPAL */}
            <div className="col-lg-8">
              <article className="noticia-destaque">

                <img
                  className="imagem-destaque"
                  src="/img/party.jpg"
                  alt="Público acompanhando um evento musical"
                />

                <div className="sobreposicao-destaque"></div>

                <div className="conteudo-destaque">

                  <span className="etiqueta-noticia">
                    ENTRETENIMENTO
                  </span>

                  <h1>
                    Música e entretenimento movimentam a agenda cultural brasileira
                  </h1>

                  <p>
                    Shows, eventos e novidades do mundo dos famosos estão entre os
                    assuntos que chamam a atenção do público.
                  </p>

                  <a href="#destaques" className="botao-materia">
                    Ler matéria
                    <i className="bi bi-arrow-right"></i>
                  </a>

                </div>

                <div className="indicadores-destaque">
                  <span className="selecionado"></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

              </article>
            </div>

            {/* ÚLTIMAS NOTÍCIAS */}
            <div className="col-lg-4">
              <section className="noticias-laterais">

                <div className="titulo-secao">
                  <h2>Últimas notícias</h2>
                </div>

                {/* NOTÍCIA 1 */}
                <article className="cartao-noticia">

                  <img
                    src="/img/show.jpg"
                    alt="Palco de show"
                  />

                  <div className="texto-cartao">

                    <span className="categoria-noticia">
                      ENTRETENIMENTO
                    </span>

                    <a href="#destaques" className="link-materia">
                      <h3>Rock in Rio: confira as novidades</h3>
                    </a>

                    <small>Há 2 horas</small>

                  </div>

                </article>

                {/* NOTÍCIA 2 */}
                <article className="cartao-noticia">

                  <img
                    src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=400&q=80"
                    alt="Bola de futebol"
                  />

                  <div className="texto-cartao">

                    <span className="categoria-noticia">
                      ESPORTES
                    </span>

                    <a href="#destaques" className="link-materia">
                      <h3>Veja nova chance do Flamengo ao título</h3>
                    </a>

                    <small>Há 4 horas</small>

                  </div>

                </article>

                {/* NOTÍCIA 3 */}
                <article className="cartao-noticia">

                  <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80"
                    alt="Computador e tecnologia"
                  />

                  <div className="texto-cartao">

                    <span className="categoria-noticia">
                      TECNOLOGIA
                    </span>

                    <a href="#destaques" className="link-materia">
                      <h3>
                        Novas tecnologias prometem transformar o cotidiano
                      </h3>
                    </a>

                    <small>Há 6 horas</small>

                  </div>

                </article>

              </section>
            </div>

          </div>
        </section>


        {/* EM DESTAQUE */}
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

                <a href="#inicio" className="link-materia">
                  <h3>
                    Os principais acontecimentos que movimentam o Brasil
                  </h3>
                </a>

                <p>
                  Informação, acontecimentos e temas importantes para acompanhar
                  as notícias do dia.
                </p>

                <small>Atualizado hoje</small>

              </div>

            </article>


            {/* ENTRETENIMENTO */}
            <article className="materia-secundaria">

              <img
                src="/img/resident evil.webp"
                alt="Cinema e entretenimento"
              />

              <div className="conteudo-materia">

                <span className="categoria-noticia">
                  ENTRETENIMENTO
                </span>

                <a href="#inicio" className="link-materia">
                  <h3>
                    "Resident Evil" quebra recorde da franquia com US$ 60 milhões em bilheteria
                  </h3>
                </a>

                <small>Há 4 horas</small>

              </div>

            </article>


            {/* ESPORTES */}
            <article className="materia-secundaria">

              <img
                src="https://brunafgrd.github.io/babadonews/img/esportes2.jpg"
                alt="Basquete"
              />

              <div className="conteudo-materia">

                <span className="categoria-noticia">
                  ESPORTES
                </span>

                <a href="#inicio" className="link-materia">
                  <h3>
                    Novos donos dos Lakers querem colocar o clube a valer €26 mil milhões
                  </h3>
                </a>

                <small>Há 5 horas</small>

              </div>

            </article>


            {/* POLÍTICA */}
            <article className="materia-secundaria">

              <img
                src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=600&q=85"
                alt="Prédio do Congresso Nacional"
              />

              <div className="conteudo-materia">

                <span className="categoria-noticia">
                  POLÍTICA
                </span>

                <a href="#inicio" className="link-materia">
                  <h3>
                    Governo discute novas medidas para o ambiente digital
                  </h3>
                </a>

                <small>Há 6 horas</small>

              </div>

            </article>


            {/* TECNOLOGIA */}
            <article className="materia-secundaria">

              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=85"
                alt="Placa eletrônica e tecnologia"
              />

              <div className="conteudo-materia">

                <span className="categoria-noticia">
                  TECNOLOGIA
                </span>

                <a href="#inicio" className="link-materia">
                  <h3>
                    Inteligência artificial e inovação ganham espaço no mercado
                  </h3>
                </a>

                <small>Há 8 horas</small>

              </div>

            </article>


            {/* CULTURA */}
            <article className="materia-secundaria">

              <img
                src="https://brunafgrd.github.io/babadonews/img/life.png"
                alt="Cultura e lifestyle"
              />

              <div className="conteudo-materia">

                <span className="categoria-noticia">
                  CULTURA
                </span>

                <a href="#inicio" className="link-materia">
                  <h3>
                    Conheça mais sobre Lifestyle e descubra o seu.
                  </h3>
                </a>

                <small>Há 9 horas</small>

              </div>

            </article>

          </div>
        </section>


        {/* CATEGORIAS */}
        <section
          id="categorias"
          className="container-fluid px-4 px-lg-5 secao-categorias"
        >

          <div className="titulo-secao titulo-categorias">

            <h2>
              Navegue pelo que te interessa
            </h2>

          </div>


          <div className="grade-categorias">

            <a href="#destaques" className="caixa-categoria">

              <i className="bi bi-globe2 icone-categoria"></i>

              <div>
                <h3>Política</h3>
                <p>Brasil e mundo</p>
              </div>

              <i className="bi bi-arrow-up-right seta-categoria"></i>

            </a>


            <a href="#destaques" className="caixa-categoria">

              <i className="bi bi-camera-reels icone-categoria"></i>

              <div>
                <h3>Entretenimento</h3>
                <p>Famosos, TV e cultura</p>
              </div>

              <i className="bi bi-arrow-up-right seta-categoria"></i>

            </a>


            <a href="#destaques" className="caixa-categoria">

              <i className="bi bi-trophy icone-categoria"></i>

              <div>
                <h3>Esportes</h3>
                <p>Resultados e análises</p>
              </div>

              <i className="bi bi-arrow-up-right seta-categoria"></i>

            </a>


            <a href="#destaques" className="caixa-categoria">

              <i className="bi bi-heart icone-categoria"></i>

              <div>
                <h3>Lifestyle</h3>
                <p>Moda e bem-estar</p>
              </div>

              <i className="bi bi-arrow-up-right seta-categoria"></i>

            </a>


            <a href="#destaques" className="caixa-categoria">

              <i className="bi bi-laptop icone-categoria"></i>

              <div>
                <h3>Tecnologia</h3>
                <p>Inovação e tendências</p>
              </div>

              <i className="bi bi-arrow-up-right seta-categoria"></i>

            </a>

          </div>

        </section>

      
{/* CONTATO */}

<section id="contato" className="cabecalho-pagina">
  <div className="container">
    <span className="etiqueta-secao">
      BABADO NEWS
    </span>

    <h2>
      Entre em contato
    </h2>

    <p>
      Tem uma sugestão, dúvida ou quer falar com a nossa equipe?
      Estamos aqui para ouvir você.
    </p>
  </div>
</section>


<section className="secao-contato">

  <div className="container">

    <div className="row g-5">

      {/* INFORMAÇÕES DE CONTATO */}

      <div className="col-lg-5">

        <div className="informacoes-contato">

          <span className="etiqueta-secao">
            FALE CONOSCO
          </span>

          <h2>
            Sua opinião faz parte do Babado News.
          </h2>

          <p>
            Entre em contato com a nossa equipe para enviar
            sugestões de pautas, dúvidas, comentários ou
            informações sobre o nosso portal.
          </p>


          {/* E-MAIL */}

          <div className="item-contato">

            <div className="icone-contato">
              <i className="bi bi-envelope"></i>
            </div>

            <div>

              <h3>
                E-mail
              </h3>

              <p>
                contato@babadonews.com
              </p>

            </div>

          </div>


          {/* HORÁRIO */}

          <div className="item-contato">

            <div className="icone-contato">
              <i className="bi bi-clock"></i>
            </div>

            <div>

              <h3>
                Atendimento
              </h3>

              <p>
                Segunda a sexta-feira
                <br />
                Das 9h às 18h
              </p>

            </div>

          </div>


          {/* REDES SOCIAIS */}

          <div className="item-contato">

            <div className="icone-contato">
              <i className="bi bi-share"></i>
            </div>

            <div>

              <h3>
                Redes sociais
              </h3>

              <p>
                Acompanhe as novidades do Babado News.
              </p>


              <div className="redes-contato">

                <a href="#" aria-label="Instagram">
                  <i className="bi bi-instagram"></i>
                </a>

                <a href="#" aria-label="Facebook">
                  <i className="bi bi-facebook"></i>
                </a>

                <a href="#" aria-label="YouTube">
                  <i className="bi bi-youtube"></i>
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* FORMULÁRIO */}

      <div className="col-lg-7">

        <div className="cartao-contato">

          <div className="titulo-formulario">

            <span className="etiqueta-secao">
              ENVIE UMA MENSAGEM
            </span>

            <h2>
              Fale com a nossa equipe
            </h2>

            <p>
              Preencha o formulário abaixo.
              Os campos marcados com * são obrigatórios.
            </p>

          </div>


          {/* FORMULÁRIO DE CONTATO */}

        <form id="formulario-contato" noValidate onSubmit={validarContato}>

            {/* NOME E E-MAIL */}

            <div className="row g-3">

              {/* NOME */}

              <div className="col-md-6">

                <label htmlFor="nome-contato">
                  Nome *
                </label>

                <input
                  type="text"
                  id="nome-contato"
                  name="nome"
                  placeholder="Digite seu nome"
                  autoComplete="name"
                  required
                />

                <small
                  className="erro-campo"
                  id="erro-nome"
                >
                </small>

              </div>


              {/* E-MAIL */}

              <div className="col-md-6">

                <label htmlFor="email-contato">
                  E-mail *
                </label>

                <input
                  type="email"
                  id="email-contato"
                  name="email"
                  placeholder="Digite seu e-mail"
                  autoComplete="email"
                  required
                />

                <small
                  className="erro-campo"
                  id="erro-email"
                >
                </small>

              </div>

            </div>


            {/* ASSUNTO */}

            <div className="campo-formulario">

              <label htmlFor="assunto-contato">
                Assunto *
              </label>

              <select
                id="assunto-contato"
                name="assunto"
                required
              >

                <option value="">
                  Selecione um assunto
                </option>

                <option value="sugestao">
                  Sugestão de pauta
                </option>

                <option value="duvida">
                  Dúvida
                </option>

                <option value="comentario">
                  Comentário
                </option>

                <option value="parceria">
                  Parceria
                </option>

                <option value="outro">
                  Outro assunto
                </option>

              </select>

              <small
                className="erro-campo"
                id="erro-assunto"
              >
              </small>

            </div>


            {/* MENSAGEM */}

            <div className="campo-formulario">

              <label htmlFor="campo-mensagem-contato">
                Mensagem *
              </label>

              <textarea
                id="campo-mensagem-contato"
                name="mensagem"
                rows="6"
                placeholder="Escreva sua mensagem..."
                required
              >
              </textarea>

              <small
                className="erro-campo"
                id="erro-mensagem"
              >
              </small>

            </div>


            {/* CONSENTIMENTO */}

            <div className="campo-checkbox">

              <input
                type="checkbox"
                id="aceite-contato"
                name="aceite"
                required
              />

              <label htmlFor="aceite-contato">
                Confirmo que as informações preenchidas
                estão corretas.
              </label>

            </div>

            <small
              className="erro-campo"
              id="erro-aceite"
            >
            </small>


            {/* BOTÃO */}

            <button
              type="submit"
              className="botao-enviar"
            >
              Enviar mensagem
              <i className="bi bi-arrow-right"></i>
            </button>


            {/* RETORNO DO JAVASCRIPT */}

            <div
              id="mensagem-contato"
              className="mensagem-formulario"
              role="status"
              aria-live="polite"
            >
              {mensagemContato}
            </div>

          </form>

        </div>

      </div>

    </div>

  </div>

</section>


{/* PERGUNTAS FREQUENTES */}

<section className="secao-duvidas">

  <div className="container">

    <div className="titulo-secao text-center">

      <span className="etiqueta-secao">
        PRECISA DE AJUDA?
      </span>

      <h2>
        Antes de entrar em contato
      </h2>

      <p>
        Confira algumas informações importantes.
      </p>

    </div>


    <div
      className="accordion accordion-flush"
      id="accordionDuvidas"
    >

      {/* DÚVIDA 1 */}

      <div className="accordion-item">

        <h2 className="accordion-header">

          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#duvidaUm"
            aria-expanded="false"
            aria-controls="duvidaUm"
          >
            Como enviar uma sugestão de notícia?
          </button>

        </h2>

        <div
          id="duvidaUm"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionDuvidas"
        >

          <div className="accordion-body">
            Utilize o formulário de contato e selecione
            a opção "Sugestão de pauta". Descreva o assunto
            com o máximo de detalhes possível.
          </div>

        </div>

      </div>


      {/* DÚVIDA 2 */}

      <div className="accordion-item">

        <h2 className="accordion-header">

          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#duvidaDois"
            aria-expanded="false"
            aria-controls="duvidaDois"
          >
            O Babado News recebe propostas de parceria?
          </button>

        </h2>

        <div
          id="duvidaDois"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionDuvidas"
        >

          <div className="accordion-body">
            Sim. Você pode selecionar a opção "Parceria"
            no formulário e apresentar sua proposta
            para a nossa equipe.
          </div>

        </div>

      </div>


      {/* DÚVIDA 3 */}

      <div className="accordion-item">

        <h2 className="accordion-header">

          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#duvidaTres"
            aria-expanded="false"
            aria-controls="duvidaTres"
          >
            O formulário envia a mensagem por e-mail?
          </button>

        </h2>

        <div
          id="duvidaTres"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionDuvidas"
        >

          <div className="accordion-body">
            Nesta versão acadêmica, o formulário realiza
            a validação dos dados no navegador e apresenta
            uma mensagem de confirmação. O envio real
            precisa de uma integração com um servidor
            ou serviço de formulários.
          </div>

        </div>

      </div>

    </div>

  </div>

</section>


{/* NEWSLETTER */}

<section className="secao-inscricao">

  <div className="conteudo-inscricao">

    <span className="etiqueta-inscricao">
      BABADO NEWS
    </span>

    <h2>
      Fique por dentro!
    </h2>

    <p>
      Receba as principais notícias e novidades
      diretamente no seu e-mail.
    </p>


    <form
      className="formulario-inscricao"
      id="formulario-inscricao"
    >

      <div className="campo-inscricao">

        <label htmlFor="email-inscricao">
          Seu melhor e-mail
        </label>

        <input
          type="email"
          id="email-inscricao"
          name="email"
          placeholder="Digite seu e-mail"
          autoComplete="email"
          required
        />

      </div>

      <button type="submit">
        Inscrever-se
      </button>

    </form>


    <small>
      Sua informação está segura com a gente.
    </small>

    <p
      id="mensagem-inscricao"
      className="mensagem-inscricao"
      role="status"
      aria-live="polite"
    >
    </p>

  </div>

</section>
</main>
     
      {/* RODAPÉ */}
      <footer className="rodape-site">

        <div className="container-fluid px-4 px-lg-5">

          <div className="conteudo-rodape">

            <div className="marca-rodape">

              <a href="#inicio" className="logo-rodape">
                BABADO
                <span>NEWS.</span>
              </a>

              <p>
                Informação que te acompanha. Sempre.
              </p>

            </div>


            <div className="links-rodape">

              <a href="#inicio">Início</a>

              <a href="#destaques">Destaques</a>

              <a href="#categorias">Categorias</a>

              <a href="#contato">Contato</a>

            </div>


            <div className="redes-sociais">

              <a href="#" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>

              <a href="#" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>

              <a href="#" aria-label="YouTube">
                <i className="bi bi-youtube"></i>
              </a>

            </div>

          </div>


          <div className="direitos-autorais">
            © 2026 Babado News. Todos os direitos reservados.
          </div>

        </div>

      </footer>

    </>
  )
}

export default App