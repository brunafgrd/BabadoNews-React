import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap'

function Navbar() {
  return (
    <>
      <header className="cabecalho-site">
        <div className="barra-superior">
          <div className="data-site">
            <span id="data-atual"></span>
          </div>

          <div className="links-superiores">
            <a href="#inicio">Assine</a>
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
              src="public/img/logo.png"
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

      <BootstrapNavbar expand="lg" className="menu-site">
        <Container fluid className="px-4 px-lg-5">
          <BootstrapNavbar.Toggle
            aria-controls="menuPrincipal"
            aria-label="Abrir menu"
          />

          <BootstrapNavbar.Collapse id="menuPrincipal">
            <Nav className="mx-auto">
              <Nav.Link href="#inicio" className="ativo">
                Início
              </Nav.Link>

              <Nav.Link href="#contato">
                Contato
              </Nav.Link>
            </Nav>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
    </>
  )
}

export default Navbar
