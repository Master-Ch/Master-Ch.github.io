//鼠标爱心跟随
var heart = document.querySelector('.heart-eye');
console.log(heart);

document.onmousemove = function (e) {
    heart.style.top = -12 + e.pageY + 'px';
    heart.style.left = -15 + e.pageX + 'px';
};

    if (!localStorage.getItem("message")) {
        localStorage.setItem("message", 'true')
        alert('小改动，已经支持更换背景图片，更换的背景将不会因网站刷新而重置！特此通知(下次打开将不会显示此通知)！！！')
    }
//切换背景图片
var pic = document.getElementsByClassName("L");
var back = ['url(images/1.jpg)', 'url(images/2.jpg)', 'url(images/3.jpg)', 'url(images/4.jpg)', 'url(images/5.jpg)', 'url(images/6.jpg)', 'url(images/7.jpg)', 'url(images/8.jpg)', 'url(images/9.jpg)', 'url(images/10.jpg)',
    'url(images/11.jpg)', 'url(images/12.jpg)', 'url(images/13.jpg)', 'url(images/14.jpg)', 'url(images/15.jpg)', 'url(images/16.jpg)','url(images/17.jpg)','url(images/18.jpg)'];
for (let i = 0; i < pic.length; i++) {
    pic[i].onclick = function () {
        document.body.style.backgroundImage = back[i];
        localStorage.setItem("background", back[i]);
        console.log(localStorage.getItem("background"))
    }
}
//页面加载用户设置
document.body.style.backgroundImage = localStorage.getItem("background")

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
window.onclick = function (event) {
    if (event.target == document.getElementById('main')) {
        modal.style.width = "0";
    }
}
// 侧边栏下拉框动画
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }
}

// 背景音乐
function a() {
    var audio = document.getElementById('audio-music');
    if (audio.paused) {
        document.getElementById('a').style.cssText = "background:url(../images/play.gif); background-size:cover; border:none;";
        audio.play();// 播放
    }
    else {
        document.getElementById('a').style.cssText = "background:url(../images/pause.png); background-size:cover;border:none;";
        audio.pause();// 暂停
    }
}

// 备忘录
window.onload = function () {

    var txt = localStorage["input"];
    if (txt) input.innerHTML = txt;

    save.onclick = function () {
        if (input.value) {
            localStorage["input"] = input.value;
            input.innerHTML = input.value;
            alert("保存成功！不要忘记呦！");
        }
    }
}
/*var audio = document.getElementById('audio-music'); 
window.addEventListener("canplaythrough", function() {
            audio.play();
})*/

//搜索按钮
$('#search-btn').click(function () {
    if ($('#search-wd').val() == '') return window.open($('input:radio:checked').val(), '_blank');
    href = $('input:radio:checked').val() + $('#search-wd').val();
    window.open(href, '_blank');

});
//搜索回车
$('#search-wd').keydown(function (e) {
    if (e.keyCode == 13) {
        if ($('#search-wd').val() == '') return false;
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

    document.getElementById("my-tool").style.animation = "bounceInRight 1s ease 0s 1"
    document.getElementById("my-tool").style.display = "block";
}
// 关闭按钮,过度动画
function closeTool() {
    document.getElementById("my-tool").style.animation = "zoomOutDown 1s ease 0s 1"

    setTimeout(function () {
        document.getElementById("my-tool").style.display = "none";
        document.getElementById("my-tool").style.animation = "";
    }, 1000);

}
//禁止查看代码，禁用F12,禁用右键，禁用ctrl+shift+i
// window.onload=function(){
//     document.onkeydown=function(){
//     var e=window.event||arguments[0];
//     if(e.keyCode==123){
//     alert("小样你想干嘛？");
//     return false;
//     }else if((e.ctrlKey)&&(e.shiftKey)&&(e.keyCode==73)){
//     alert("还是不给你看。。");
//     return false;
//     }
//     };
//     document.oncontextmenu=function(){
//     alert("小样不给你看");
//     return false;
//     }
//     }
// 显示时间
//document.getElementById('time').innerHTML = new Date().toLocaleString()+ ' 星期' + '日一二三四五六'.charAt(new Date().getDay());
setInterval("document.getElementById('time').innerHTML=new Date().toLocaleString()+'&nbsp'+' 星期'+'日一二三四五六'.charAt(new Date().getDay());", 1000);