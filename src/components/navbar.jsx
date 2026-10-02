function Navbar() {
  const dataAtual = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  })

  return (
    <>
      <header className="cabecalho-site">

        <div className="barra-superior">

          <div className="data-site">
            <span>{dataAtual}</span>
          </div>

          <div className="links-superiores">
            <a href="#">Assine</a>

            <span>|</span>

            <a href="#contato">Fale conosco</a>
          </div>

        </div>

        <div className="cabecalho-conteudo">

          <div className="cabecalho-manifesto">

            <span className="linha-destaque"></span>

            <span>NOTÍCIAS</span>
            <span>CULTURA</span>
            <span>ENTRETENIMENTO</span>
            <span>E MUITO MAIS</span>

          </div>

          <a href="#inicio" className="logo-site">

            <img
              src="/img/logo.png"
              alt="Logo Babado News"
            />

            <p className="slogan-site">
              TUDO O QUE IMPORTA, EM UM SÓ LUGAR.
            </p>

          </a>

          <div className="cabecalho-descricao">

            <p>Informação que te acompanha.</p>

            <strong>Todos os dias.</strong>

            <span className="linha-destaque"></span>

          </div>

        </div>

      </header>

      <nav className="navbar navbar-expand-lg menu-site">

        <div className="container-fluid px-4 px-lg-5">

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menuPrincipal"
            aria-controls="menuPrincipal"
            aria-expanded="false"
            aria-label="Abrir menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse menu-conteudo"
            id="menuPrincipal"
          >

            <ul className="navbar-nav menu-links">

              <li className="nav-item">
                <a href="#inicio" className="nav-link ativo">
                  Início
                </a>
              </li>

              <li className="nav-item">
                <a href="#categorias" className="nav-link">
                  Política
                </a>
              </li>

              <li className="nav-item">
                <a href="#destaques" className="nav-link">
                  Entretenimento
                </a>
              </li>

              <li className="nav-item">
                <a href="#destaques" className="nav-link">
                  Esportes
                </a>
              </li>

              <li className="nav-item">
                <a href="#destaques" className="nav-link">
                  Lifestyle
                </a>
              </li>

              <li className="nav-item">
                <a href="#destaques" className="nav-link">
                  Tecnologia
                </a>
              </li>

              <li className="nav-item">
                <a href="#sobre" className="nav-link">
                  Sobre Nós
                </a>
              </li>

              <li className="nav-item">
                <a href="#contato" className="nav-link">
                  Contato
                </a>
              </li>

            </ul>

          </div>

        </div>

      </nav>
    </>
  )
}

export default Navbar