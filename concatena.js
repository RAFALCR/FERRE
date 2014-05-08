// JavaScript Document
function concatenar(operador)
{
	var NO = String;
	var AP = String;
	var NC = String;
	
	NO=document.getElementById("NS").value;
	AP=document.getElementById("AP").value;

	switch (operador)
	{
		case'A':
				 NC="BIENVENIDO"+NO+AP;
				 break;
		case'B':
				 document.getElementById("NS").value="";
     			 document.getElementById("AP").value="";
 				 document.getElementById("SC").value="";
     			 document.getElementById("ED").value="";
      			 document.getElementById("SX").value="";
				 NC="";		 
				 break;						
    }
	document.getElementById("CON").value=NC;

	
}