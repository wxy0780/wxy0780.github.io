function funny_sui(){
  var funny_a = Math.random();
  var funny_b = funny_a * 10;
  var funny_c = parseInt(funny_b);
  return funny_c;
}
function funny_jia(funny_Fa){
  if(funny_Fa == 0){var funny_Fb = "☼";}
  if(funny_Fa == 1){var funny_Fb = "♮";}
  if(funny_Fa == 2){var funny_Fb = "▾";}
  if(funny_Fa == 3){var funny_Fb = "░";}
  if(funny_Fa == 4){var funny_Fb = "☒";}
  if(funny_Fa == 5){var funny_Fb = "☽";}
  if(funny_Fa == 6){var funny_Fb = "◗";}
  if(funny_Fa == 7){var funny_Fb = "▀";}
  if(funny_Fa == 8){var funny_Fb = "▻";}
  if(funny_Fa == 9){var funny_Fb = "▿";}
  if(funny_Fa == "☼"){var funny_Fb = 0;}
  if(funny_Fa == "♮"){var funny_Fb = 1;}
  if(funny_Fa == "▾"){var funny_Fb = 2;}
  if(funny_Fa == "░"){var funny_Fb = 3;}
  if(funny_Fa == "☒"){var funny_Fb = 4;}
  if(funny_Fa == "☽"){var funny_Fb = 5;}
  if(funny_Fa == "◗"){var funny_Fb = 6;}
  if(funny_Fa == "▀"){var funny_Fb = 7;}
  if(funny_Fa == "▻"){var funny_Fb = 8;}
  if(funny_Fa == "▿"){var funny_Fb = 9;}
  return funny_Fb;
}
function funny_mi(funny_Faa){
  var funny_Fab = funny_Faa.length;
  var funny_Fac = 0;
  var funny_Fae = "";
  while(funny_Fac != funny_Fab){
    var funny_Fad = funny_Faa.slice(funny_Fac,funny_Fac+1);
    var funny_Faf = funny_jia(funny_Fad);
    funny_Fae = funny_Fae + funny_Faf;
    funny_Fac++;
  }
  return funny_Fae;
}
var funny_d = funny_sui();
var funny_e = funny_sui();
var funny_f = funny_sui();
var funny_g = funny_d*100+funny_e*10+funny_f;
if (funny_d == 0){window.location.href = "./py.html";}
$(".funny .main").text("✺"+funny_g+"✺");
$(".funny form").submit(function(){
  var funny_h = $("#py .inputa .inpu").val();
  var funny_i = funny_h.slice(1,-1);
  var funny_j = funny_i.slice(0,3);
  var funny_k = funny_mi(funny_j);
  if(funny_k == funny_g){
    var funny_l = funny_i.slice(3);
    var funny_m = funny_mi(funny_l);
    localStorage.funnyB = Number(localStorage.funnyB) + Number(funny_m);
    alert("您收到了"+funny_m+"个滑稽币");
    window.location.href = "./py.html";
  }else{
    alert("错误");
    $("#py .inputa .inpu").val("");
  }
});


















































