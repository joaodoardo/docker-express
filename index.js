const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Olá Arthur e colegas do BSI!");
});

app.get('/api', (req, res) => {
    res.json({ message: 'Bem-vindo à minha API!' });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
