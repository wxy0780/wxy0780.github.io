//加载链接
var a = "";
for(var b = 1;b<allHref+1;b++){
  eval("var c = HrefI"+b+";");
  eval("var d = HrefN"+b+";");
  eval("var e = Href"+b+";");
  var a = a+"<a href='"+e+"'><div><img src='"+c+"'><p>"+d+"</p></div></a>";
}
$(".link").html(a);
var a;
//外部链接
var as = "";
for(var bs = 1;bs<allHrefs+1;bs++){
  eval("var cs = HrefIs"+bs+";");
  eval("var ds = HrefNs"+bs+";");
  eval("var es = Hrefs"+bs+";");
  var as = as+"<a href='"+es+"'><div><img src='"+cs+"'><p>"+ds+"</p></div></a>";
}
$(".links").html(as);
var as;
//搜索开关部分
$(".rearchB").hide();
$(".rearchBs").hide();
$(".rearch").hide();
var rearch = "off";
$("#openRearch").click(function(){
  if(rearch == "off"){
    $(".rearchB").fadeIn(500);
    $(".rearchBs").fadeIn(500);
    $(".rearch").fadeIn(500);
    $("#rearchImg").attr("src","/img/2.png");
    rearch = "on";
  }else{
    $(".rearchB").fadeOut(500);
    $(".rearchBs").fadeOut(500);
    $(".rearch").fadeOut(500);
    $("#rearchImg").attr("src","/img/1.png");
    rearch = "off";
  }
});



























































