var cifra="";
var acumular=0;
var suma=false;
var resta = false;

	function numero(elemento){
		//var numero=document.getElementById("uno").value;
		//console.log(numero);
		document.getElementById("display").value=cifra+elemento;
		cifra=document.getElementById("display").value;
	}

	function sumar(){
		if(resta){
		acumular=acumular-parseInt(cifra);
		document.getElementById("display").value=acumular;
		}else{
		acumular= acumular+parseInt(cifra);
		document.getElementById("display").value=acumular;
		console.log(acumular)
	    }
		cifra="";
		suma=true;
		resta=false;


	}

	function restar(){
		if(sumar){
			acumular=acumular+parseInt(cifra);
			document.getElementById("display").value=acumular;
        } else{
        	acumular= acumular-parseInt(cifra);
        	document.getElementById("display").value=acumular;
        }
		
		cifra="";
		suma=false;
		console.log(acumular)
		resta=true;


	}

	function multiplicar(){
    acumular=acumular*parseInt(cifra);
	document.getElementById("display").value=acumular;


	}

	function dividir(){
    acumular=acumular/parseInt(cifra);
	document.getElementById("display").value=acumular;

	}

	function resultado(){
	if(suma){

		document.getElementById("display").value=acumular+parseInt(cifra);
	}else if(resta){

		document.getElementById("display").value=acumular-parseInt(cifra);
	}
	acumular=parseInt(document.getElementById("display").value);
    cifra=0;
	}

