const express = require("express")
const app = express()
const livrosRoutes = require("./livrosRoutes")

app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).send("Bem-vindo a API da livraria!")
})

app.use("/livros", livrosRoutes)

app.listen(3000, () => {
    console.log("Servidor ativado com sucesso: http://localhost:3000/")
})