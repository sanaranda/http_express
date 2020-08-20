const express = require('express');
const app = express();

app.listen(3000, () => console.log ("Inicio de servidor exitoso")); // se inica un server

app.get( '/' , function (req, res){     //home
    res.sendFile(__dirname + '/index.html');
});
app.get( '/producto' , function (req, res){     //producto
    res.sendFile(__dirname + '/producto.html');
});
app.get( '/detalle' , function (req, res){     //detalle
    res.sendFile(__dirname + '/detalle.html');
});
app.get( '/carrito' , function (req, res){     //carrito
    res.sendFile(__dirname + '/carrito.html');
});
app.get( '/error' , function (req, res){     //error ver bien esto
    res.sendFile(__dirname + '/error.html');
});