import express from 'express';

import routes from './routes';

const app = express();

// Route Params: identificar qual recurso eu quero atualizar ou deletar
// Query Params: Paginação, filtros, ordenação

app.use(express.json());
app.use(routes);

app.listen(3333);