const express = require("express")
const router = express.Router()
const database = require("./database")

router.post("/", async (req, res) => {
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

router.get("/", async (req, res) => {
    try{
        const resultado = await database.query("SELECT * FROM livros")
        if (resultado.rows.length === 0){
            return res.status(404).json({mensagem: "Nenhum livro cadastrado no momento."})
        } else {
            return res.status(200).json({livros: resultado.rows})
        }
    } catch (erro) {
        console.error(erro)
        return res.status(500).json({erro: "Erro interno do servidor."})
    }
})

router.get("/:id", async (req, res) => {
    try{
        const resultado = await database.query(
            "SELECT * FROM livros WHERE id = $1",
            [Number(req.params.id)]
        )
        if (resultado.rows.length === 0){
            return res.status(404).json({erro: "ID não encontrado."})
        } else {
            return res.status(200).json({livro: resultado.rows[0]})
        }
    } catch (erro) {
        console.error(erro)
        return res.status(500).json({erro: "Erro interno do servidor."})
    }
})

router.delete("/:id", async (req, res) => {
    try{
        const resultado = await database.query(
            "DELETE FROM livros WHERE id = $1 RETURNING *",
            [Number(req.params.id)]
        )
        if (resultado.rows.length === 0){
            return res.status(404).json({erro: "ID não encontrado."})
        } else {
            return res.status(200).json({
                sucesso: "Livro deletado com sucesso:",
                livro: resultado.rows[0]
            })
        }
    } catch (erro) {
        console.error(erro)
        return res.status(500).json({erro: "Erro interno do servidor."})
    }
})

module.exports = router