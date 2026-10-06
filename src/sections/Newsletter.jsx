import { useState } from 'react'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (!email) {
      setMensagem('Digite seu e-mail para se inscrever.')
      return
    }

    setMensagem('Inscrição realizada com sucesso!')
    setEmail('')
  }

  return (
    <section className="secao-inscricao">
      <div className="conteudo-inscricao">
        <span className="etiqueta-inscricao">BABADO NEWS</span>

        <h2>Fique por dentro!</h2>

        <p>
          Receba as principais notícias e novidades
          diretamente no seu e-mail.
        </p>

        <form
          className="formulario-inscricao"
          id="formulario-inscricao"
          onSubmit={handleSubmit}
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
              value={email}
              onChange={(event) => setEmail(event.target.value)}
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
          {mensagem}
        </p>
      </div>
    </section>
  )
}

export default Newsletter