Babado News - React
Projeto individual — Desenvolvimento Frontend II | Universidade Veiga de Almeida (UVA)
Projeto desenvolvido por Bruna Elen dos Santos Figueiredo, realizando a migração do projeto Babado News, originalmente desenvolvido em HTML, CSS e JavaScript, para React com Vite.
A proposta desta etapa foi transformar a página principal e a página de contato desenvolvida na primeira parte em uma única Landing Page, mantendo a identidade visual original do projeto.

🌐 Projeto publicado
Site: https://babado-news-react.netlify.app
Repositório: https://github.com/brunafgrd/BabadoNews-React
Projeto original: https://github.com/brunafgrd/babadonews

💻 Tecnologias
- React
- Vite
- JavaScript
- HTML5
- CSS3
- Bootstrap 5
- Bootstrap Icons
- Git
- GitHub
- Netlify
📰 Sobre a Landing Page
A Landing Page reúne as principais partes do Babado News em uma única página, utilizando navegação por âncoras.
Seções
- Início
- Destaque principal com carrossel
- Últimas notícias
- Notícias em destaque
- Categorias
- Newsletter
- Contato
- Formulário de contato
- Perguntas frequentes (FAQ)
- Rodapé
O menu principal possui as opções Início e Contato, conforme a proposta da atividade.

📁 Organização do projeto

BabadoNews-React/
│
├── public/
│   └── img/
│
├── referencia-html/
│   ├── index.html
│   ├── contato.html
│   └── style.css
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   │
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── Destaques.jsx
│   │   ├── Categorias.jsx
│   │   ├── Newsletter.jsx
│   │   └── Contato.jsx
│   │
│   ├── pages/
│   │   └── LandingPage.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── style.css
│
├── .gitignore
├── index.html
├── netlify.toml
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js

🔄 Migração para React
O projeto original foi utilizado como referência para a construção da nova versão.
A pasta referencia-html/ contém:
- index.html — página principal original.
- contato.html — página de contato desenvolvida na primeira etapa.
- style.css — estilos originais utilizados como referência.
Na versão React, as partes da Landing Page foram divididas em componentes e seções independentes.

🧩 Componentes
Components
- Navbar.jsx — cabeçalho e menu de navegação.
- Footer.jsx — rodapé do site.
Sections
- Hero.jsx — destaque principal e carrossel.
- Destaques.jsx — notícias em destaque.
- Categorias.jsx — categorias do portal.
- Newsletter.jsx — inscrição na newsletter.
- Contato.jsx — formulário de contato e FAQ.
Page
- LandingPage.jsx — responsável por organizar as seções da página.

- 📱 Responsividade
O projeto utiliza Bootstrap 5 e CSS para adaptar a interface a diferentes tamanhos de tela, incluindo computadores, tablets e dispositivos móveis.
✉️ Formulário de contato
O formulário realiza validação dos campos no navegador e apresenta uma mensagem de confirmação após o envio.
O formulário não envia mensagens para um endereço de e-mail real. Para realizar esse tipo de envio seria necessária a integração com um backend ou serviço específico de formulários.

❓ FAQ
A seção de perguntas frequentes utiliza o Accordion do Bootstrap, permitindo abrir e fechar as respostas diretamente na página.

🚀 Como executar o projeto
1. Clonar o repositório
git clone https://github.com/brunafgrd/BabadoNews-React.git
2. Entrar na pasta
cd BabadoNews-React
3. Instalar as dependências
npm install
4. Executar o projeto
npm run dev
5. Gerar o build de produção
npm run build
6. Visualizar o build
npm run preview

☁️ Deploy
O projeto foi publicado utilizando Netlify.
A configuração de build está definida no arquivo netlify.toml:
[build]
command = "npm run build"
publish = "dist"

[build.environment]
NODE_VERSION = "22"


👩‍💻 Autoria
Bruna Elen dos Santos Figueiredo
Disciplina: Desenvolvimento Frontend II
Instituição: Universidade Veiga de Almeida — UVA
Projeto individual desenvolvido a partir do projeto original Babado News.

🔗 Links
Projeto React:
https://github.com/brunafgrd/BabadoNews-React
Projeto original:
https://github.com/brunafgrd/babadonews
Site publicado:
https://babado-news-react.netlify.app
