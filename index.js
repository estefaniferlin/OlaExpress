const express = require('express'); //carregar pacote express
const cors = require('cors');//carregar pacote cors
const { response } = require('express');

const app = express();

app.use(express.json()); // express vai ser permitido de usar json
app.use(express.urlencoded({extended:false})); // responsavel por decodificar o que vem da url
app.use(cors()); // permitir que ele use o cors, que aceite requisições de domínios diferentes fora do nosso

// método que vai responder a uma requisção
const ola = (request, response) => {
    response.status(200).json("Seja bem vindo ao Express");
}

const pegaDados = (request, response) => {
    const {nome, profissao} = request.body; // serao extraidas do request.body // quero extraire informaçções que vou mandar pro corpo da requislção
    
    response.status(201).json({nome : nome, profissao : profissao,
                            mensagem : "Dados recebidos:"});
}


app
    .route("/ola")
    .get(ola) // cria uma rota ola que quando eu executar o metdo get, o metodo ola sera executado
    .post(pegaDados) // quando é post vai pegar o metodo pegaDados, quando o metodo é get vai pra ola
app.listen(3002, () => {  // pode receber a porta e o metodo que sera chamado // levantar a aplicação
    console.log('Servidor rodando na porta 3002');
})




