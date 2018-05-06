//js.js
var textI = "";
var textT = "";
var sett = "";
function prints(textF){textT = $(".text").html();$(".text").html(textT + textF);}
function color(colorf,textf){prints("<p style='color:#" +colorf+ ";'>" +textf+ "</p>");}
$(".input form").submit(function(){
  textI = $(".inpu").val();
  $(".inpu").val("");
  prints(">" + textI +"<br>");
  if(textI == "cls"){$(".text").html("");}
  else if(textI == "exit"){}
  else if(textI.indexOf("echo") == 0){prints(textI.slice("5")+"<br>");}
  else if(textI.indexOf("print") == 0){prints(textI.slice("6")+"<br>");}
  else if(textI == "delSet"){localStorage.clear();prints("已删除所有web存储<br>");}
  else if(textI.indexOf(";") != -1){eval(textI);}
  else if(textI.indexOf("<") != -1){}
  else if(textI == "help"){prints("cls  清屏<br>set  网页存储查改<br>以“;”结尾的js代码<br>delSet  清除所有web存储<br>");}
  else if(textI.indexOf("set") == 0){if(textI.indexOf(" ") != -1){if(textI.indexOf("=") != -1){seta = textI.slice("4");setb=seta.indexOf("=");sety=seta.slice("0",setb);setu=seta.slice(setb+1);eval("localStorage."+sety+"="+setu);}else{eval("sett = localStorage."+textI.slice("4"));prints(sett+"<br>");}}else{prints("用法:set [存储值]=[值]<br>")}}
  else{prints("不是内部或外部命令<br>");}
  viewH = $("html").height();
  $("body").scrollTop(viewH);
});
$(".text").html("java script命令行&#32;&#32;&#32;&#32;版本V1.0<br>");
//结束
























































