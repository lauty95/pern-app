const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importa cors
const morgan = require('morgan'); // Importa morgan
const taskRoutes = require('./routes/taskRoutes');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

// Configura morgan para que registre los logs de las solicitudes HTTP en la consola
app.use(morgan('dev'));

// Configura CORS para permitir todas las solicitudes
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Asigna las rutas de taskRoutes al middleware de la aplicación
app.use('/', taskRoutes);

// Puerto en el que escucha el servidor
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
