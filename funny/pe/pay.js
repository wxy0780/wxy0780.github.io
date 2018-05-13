function funny_mi(funny_Faa){
  time = new Date();
  year=time.getFullYear();
  months=time.getMonth();
  month=months+1;
  dates=time.getDate();
  funny_Fab = year * month * dates * 75369514 * Number(funny_Faa);
  return funny_Fab;
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
      var funny_G = funny_mi(funny_B+funny_C);
      $("#bugC").val(funny_G);
      alert("已转走,剩余"+localStorage.funnyB+"。\n请把下面的提币码发送给对方!");
    }
  }else{
    alert('交易已取消');
  }
});
$(".copyI .open").click(function(){
  $(".copyI .inpu").select();
});

















































