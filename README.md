# 🦫 CapyBoard
### 📌 Sobre o Projeto
CapyBoard é uma aplicação web desenvolvida com React e TypeScript com foco em prática de gerenciamento de estado, validação de formulários e persistência de dados no navegador.

A aplicação reúne três módulos principais:

📋 ToDo – Gerenciamento de tarefas com categorias.

👥 Contacts – Cadastro e listagem de contatos.

💰 Finance – Controle simples de entradas e saídas financeiras.

Os dados são persistidos utilizando LocalStorage, garantindo que as informações permaneçam salvas mesmo após atualização da página.

## 🚀 Tecnologias Utilizadas

- React
- TypeScript
- React Hook Form
- Zod
- @hookform/resolvers
- TailwindCSS
- LocalStorage API

## 🎯 Conceitos Aplicados
Este projeto foi desenvolvido com foco nos seguintes conceitos:
- Componentização
- Validação de dados com Zod
- Integração entre React Hook Form e Zod
- Persistência de dados no navegador
- Tipagem com TypeScript

# 📂 Estrutura do Projeto
src/
 ├── pages/
 │    ├── ToDo/
 │    ├── Contacts/
 │    ├── Finance/
 │
 ├── schemas/
 │    ├── todoSchema.ts
 │    ├── contactsSchema.ts
 │    ├── financeSchema.ts
 │
 ├── components/
 ├── routes/

 Os schemas de validação ficam separados da lógica dos componentes, seguindo o princípio de separação de responsabilidades.

 ## 📋 Funcionalidades
 ### ✔ ToDo
 - Criar tarefas com título e categoria
 - Marcar como concluída
 - Removerr tarefas
 - Persistência automática no LocalStorafe
### ✔ Contacts
- Cadastro de contatos
- Validação de formúlarios com Zod
- Persistência no LocalStorage
### ✔ Finance
- Registro de entradas e saídas
- Validação de dados
- Reset de formulário com valor padrão
- Persistência no LocalStorage

## 📖 User Stories
### ToDo
- Como utilizador, eu quero adicionar tarefas com título e categoria para organizar minhas atividades.
- Como utilizador, eu quero marcar tarefas como concluídas para acompanhar meu progresso.
- Como utilizador, eu quero que minhas tarefas permaneçam salvas mesmo após atualizar a página.
### Contacts
- Como utilizador, eu quero cadastrar contatos para organizar minhas conexões.
- Como utilizador, eu quero que os dados dos contatos fiquem salvos após atualizar a página.
### Finance
- Como utilizador, eu quero registrar entradas e saídas financeiras para controlar meus gastos.
- Como utilizador, eu quero visualizar o saldo atualizado automaticamente.

## ▶ Como executar o projeto
### 1. Clone o repositório:
git clone <url-do-repositorio>
### 2. Instale as dependências:
npm install
### 3. Execute o projeto:
npm run dev
### 4. Acesse no navegador:
http://localhost:5173

## Autor
Desenvolvido como parte de estudo em Desenvolvimento Front-End.
Feito por: *Letícia Fonseca de Brito*
