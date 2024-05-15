import express from 'express';

const porta = 3000;
const host = '0.0.0.0';

const app = express();

const listarUsuario = [];

// Definindo as funcionalidades do servidor acessíveis por URLs
// Declarar para a nossa aplicação express onde está a fonte dos arquivos estáticos
app.use(express.static('./publico'));

app.get('/cadastrarUsuario', (req, resp) => {
  // Extraindo os dados do usuário pela requisição do HTML
  const { nome, sobrenome, usuario, cidade, rating } = req.query;

  // Adicionando novo usuário na lista
  listarUsuario.push({
    nome,
    sobrenome,
    usuario,
    cidade,
    rating,
  });
  resp.write('<html>');
  resp.write('<head>');
  resp.write('<title>Resultado do Cadastro</title>');
  resp.write('<meta charset="utf-8">');
  resp.write('</head>');
  resp.write('<body>');
  resp.write(`<h1>Usuário ${nome} ${sobrenome} cadastrado com sucesso!</h1>`);
  resp.write('<a href="/cadastrarUsuario.html">Continuar cadastrando...</a><br/>');
  resp.write('</br>');
  resp.write('<a href="/listarUsuario">Listar Usuários...</a>');
  resp.write('</body>');
  resp.write('</html>');
  resp.end();
});

app.use('/listarUsuario', (req,resp) =>{
    resp.write('<html>');
    resp.write('<head>');
    resp.write('<title>Resultado do Cadastro</title>');
    resp.write('<meta charset="utf-8">');
    resp.write('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">');
    resp.write('</head>');
    resp.write('<body>');
    resp.write('<h1>Lista de Jogadores</h1>');
    resp.write('<table class="table table-striped">');
    resp.write('<tr>');
    resp.write('<th>Nome</th>');
    resp.write('<th>Sobrenome</th>');
    resp.write('<th>Usuário</th>');
    resp.write('<th>Cidade</th>');
    resp.write('<th>Rating</th>');
    resp.write('</tr>');
    for(let i=0 ; i<listarUsuario.length; i++){
        resp.write('<tr>');
        resp.write(`<td>${listarUsuario[i].nome}`);
        resp.write(`<td>${listarUsuario[i].sobrenome}`);
        resp.write(`<td>${listarUsuario[i].usuario}`);
        resp.write(`<td>${listarUsuario[i].cidade}`);
        resp.write(`<td>${listarUsuario[i].rating}`);
        resp.write('</tr>');
    }
    resp.write('</table>');
    resp.write('<a href="/">Voltar </a>');
    resp.write('</body>');
    resp.write('<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>');
    resp.write('</html>');
    resp.end();
});

app.listen(porta, host, () => {
    console.log(`Servidor executando na porta http://${host}:${porta}`);
});

