const mongoose = require('mongoose');

const uri = 'mongodb://localhost/tienda_db'

mongoose.connect(uri,        
{
    useCreateIndex: true,                                                            
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
    
})
.then(function()
{
    console.log("Se conecto correctamente a la Database")
})
.catch(function(error)
{
    console.log("Se presentó el error: ", error)
})

mongoose.connection.on('close',()=>{
    console.log("se cerró la conexión con mongodb: ", uri)
})

