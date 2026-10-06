const categorias = [
  {
    nome: 'Política',
    descricao: 'Brasil e mundo',
    icone: 'bi-globe2',
  },
  {
    nome: 'Entretenimento',
    descricao: 'Famosos, TV e cultura',
    icone: 'bi-camera-reels',
  },
  {
    nome: 'Esportes',
    descricao: 'Resultados e análises',
    icone: 'bi-trophy',
  },
  {
    nome: 'Lifestyle',
    descricao: 'Moda e bem-estar',
    icone: 'bi-heart',
  },
  {
    nome: 'Tecnologia',
    descricao: 'Inovação e tendências',
    icone: 'bi-laptop',
  },
]

function Categorias() {
  return (
    <section
      id="categorias"
      className="container-fluid px-4 px-lg-5 secao-categorias"
    >
      <div className="titulo-secao titulo-categorias">
        <h2>Navegue pelo que te interessa</h2>
      </div>

      <div className="grade-categorias">
        {categorias.map((categoria) => (
          <a
            href="#destaques"
            className="caixa-categoria"
            key={categoria.nome}
          >
            <i
              className={`bi ${categoria.icone} icone-categoria`}
            ></i>

            <div>
              <h3>{categoria.nome}</h3>
              <p>{categoria.descricao}</p>
            </div>

            <i className="bi bi-arrow-up-right seta-categoria"></i>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Categorias