const express = require('express');
const route = express.Router();

const conexion = require('./database/db');


route.get('/', function (req, res){
    conexion.query('SELECT * FROM general', function(error, results1){
        if(error){
           console.log(error);
        }else{
            conexion.query('SELECT * FROM especifico', function(error, results2){
                if(error){
                   console.log(error);
                }else{
                    conexion.query('SELECT * FROM subobjetivoespecifico', function(error, results3){
                        if(error){
                           console.log(error);
                        }else{
                                const id_subobjespecifico = req.params.id_subobjespecifico;
                                conexion.query(`SELECT  COUNT(*) total FROM ( SELECT enero as nota FROM subobjetivoespecifico WHERE id_subobjespecifico = "${id_subobjespecifico}" UNION ALL SELECT febrero as nota FROM subobjetivoespecifico WHERE id_subobjespecifico =  "${id_subobjespecifico}" UNION ALL SELECT marzo as nota FROM subobjetivoespecifico WHERE id_subobjespecifico =  "${id_subobjespecifico}" UNION ALL SELECT abril as nota FROM subobjetivoespecifico WHERE id_subobjespecifico =  "${id_subobjespecifico}" UNION ALL SELECT mayo as nota FROM subobjetivoespecifico WHERE id_subobjespecifico =  "${id_subobjespecifico}" UNION ALL SELECT junio as nota FROM subobjetivoespecifico WHERE id_subobjespecifico =  "${id_subobjespecifico}" UNION ALL SELECT julio as nota FROM subobjetivoespecifico WHERE id_subobjespecifico =  "${id_subobjespecifico}" UNION ALL SELECT agosto as nota FROM subobjetivoespecifico WHERE id_subobjespecifico =  "${id_subobjespecifico}" UNION ALL SELECT septiembre as nota FROM subobjetivoespecifico WHERE id_subobjespecifico =  "${id_subobjespecifico}" UNION ALL SELECT octubre as nota FROM subobjetivoespecifico WHERE id_subobjespecifico =  "${id_subobjespecifico}" UNION ALL SELECT noviembre as nota FROM subobjetivoespecifico WHERE id_subobjespecifico =  "${id_subobjespecifico}" UNION ALL SELECT diciembre as nota FROM subobjetivoespecifico WHERE id_subobjespecifico =  "${id_subobjespecifico}" ) tbl_tmp GROUP BY nota`,function(error, results4){
                                    if(error){
                                       console.log(error);
                                    }else{
                                   res.render('index', {results1:results1, results2:results2, results3:results3, results4:results4});
                                    }
                                    
                                });
                        }
                    });
        }
    }); 
    }
});
});


route.get('/create', (req, res)=>{
    res.render('create');
})

route.get('/edit/:id_objgeneral', (req,res)=>{    
    const id_objgeneral = req.params.id_objgeneral;
    var query = `SELECT * FROM general WHERE id_objgeneral="${id_objgeneral}" `;
    conexion.query(query, (error, results) => {
        if (error) {
            throw error;
        }else{            
            res.render('editgeneral', {results:results[0]});            
        }        
    });
});

route.get('/delete/:id_objgeneral', (req, res) => {
    const id_objgeneral = req.params.id_objgeneral;
    conexion.query('DELETE FROM general WHERE id_objgeneral = ?',[id_objgeneral], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
    })
});


route.get('/edit1/:id_subobjespecifico', (req,res)=>{    
    const id_subobjespecifico = req.params.id_subobjespecifico;
    conexion.query('SELECT * FROM subobjetivoespecifico WHERE id_subobjespecifico=?',[id_subobjespecifico] , (error, results) => {
        if (error) {
            throw error;
        }else{            
            res.render('editsubespecifico.ejs', {id_subobjespecifico:results[0]});            
        }        
    });
});

route.get('/delete1/:id_subobjespecifico', (req, res) => {
    const id_subobjespecifico = req.params.id_subobjespecifico;
    conexion.query('DELETE FROM subobjetivoespecifico WHERE id_subobjespecifico = ?',[id_subobjespecifico], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
    })
});


route.get('/edit2/:id_objespecifico', (req,res)=>{    
    const id_objespecifico = req.params.id_objespecifico;
    conexion.query('SELECT * FROM especifico WHERE id_objespecifico=?',[id_objespecifico] , (error, results) => {
        if (error) {
            throw error;
        }else{            
            res.render('editespecifico.ejs', {id_objespecifico:results[0]});            
        }        
    });
});

route.get('/delete2/:id_objespecifico', (req, res) => {
    const id_objespecifico = req.params.id_objespecifico;
    conexion.query('DELETE FROM especifico WHERE id_objespecifico = ?',[id_objespecifico], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
    })
});





const crud = require('./controllers/crud');
route.post('/save', crud.save);
route.post('/update', crud.update);
route.post('/save1', crud.save1);
route.post('/update1', crud.update1);
route.post('/save2', crud.save2);
route.post('/update2', crud.update2);


module.exports= route;