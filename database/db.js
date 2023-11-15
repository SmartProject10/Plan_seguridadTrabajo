const mysql = require('mysql');

const conexion= mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: '',
    database: 'administradores',
});

conexion.connect((error)=>{
if(error){
    console.error('Error en la conexión en la base de datos');
    return
}
  console.log('Conetando a la BD del sistema');
})

module.exports=conexion;


