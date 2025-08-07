# 📚Cadastro de Livros

Sistema de cadastro de livros desenvolvido em JavaScript/Node.js, com uso de API EXPRESS e integração ao banco de dados PostgreSQL.

---

### 📌Funcionalidades:
- Cadastrar novo livro  
- Consultar todos os livros cadastrados  
- Consultar por autor  
- Consultar por ID  
- Atualizar por ID  
- Remover livro

---

### 📌Tecnologias utilizadas:
- JavaScript
- Node.js
- API REST
- PostgreSQL
- Biblioteca/Framework: Express
- Biblioteca: pg

---

### 📌 Instruções para rodar o projeto:

1.
- Abra o PostgreSQL e execute o primeiro comando do arquivo `schema.sql` para criar o banco de dados.
- Em seguida, conecte-se ao banco livraria e execute o segundo comando para criar a tabela `livros`, onde os livros serão armazenados.

2. 
- No terminal, acesse a pasta do projeto com `cd`, e use o comando `npm install`, para instalar todas as bibliotecas necessárias. O NPM (Node Package Manager) já saberá quais pacotes instalar, devido ao arquivo `package.json`.

3. 
- No arquivo `database.js` que está na pasta `src`, edite os campos: `user`, `host`, `database` e `password`, substituindo pelas informações do seu banco de dados.

---

### 📌Instruções para realizar testes usando o Insomnia:

° Cadastrar novo livro:
- Método: POST
- Rota: http://localhost:3000/livros
- Body: enviar um JSON com as informações do livro:
```
{
"nome": "Nome do livro",
"autor": "Autor do livro",
"editora": "Editora do livro"
}
```
##
° Consultar todos os livros cadastrados:
- Método: GET
- Rota: http://localhost:3000/livros
##
° Consultar livro por ID:
- Método: GET
- Rota: Colocar o ID como parâmetro na rota/url: localhost:3000/livros/[id]  
Exemplo, se for id 99: http://localhost:3000/livros/99
##
° Remover/excluir livro:
- Método: DELETE
- Rota: Colocar o ID como parâmetro na rota/url: localhost:3000/livros/[id]