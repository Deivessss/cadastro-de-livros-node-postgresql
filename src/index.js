const express = require("express")
const app = express()
const database = require("./database")

app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).send("Bem-vindo a API da livraria!")
})

app.post("/livros", async (req, res) => {
    const {nome, autor, editora} = req.body
    if (!nome || !autor || !editora){
        return res.status(400).json({erro: "Todos os campos são obrigatórios: nome, autor e editora."})
    }
    try{
        const resultado = await database.query(
            "INSERT INTO livros (nome, autor, editora) VALUES ($1, $2, $3) RETURNING *",
            [nome, autor, editora]
        )
        return res.status(201).json({
            sucesso: "Livro cadastrado com sucesso:",
            livro: resultado.rows[0]
        })
    } catch (erro){
        console.error(erro)
        return res.status(500).json({erro: "Erro interno do servidor."})
    }
})

app.get("/livros", async (req, res) => {
    try{
        const resultado = await database.query("SELECT * FROM livros")
        if (resultado.rows.length === 0){
            return res.status(404).json({resultado: "Nenhum livro cadastrado no momento."})
        } else {
            return res.status(200).json({livros: resultado.rows})
        }
    } catch (erro) {
        console.error(erro)
        return res.status(500).json({erro: "Erro interno do servidor."})
    }
})

app.listen(3000, () => {
    console.log("Servidor ativado com sucesso: http://localhost:3000/")
})