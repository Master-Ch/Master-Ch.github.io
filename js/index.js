//鼠标爱心跟随
var heart = document.querySelector('.heart-eye');
console.log(heart);

document.onmousemove = function(e) {
    heart.style.top = -12+e.pageY + 'px';
    heart.style.left = -15 +e.pageX + 'px';
};

var pic = document.getElementsByClassName("L");
pic[0].onclick=function () {
    document.body.style.backgroundImage = 'url(images/1.jpg)';
}
pic[1].onclick=function(){
    document.body.style.backgroundImage = 'url(images/2.jpg)';
}
pic[2].onclick=function(){
    document.body.style.backgroundImage = 'url(images/3.jpg)';
}
pic[3].onclick=function(){
    document.body.style.backgroundImage = 'url(images/4.jpg)';
}
pic[4].onclick=function(){
    document.body.style.backgroundImage = 'url(images/5.jpg)';
}
pic[5].onclick=function(){
    document.body.style.backgroundImage = 'url(images/6.jpg)';
}
pic[6].onclick=function(){
    document.body.style.backgroundImage = 'url(images/7.jpg)';
}
pic[7].onclick=function(){
    document.body.style.backgroundImage = 'url(images/8.jpg)';
}


//切换背景图片
/*var oL1=document.getElementById('1');
var oL2=document.getElementById('2');
var oL3=document.getElementById('3');
var oL4=document.getElementById('4');
var oL5=document.getElementById('5');
var oL6=document.getElementById('6');
var oL7=document.getElementById('7');
var oL8=document.getElementById('8');
oL1.onclick=function () {
    document.body.style.backgroundImage = 'url(images/1.jpg)';
}
oL2.onclick=function(){
    document.body.style.backgroundImage = 'url(images/2.jpg)';
}
oL3.onclick=function(){
    document.body.style.backgroundImage = 'url(images/3.jpg)';
}
oL4.onclick=function(){
    document.body.style.backgroundImage = 'url(images/4.jpg)';
}
oL5.onclick=function(){
    document.body.style.backgroundImage = 'url(images/5.jpg)';
}
oL6.onclick=function(){
    document.body.style.backgroundImage = 'url(images/6.jpg)';
}
oL7.onclick=function(){
    document.body.style.backgroundImage = 'url(images/7.jpg)';
}
oL8.onclick=function(){
    document.body.style.backgroundImage = 'url(images/8.jpg)';
}*/

// 侧边栏显示动画
function openNav() {
    document.getElementById("mySide-nav").style.width = "33.5%";
}
function closeNav() {
    document.getElementById("mySide-nav").style.width = "0";
}

// 获取模型
var modal = document.getElementById('mySide-nav');

// 鼠标点击模型外区域关闭登录框
window.onclick = function(event) {
    if (event.target == document.getElementById('main')) {
        modal.style.width = "0";
    }
}
// 侧边栏下拉框动画
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
}

// 背景音乐
function a(){
var audio = document.getElementById('audio-music'); 
if(audio.paused){                 
  document.getElementById('a').style.cssText = "background:url(images/play.gif); background-size:cover; border:none;";
    audio.play();// 播放
}
else{
  document.getElementById('a').style.cssText = "background:url(images/pause.png); background-size:cover;border:none;";
     audio.pause();// 暂停
} 
}

// 备忘录
window.onload=function(){

var txt=localStorage["input"];
if(txt)input.innerHTML=txt;

save.onclick=function(){
   if(input.value){
      localStorage["input"]=input.value;
      input.innerHTML=input.value;
      alert("保存成功！不要忘记呦！");
   }
}
}
/*var audio = document.getElementById('audio-music'); 
window.addEventListener("canplaythrough", function() {
            audio.play();
})*/

//搜索按钮
$('#search-btn').click(function(){
    if($('#search-wd').val() =='') return window.open($('input:radio:checked').val(), '_blank');
    href = $('input:radio:checked').val() + $('#search-wd').val();
    window.open(href, '_blank');
  
  });
  //搜索回车
  $('#search-wd').keydown(function(e){
    if(e.keyCode==13){
      if($('#search-wd').val() =='') return false;
      href = $('input:radio:checked').val() + $('#search-wd').val();
      window.open(href, '_blank');
    }
  });

// 垂直选项卡
function openTap(event, tapName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tapName).style.display = "block";
    event.currentTarget.className += " active";
}
// 触发 id="defaultOpen" click 事件
document.getElementById("first").click();

// 打开按钮,过度动画
function openTool() {

    document.getElementById("my-tool").style.animation="bounceInRight 1s ease 0s 1"
    document.getElementById("my-tool").style.display = "block";
}
// 关闭按钮,过度动画
function closeTool() {
    document.getElementById("my-tool").style.animation="zoomOutDown 1s ease 0s 1"

    setTimeout(function () {
    document.getElementById("my-tool").style.display = "none";
    document.getElementById("my-tool").style.animation="";
    },1000);
    
}

// 显示时间
//document.getElementById('time').innerHTML = new Date().toLocaleString()+ ' 星期' + '日一二三四五六'.charAt(new Date().getDay());
setInterval("document.getElementById('time').innerHTML=new Date().toLocaleString()+'&nbsp'+' 星期'+'日一二三四五六'.charAt(new Date().getDay());",1000);