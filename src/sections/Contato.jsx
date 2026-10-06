import { useState } from 'react'

function Contato() {
  const [mensagem, setMensagem] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const formulario = event.currentTarget

    if (!formulario.checkValidity()) {
      formulario.reportValidity()
      return
    }

    setMensagem('Mensagem enviada com sucesso!')
    formulario.reset()
  }

  return (
    <>
      {/* CABEÇALHO DA PÁGINA */}
      <section id="contato" className="cabecalho-pagina">
        <div className="container">
          <span className="etiqueta-secao">BABADO NEWS</span>

          <h2>Entre em contato</h2>

          <p>
            Tem uma sugestão, dúvida ou quer falar com a nossa equipe?
            Estamos aqui para ouvir você.
          </p>
        </div>
      </section>

      {/* ÁREA DE CONTATO */}
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
                    <h3>E-mail</h3>
                    <p>contato@babadonews.com</p>
                  </div>
                </div>

                {/* ATENDIMENTO */}
                <div className="item-contato">
                  <div className="icone-contato">
                    <i className="bi bi-clock"></i>
                  </div>

                  <div>
                    <h3>Atendimento</h3>

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
                    <h3>Redes sociais</h3>

                    <p>
                      Acompanhe as novidades do Babado News.
                    </p>

                    <div className="redes-contato">

                      <a
                        href="#"
                        aria-label="Instagram"
                      >
                        <i className="bi bi-instagram"></i>
                      </a>

                      <a
                        href="#"
                        aria-label="Facebook"
                      >
                        <i className="bi bi-facebook"></i>
                      </a>

                      <a
                        href="#"
                        aria-label="YouTube"
                      >
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

                <form
                  id="formulario-contato"
                  onSubmit={handleSubmit}
                >

                  {/* NOME E E-MAIL */}
                  <div className="row g-3">

                    <div className="col-md-6">

                      <label htmlFor="nome-contato">
                        Nome *
                      </label>

                      <input
                        type="text"
                        id="nome-contato"
                        name="nome"
                        placeholder="Digite seu nome"
                        required
                      />

                      <small
                        className="erro-campo"
                        id="erro-nome"
                      ></small>

                    </div>

                    <div className="col-md-6">

                      <label htmlFor="email-contato">
                        E-mail *
                      </label>

                      <input
                        type="email"
                        id="email-contato"
                        name="email"
                        placeholder="Digite seu e-mail"
                        required
                      />

                      <small
                        className="erro-campo"
                        id="erro-email"
                      ></small>

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
                    ></small>

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
                    ></textarea>

                    <small
                      className="erro-campo"
                      id="erro-mensagem"
                    ></small>

                  </div>

                  {/* CHECKBOX */}
                  <div className="campo-checkbox">

                    <input
                      type="checkbox"
                      id="aceite-contato"
                      name="aceite"
                      required
                    />

                    <label htmlFor="aceite-contato">
                      Confirmo que as informações preenchidas estão corretas.
                    </label>

                  </div>

                  <small
                    className="erro-campo"
                    id="erro-aceite"
                  ></small>

                  {/* BOTÃO */}
                  <button
                    type="submit"
                    className="botao-enviar"
                  >
                    Enviar mensagem
                    <i className="bi bi-arrow-right"></i>
                  </button>

                  {/* MENSAGEM DE SUCESSO */}
                  {mensagem && (
                    <div
                      id="mensagem-contato"
                      className="mensagem-formulario sucesso"
                      role="status"
                      aria-live="polite"
                    >
                      {mensagem}
                    </div>
                  )}

                </form>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DÚVIDAS FREQUENTES */}
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
    </>
  )
}

export default Contato