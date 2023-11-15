function deleteEspecifico(r)
{
var i=r.parentNode.parentNode.rowIndex
document.getElementById('myTable').deleteRow(i)
}

function insertEspecificoInTable(){
var table = document.getElementById("myTable");
var newRow = table.insertRow(-1);
newRow.insertCell().innerHTML = newRow.rowIndex;
newRow.insertCell (-1) .innerHTML = "<input type = 'button' value = 'Delete' onclick = 'deleteRow (this)'>";
}

function deleteSubEspecifico(r)
{
var i=r.parentNode.parentNode.rowIndex
document.getElementById('myTable').deleteRow(i)
}

function insertSubEspecificoInTable(){
var table = document.getElementById("myTable");
var newRow = table.insertRow(-1);
newRow.insertCell().innerHTML = newRow.rowIndex;
newRow.insertCell (-1) .innerHTML = "<input type = 'button' value = 'Delete' onclick = 'deleteRow (this)'>";
}


function contarLetras(letras) {
    var objeto = {}; 
    for(var i in letras){
        objeto[letras[i]] = ( objeto[letras[i]] || 0 ) + 1; 
    }
    return objeto;
}

function envioP(){
  
  let prueba = document.getElementById('prueba').value;
  
  const cantidadDeCaracteres = prueba.replace(/ /g,'').length;
    
  let imprimirResultado = '';
  imprimirResultado += `${cantidadDeCaracteres}`;
  
  

  document.getElementById('conteo').innerHTML = imprimirResultado;
}