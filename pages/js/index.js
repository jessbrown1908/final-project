$(function() {
  $("#console-box").append("console is ready...");
//Prints to Console
  $("li").click(function() {
    $("#console-box").append(
      "<br>class:" + $(this).attr("class") + "|value:" + $(this).text() + "."
    );
    
//Prints to JSON
    $("#console-box").append("{'dateSelected':'what they clicked on'}");
    $(this)
      .toggleClass("selected")
      .siblings()
      .removeClass("selected");
    
//Displays boxes selected
   $("#selection-box").append($(this).text());
  
  });
});