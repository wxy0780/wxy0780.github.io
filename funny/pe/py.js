function funny_sui(){
  var funny_a = Math.random();
  var funny_b = funny_a * 10;
  var funny_c = parseInt(funny_b);
  return funny_c;
}
function funny_mi(funny_Faa){
  time = new Date();
  year=time.getFullYear();
  months=time.getMonth();
  month=months+1;
  dates=time.getDate();
  funny_Fab = Number(funny_Faa) / year / month / dates / 75369514;
  return funny_Fab;
}
var funny_d = funny_sui();
var funny_e = funny_sui();
var funny_f = funny_sui();
var funny_g = funny_d*100+funny_e*10+funny_f;
if (funny_d == 0){window.location.href = "./py.html";}
$(".funny .main").text("✺"+funny_g+"✺");
$(".funny form").submit(function(){
  var funny_h = $("#py .inputa .inpu").val();
  var funA = funny_mi(funny_h);
  var funB = funA.toString();
  var funC = funB.slice(0,3);
  var funD = funB.slice(3);
  if(funC == funny_g){
    localStorage.funnyB = Number(localStorage.funnyB) + Number(funD);
    alert("您收到了"+funD+"个滑稽币");
    window.location.href = "./py.html";
  }else{
    alert("错误");
    $("#py .inputa .inpu").val("");
  }
});


















































