const express = require('express');
const app= express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/', require('./route'));



app.listen(5000, () =>{
    console.log("El servidor esta corriendo en http://localhost:5000");
})