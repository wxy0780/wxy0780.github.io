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
$(".funny form").submit(function(){
  var funny_B = $("#bugA").val();
  var funny_C = $("#bugB").val();
  var funny_A = confirm("您确定要转走"+funny_C+"个滑稽币吗?");
  var funny_E = Number(funny_B);
  var funny_F = Number(funny_C);
  if (funny_A == true){
    if(localStorage.funnyB < funny_F){
      alert("数量不足!");
    }else{
      var funny_D = localStorage.funnyB - funny_F;
      localStorage.funnyB = funny_D;
      var funny_G = funny_mi(funny_B);
      var funny_H = funny_mi(funny_C);
      $("#bugC").val(">"+funny_G+funny_H+"<");
      alert("已转走,剩余"+localStorage.funnyB+"。\n请把下面的提币码发送给对方!");
    }
  }else{
    alert('交易已取消');
  }
});
$(".copyI .open").click(function(){
  $(".copyI .inpu").select();
});

















































