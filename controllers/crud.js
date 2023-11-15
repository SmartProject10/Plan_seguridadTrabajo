const conexion= require ('../database/db');


exports.save = (req, res)=>{
  const id_objgeneral = req.body.id_objgeneral;
  const objgeneral = req.body.objgeneral;

  conexion.query('INSERT INTO general SET ?',{ id_objgeneral:id_objgeneral, objgeneral:objgeneral}, (error, results)=>{
    if(error){
      console.log(error);
    }else{
      res.redirect('/',);
    }
  })
}

exports.update = (req, res)=>{
  const id_objgeneral = req.body.id_objgeneral;
  const objgeneral = req.body.objgeneral;

  var updateQuery = `UPDATE general SET objgeneral = "${objgeneral}" WHERE id_objgeneral = "${id_objgeneral}"`;
 
  conexion.query(updateQuery,(error, results)=>{
    if(error){
      console.log(error);
    }else{
      res.redirect('/');
    }
  });
}


exports.save1 = (req, res)=>{
  const id_subobjespecifico = req.body.id_subobjespecifico;
  const descripcion = req.body.descripcion;
  const responsable = req.body.responsable;
  const area = req.body.area;

  const enero = req.body.enero;
  const febrero = req.body.febrero;
  const marzo = req.body.marzo;
  const abril = req.body.abril;

  const mayo = req.body.mayo;
  const junio = req.body.junio;
  const julio = req.body.julio;
  const agosto = req.body.agosto;

  const septiembre = req.body.septiembre;
  const octubre = req.body.octubre;
  const noviembre = req.body.noviembre;
  const diciembre = req.body.diciembre;
  conexion.query('INSERT INTO subobjetivoespecifico SET ?',{ id_subobjespecifico:id_subobjespecifico, descripcion:descripcion, 
    responsable:responsable, area:area,enero:enero, febrero:febrero, marzo:marzo, abril:abril, mayo:mayo,
    junio:junio, julio:julio, agosto:agosto, septiembre:septiembre,
    octubre:octubre, noviembre:noviembre, diciembre:diciembre}, (error, resultado)=>{
    if(error){
      console.log(error);
    }else{
      res.redirect('/');
    }
  })
}



exports.update1 = (req, res)=>{
  const id_subobjespecifico = req.body.subobjespecifico;
  const descripcion = req.body.descripcion;
  const responsable = req.body.responsable;
  const area = req.body.area;

  const enero = req.body.enero;
  const febrero = req.body.febrero;
  const marzo = req.body.marzo;
  const abril = req.body.abril;

  const mayo = req.body.mayo;
  const junio = req.body.junio;
  const julio = req.body.julio;
  const agosto = req.body.agosto;

  const septiembre = req.body.septiembre;
  const octubre = req.body.octubre;
  const noviembre = req.body.noviembre;
  const diciembre = req.body.diciembre;

  conexion.query('UPDATE subobjetivoespecifico SET ? WHERE id_subobjespecifico = ?',[{id_subobjespecifico:id_subobjespecifico, descripcion:descripcion, 
    responsable:responsable, area:area,enero:enero, febrero:febrero, marzo:marzo, abril:abril, mayo:mayo,
    junio:junio, julio:julio, agosto:agosto, septiembre:septiembre,
    octubre:octubre, noviembre:noviembre, diciembre:diciembre}, id_descripcion], (error, resultado)=>{
    if(error){
      console.log(error);
    }else{
      res.redirect('index');
    }
  })
}

exports.save2 = (req, res)=>{
  const id_objespecifico = req.body.id_objespecifico;
  const objespecifico = req.body.objespecifico;

  conexion.query('INSERT INTO especifico SET ?',{ id_objespecifico:id_objespecifico, objespecifico:objespecifico}, (error, results)=>{
    if(error){
      console.log(error);
    }else{
      res.redirect('/',);
    }
  })
}

exports.update2 = (req, res)=>{
  const id_objespecifico = req.body.id_objespecifico;
  const objespecifico = req.body.objespecifico;
  let sql = "update especifico SET objespecifico='"+req.body.objespecifico+"' where id_objespecifico="+req.body.id_objespecifico;
  conexion.query(sql, (error, results)=>{
    if(error){
      console.log(error);
    }else{
      res.redirect('index');
    }
  })
}