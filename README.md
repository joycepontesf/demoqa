## 📌 Sobre  
Projeto de testes automatizados, dividido em duas etapas:  
1. **Teste de API** – Automação de fluxos REST.  
2. **Teste de Frontend** – Automação de elementos visuais.  

O objetivo é demonstrar conhecimento em **automação de testes**, boas práticas de código e uso de frameworks modernos.  

---

## ⚙️ Tecnologias utilizadas  
- **Linguagem:** JavaScript  
- **Frameworks e Bibliotecas:**  
  - [Cypress](https://www.cypress.io/)
  - [Faker](https://fakerjs.dev/)
- **Ferramentas de apoio:**  
  - [Swagger](https://swagger.io/) *(para testes manuais de API)*  

---

## 🚀 Fluxos Automatizados  

### Parte 1 – API  
Endpoints utilizados (base: [Swagger](https://demoqa.com/swagger/)):  

1. **Criar um usuário**  
   `POST https://demoqa.com/Account/v1/User`  

2. **Gerar token de acesso**  
   `POST https://demoqa.com/Account/v1/GenerateToken`  

3. **Confirmar autorização do usuário**  
   `POST https://demoqa.com/Account/v1/Authorized`  

4. **Listar livros disponíveis**  
   `GET https://demoqa.com/BookStore/v1/Books`  

5. **Alugar dois livros de livre escolha**  
   `POST https://demoqa.com/BookStore/v1/Books`  

6. **Listar detalhes do usuário com livros escolhidos**  
   `GET https://demoqa.com/Account/v1/User/{userID}`  

---

### Parte 2 – Frontend  
- Automação de cenários em interface Web utilizando **Cypress**.  
- Estrutura baseada em **Cypress Commands** para maior manutenibilidade.  
- Testes escritos de forma clara e objetiva.  

---

## 📂 Estrutura do Projeto  
```bash
.
├── cypress/               # Testes automatizados (API e Frontend)
│   ├── e2e/
│   ├── fixtures/
│   ├── support/
├── reports/               # Relatórios de execução
├── package.json
├── README.md
```

---

## ▶️ Como executar  

### Pré-requisitos  
- [Node.js](https://nodejs.org/) (>= 18.x)  
- [npm](https://www.npmjs.com/)  

### Instalação  
```bash
git clone https://github.com/joycepontesf/demoqa.git
cd demoqa
npm install
```

### Rodando os testes  
- **API**  
```bash
npx cypress run --spec "cypress/e2e/api/*.cy.js"
```

- **Frontend**  
```bash
npx cypress run --spec "cypress/e2e/ui/*.cy.js"
```

- **Modo interativo**  
```bash
npx cypress open
```

---

## 📄 Licença  
Este projeto foi desenvolvido apenas para fins de estudo.  
