var bcrypt = require('bcryptjs');
const mongoose = require('mongoose');								
const Schema = mongoose.Schema;										

const UserSchema = new Schema(										     
{
	usuario:{ type: String, require: true, lowercase: true },
	correo:{ type: String, require: true, unique: true },
	contrasena:{ type: String, require: true, select: true},
	signupDate: {type: Date, default: Date.now()},
},
{
	timestamps: true
});


UserSchema.methods.encriptarContrasena = async function(contrasenaIngresada)
										{
											var salt = await bcrypt.genSalt(10);
											var hash = bcrypt.hash(contrasenaIngresada, salt);
											return hash;					
										};

UserSchema.methods.compararContrasena = async function(contrasenaIngresada)
										{
											return await bcrypt.compare(contrasenaIngresada, this.contrasena);
										};


let UsuarioModel = mongoose.model('UsuarioHP', UserSchema);				 
module.exports = UsuarioModel;											 