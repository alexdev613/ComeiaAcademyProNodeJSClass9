import express, { Express, Request, Response } from 'express';
import connection from './database/sequelize';

import films from './app/controllers/FilmController';

const app: Express = express();
const port: number = 3333;

app.use('/films', films);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World com Express + TypeScript!!! <br><br> A porta utilizada é ' + port + '<br><br>O export padrão:<br><b>' + connection + '<br><br>');
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

connection();


// enum TamanhoCamisa {
//     P = 1,
//     M,
//     G
// }

// console.log(TamanhoCamisa.G);

// const helloWorld: string = 'Hello World';
// console.log(helloWorld);


// let firstName = "Dylan";
// firstName = 33;
// console.log('testando...');
