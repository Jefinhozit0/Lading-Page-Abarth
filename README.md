# 🚗 Abarth

Este é um projeto **Front-end** desenvolvido com **React + TypeScript + Vite**, estilizado com **Tailwind CSS** e hospedado no **Netlify**.

🔗 **Acesse o projeto online:** [abarth.netlify.app](https://abarth.netlify.app/)

---

## 🧠 Sobre o Projeto

O **Abarth** é um projeto de estudo focado no aprimoramento técnico e na exploração de tecnologias modernas.  
O principal objetivo foi aplicar:

- A **performance** e a velocidade do `Vite` no ambiente de desenvolvimento.  
- A **segurança** e a manutenibilidade do código com `TypeScript`.  
- O **design responsivo** e a metodologia *utility-first* do `Tailwind CSS`.

---

## 🛠️ Tecnologias Utilizadas

| Categoria | Tecnologia | Descrição |
| :--- | :--- | :--- |
| **Framework & Linguagem** | ⚛️ **React** | Biblioteca principal para construção de interfaces de usuário. |
|  | 🟦 **TypeScript** | Adiciona tipagem estática e melhora a segurança e a escalabilidade. |
| **Ferramentas** | ⚡ **Vite** | Build tool rápido, com hot-reloading otimizado. |
|  | 🎨 **Tailwind CSS** | Framework CSS *utility-first* para estilização moderna e responsiva. |
|  | 🧹 **ESLint** | Ferramenta para padronização e garantia da qualidade do código. |
| **Hospedagem** | ☁️ **Netlify** | Serviço de hospedagem e deploy contínuo integrado ao GitHub. |

---

## 📁 Estrutura do Projeto

A estrutura do projeto segue o padrão otimizado do `Vite` para aplicações `React + TypeScript`:

```
Abarth/
├── node_modules/
├── src/
│   ├── components/
│   │   └── App.tsx       # Componente principal
│   ├── index.css
│   ├── main.tsx          # Ponto de entrada da aplicação
│   └── vite-env.d.ts
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🚀 Como Executar Localmente

### 🔧 Pré-requisitos

Certifique-se de ter instalado em sua máquina:

- [**Node.js**](https://nodejs.org/) (versão 18 ou superior)
- **npm** (instalado com o Node.js) ou **yarn**

### 📦 Instalação e Execução

Siga os passos abaixo para clonar o projeto e rodar o servidor de desenvolvimento:

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/abarth.git

# 2. Acesse a pasta do projeto
cd abarth

# 3. Instale as dependências
npm install
# ou (se usar Yarn)
yarn install

# 4. Inicie o servidor de desenvolvimento
npm run dev
# ou
yarn dev
```

O projeto estará acessível em seu navegador em:  
👉 [http://localhost:5173](http://localhost:5173)

---

## 🌍 Deploy Contínuo (GitHub → Netlify)

O projeto está configurado para Deploy Contínuo (CD) utilizando a integração direta entre o GitHub e o Netlify.

1. Faça login no [Netlify](https://www.netlify.com/).  
2. Clique em **"Add new site" → "Import an existing project"**.  
3. Escolha o repositório **abarth** do seu GitHub.  
4. O Netlify detectará automaticamente as configurações de build:

```
Build command: npm run build
Publish directory: dist
```

Após o primeiro deploy, qualquer novo commit na branch `main` atualizará o site automaticamente,  
tornando o processo de publicação rápido e eficiente.

---

## 👨‍💻 Autor

| Detalhe | Informação |
| :--- | :--- |
| **Nome** | Jefferson Silva de Almeida |
| **E-mail** | 📧 [jefinhozit00@gmail.com](mailto:jefinhozit00@gmail.com) |
| **GitHub** | 💼 [github.com/Jefinhozit0](https://github.com/Jefinhozit0) |

---
