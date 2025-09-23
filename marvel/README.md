✨ Marvel Characters Explorer

Aplicação React + TypeScript para explorar personagens da Marvel, com listagem paginada, busca por nome e detalhes completos de cada herói ou vilão.

🚀 Tecnologias

⚛️ React

📘 TypeScript

⚡ Vite

💅 Styled Components

🌐 React Router

🔗 Axios

Axios

📌 Funcionalidades

✅ Listagem de personagens (10 por página)
✅ Paginação dinâmica
✅ Busca de personagens pelo nome
✅ Visualização detalhada incluindo:
   • Séries
   • HQs (Comics)
   • Eventos

# Clone o repositório

git clone https://github.com/seu-usuario/marvel.git

# Acesse a pasta

cd marvel

# Instale as dependências

npm install

# Configure suas chaves da Marvel API em um arquivo .env

VITE_MARVEL_PUBLIC_KEY=sua_public_key
VITE_MARVEL_PRIVATE_KEY=sua_private_key

# Rode o servidor de desenvolvimento

npm run dev

📂 Estrutura principal
src/
├── @types/ # Tipagens TypeScript
|-- assets/ # Images da Aplicação
├── components/ # Componentes reutilizáveis
├── context/ # Context API (estado global)
├── hooks/ # Hooks customizados
|-- layout # Componentes de layout (ex: AppWrapper, Content)
├── pages/ # Páginas principais
|-- routes/ # Configuração de rotas
├── services/ # Integração com API da Marvel
└── styles/ # Estilização global e temas

📖 API utilizada

Este projeto consome a Marvel API

🔑 Para utilizá-la, crie uma conta gratuita e gere suas próprias chaves pública e priv

✨ Desenvolvido para desafio técnico de Front-end
