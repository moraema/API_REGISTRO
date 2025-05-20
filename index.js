import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import tareaRoutes from './src/routes/tarea.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).send('Registro OK, prueba desde main');
});


app.use('/tareas', tareaRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
