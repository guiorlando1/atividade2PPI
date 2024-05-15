import express from 'express';

const porta = 3000;
const host = '0.0.0.0';

const app = express();

//definindo as funcionalidades do servidor acessiveis por URLS


//declarar  para a nossa aplicação express onde esta a fonte dos arquivos estáticos
app.use(express.static('./publico'));

app.listen(porta, host, () => {
    console.log(`Servidor executando na porta http://${host}:${porta}`);
})