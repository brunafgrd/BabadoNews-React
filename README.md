Babado News - React
Projeto individual desenvolvido por Bruna Elen dos Santos Figueiredo para a disciplina de Desenvolvimento Frontend II – UVA.
Sobre o projeto
O Babado News é um portal de notícias desenvolvido originalmente em HTML, CSS e JavaScript e posteriormente migrado para React utilizando Vite.
Nesta etapa do projeto, a página principal e a página de contato desenvolvida na primeira parte foram integradas em uma única Landing Page, organizada em diferentes seções com navegação por âncoras.
O projeto mantém a identidade visual original do Babado News, utilizando suas cores, tipografia, imagens, logo, ícones e estrutura visual.
Objetivos
- Migrar o projeto original para React.
- Utilizar componentes reutilizáveis.
- Organizar a Landing Page em seções independentes.
- Utilizar navegação por âncoras.
- Manter a identidade visual do projeto original.
- Desenvolver uma interface responsiva.
- Utilizar arrays e .map() para conteúdos repetitivos.
- Integrar a página de contato desenvolvida na primeira etapa.
- Publicar o projeto utilizando Netlify.
Tecnologias utilizadas
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
Estrutura do projeto
BabadoNews-React/
├── public/
│   └── img/
├── referencia-html/
│   ├── index.html
│   ├── contato.html
│   └── style.css
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── Destaques.jsx
│   │   ├── Categorias.jsx
│   │   ├── Newsletter.jsx
│   │   └── Contato.jsx
│   ├── pages/
│   │   └── LandingPage.jsx
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
Seções da Landing Page
A Landing Page é composta por:
- Cabeçalho com logo e informações do site.
- Menu de navegação.
- Seção inicial com destaque de notícia.
- Carrossel de notícias.
- Últimas notícias.
- Notícias em destaque.
- Categorias.
- Newsletter.
- Seção de contato.
- Formulário de contato.
- Perguntas frequentes (FAQ).
- Rodapé.
O menu principal utiliza navegação por âncoras e possui as opções Início e Contato.
Formulário de contato
O formulário de contato possui validação no navegador e apresenta uma mensagem de confirmação após o envio.
O formulário não realiza o envio de mensagens para um endereço de e-mail real. Para realizar o envio real seria necessária uma integração com um backend ou serviço específico de formulários.
FAQ
A seção de perguntas frequentes utiliza o componente Accordion do Bootstrap, permitindo que as respostas sejam abertas e fechadas pelo usuário.
Responsividade
O projeto foi desenvolvido utilizando recursos do Bootstrap e CSS para adaptar a interface a diferentes tamanhos de tela, incluindo computadores, tablets e dispositivos móveis.
Arquivos de referência
A pasta referencia-html/ contém os arquivos utilizados como referência para a migração para React:
- index.html — página principal original do projeto.
- contato.html — página de contato desenvolvida na primeira etapa.
- style.css — folha de estilos original utilizada como referência visual.
Projeto original
O projeto original do Babado News foi desenvolvido em grupo e está disponível no GitHub:
https://github.com/brunafgrd/babadonews
Repositório desta etapa
Esta etapa individual do projeto está disponível em:
https://github.com/brunafgrd/BabadoNews-React
Publicação
O projeto foi publicado utilizando o Netlify.
Site publicado:
https://babado-news-react.netlify.app
Como executar o projeto localmente
Clone o repositório:
git clone https://github.com/brunafgrd/BabadoNews-React.git
Entre na pasta do projeto:
cd BabadoNews-React
Instale as dependências:
npm install
Execute o projeto em ambiente de desenvolvimento:
npm run dev
Para gerar a versão de produção:
npm run build
Para visualizar a versão de produção localmente:
npm run preview
Build e publicação
O projeto utiliza o Vite para gerar a versão de produção.
O arquivo netlify.toml contém as configurações utilizadas pelo Netlify:
[build]
command = "npm run build"
publish = "dist"
[build.environment]
NODE_VERSION = "22"
Dessa forma, o Netlify executa o comando de build e publica o conteúdo gerado na pasta dist.
Autoria
Bruna Elen dos Santos Figueiredo
Disciplina: Desenvolvimento Frontend II
Instituição: Universidade Veiga de Almeida – UVA
Créditos
O projeto React foi desenvolvido a partir do projeto original Babado News, desenvolvido anteriormente em grupo.
Foram mantidos como referência a identidade visual, estrutura de conteúdo, imagens, logo e estilos do projeto original.
Projeto original:
https://github.com/brunafgrd/babadonews
Projeto React individual:
https://github.com/brunafgrd/BabadoNews-React
Site publicado:
https://babado-news-react.netlify.app
