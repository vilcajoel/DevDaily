const express = require('express'),
      database = require('./database.js'),
      cors = require('cors'),
      rutas = require('./rutas/rutas.js'),
      rutaProductos = require('./rutas/rutaProductos.js')

//Inicializaciones:
const PORT = 4000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false})); 
app.use('/API',rutas);
app.use('/catalogo',rutaProductos);


app.listen(PORT);
console.log('Servidor en puerto: ', PORT)