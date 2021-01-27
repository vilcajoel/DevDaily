const mongoose = require('mongoose');
const Schema = mongoose.Schema;	

	let ProductoSchema = new Schema(
    {
		nombreProducto:{ type: String, require: true},
		imagenUrl:{ type: String, require: true },
		cantidadDisponible:{ type: Number, require: true },
		precioUnitario:{ type: Number, require: true },
    });
    
let ProductoModel = mongoose.model('productoHP', ProductoSchema);					
module.exports = ProductoModel;											       