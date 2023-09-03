import mongoose from 'mongoose';

import { app, port } from './app.js';

// Run Server
app.listen(port, () => {
    console.log('server running on port', port);
});

// Conexion Mong DB
mongoose.connect("mongodb://localhost:27017/animelatam", { 
useUnifiedTopology : true ,
useNewUrlParser: true})
    .then( ()=>(
        console.log("db is connected")
    ))
    .catch( (err)=>(
        console.error("Se ha producido error "+err)
    ));