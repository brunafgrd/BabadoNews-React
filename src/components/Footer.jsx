function Footer() {
  return (
    <footer className="rodape-site">
      <div className="container-fluid px-4 px-lg-5">
        <div className="conteudo-rodape">

          <div className="marca-rodape">
            <a href="#inicio" className="logo-rodape">
              BABADO <span>NEWS.</span>
            </a>

            <p>Informação que te acompanha. Sempre.</p>
          </div>

          <div className="links-rodape">
            <a href="#inicio">Início</a>
            <a href="#categorias">Política</a>
            <a href="#categorias">Entretenimento</a>
            <a href="#categorias">Esportes</a>
            <a href="#categorias">Lifestyle</a>
            <a href="#categorias">Tecnologia</a>
            <a href="#contato">Sobre Nós</a>
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
  )
}

export default Footer