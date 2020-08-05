$(document).ready(function(){
    console.log('Esta funcionando JQUERY')
        
}); 

   $(".entrada").css("background","blue").css("color","yellow").css("text-align", "center");
   
   $(".bu").css("background","red");

   $("#parrafo").css("background",);

  //$(".li1").css("background", "red");
   //$(".li2").css("background", "blue");
   //$(".li3").css("background", "yellow");
   //$(".li4").css("background", "green");
   //$(".li5").css("background", "#D6F6EE ");
   //$(".li6").css("background", "#E568F3 ");
   //$(".li7").css("background", "#EF96B4 ");
   //$(".li8").css("background", "#9DF66D ");
   //$(".li9").css("background", "#1ADFE8 ");
   //$(".li10").css("background", "#B16CC0 ");

   $("li").click(function(){
    $(this).addClass( "resaltar");});

    $("li").dblclick(function(){
        $(this).addClass( "resaltar2");});
    
   //$(".over").mouseover(function(){
           //$(this).css("background","blue").css("color","yellow");});

           //$(".over").mouseout(function(){
            //$(this).css("background","#ED88F4").css("color","black");});      

    function changein(){
        $(this).css("background","blue").css("color","yellow");
    }        

    function changeout(){
        $(this).css("background","#ED88F4").css("color","black");
    }

    $(".over").hover(changein,changeout);
