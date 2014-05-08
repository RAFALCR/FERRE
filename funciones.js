// JavaScript Document
function concatenar(operador) {
var NO = String;
var AP = String;
var NC = String;

NO=document.getElementById("NS").value;
AP=document.getElementById("AP").value;

switch (operador){
	case'A':
		NC="HOLA "+NO+AP+" "+"HAS SIDO AGREGADO CORRECTAMENTE";
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

$(document).on("pagecreate","#TAP",function(){
  $("p").on("tap",function(){
    $(this).hide();
  });                       
});

$(document).on("pagecreate","#TAPHOLD",function(){
  $("p").on("taphold",function(){
    $(this).hide();
  });                       
});

$(document).on("pagecreate","#SWIPE",function(){
  $("p").on("swipe",function(){
    $("span").text("HOLA! TE HAZ DESLIZADO");
  });                       
});

$(document).on("pagecreate","#SWIPELEFT",function(){
  $("p").on("swipeleft",function(){
    alert("TE HAZ DESLIZADO A LA IZQUIERDA!");
  });                       
});

$(document).on("pagecreate","#SWIPERIGHT",function(){
  $("p").on("swiperight",function(){
    alert("TE HAZ DESLIZADO A LA DERECHA!");
  });                       
});		

$(document).on("pagecreate",function(event){
  $(window).on("orientationchange",function(event){
    alert("Orientation changed to: " + event.orientation);
  });                     
});

$(document).on("pagecreate",function(event){
  $(window).on("orientationchange",function(){
    if(window.orientation == 0)
    {
      $("p").text("LA ORIENTACION DEL CELULAR ES VERTICAL!").css({"background-color":"yellow","font-size":"300%"});
    }
    else
    {
      $("p").text("LA ORIENTACION DEL CELULAR ES HORIZONTAL!").css({"background-color":"pink","font-size":"200%"});
    }
  });                   
});
