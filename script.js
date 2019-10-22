
function escrever(num1){
  
  var numero = document.getElementById('resultado').value += num1;
  
}

 function resultado(numero){

  var cont = document.getElementById("resultado").value;
  
  try {
    document.getElementById("resultado").value = eval(cont);
  }
  catch(err) {
    document.getElementById("resultado").value = "Erro de operação.";
    
  }
 
}