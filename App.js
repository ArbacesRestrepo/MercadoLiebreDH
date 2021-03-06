const express = require('express');
const path = require('path');

const app = express();

app.get('', (req,res) =>{
    //res.send("Ahora si entre");  // Permite enviar texto o codigo HTML
    res.sendFile( ( __dirname + '/Views/Home.html' ) );  // Permite enviar archivo HTML
});

app.use(express.static( path.resolve( __dirname, './Public') ) );
app.use(express.static( path.resolve( __dirname, './Views') ) );  

app.listen( process.env.PORT || 3000, () => {
    console.log( "Servidor corriendo" );
});

app.use('/Public/', express.static(__dirname + '/Public/'))


