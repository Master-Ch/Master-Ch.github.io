function timeToStr(time) {
    var m = 0,
        s = 0,
       _m = '00',
       _s = '00';
    time = Math.floor(time % 3600);
    m = Math.floor(time / 60);
    s = Math.floor(time % 60);
    _s = s < 10 ? '0' + s : s + '';
    _m = m < 10 ? '0' + m : m + '';
    return _m + ":" + _s;
}
$(function(){
    //播放完毕
    $('#mp3Btn').on('ended', function() {
        console.log("音频已播放完成");
        $('.btn-audio').css({'background':'url(images/m_1.png) no-repeat center bottom','background-size':'cover'});
    })
    //播放器控制
    var audio = document.getElementById('mp3Btn');
    audio.volume = .3;
    $('.btn-audio').click(function() {
        event.stopPropagation();//防止冒泡
        if(audio.paused){ //如果当前是暂停状态
            $('.btn-audio').css({'background':'url(images/m_2.png) no-repeat center bottom','background-size':'cover'});
            audio.play(); //播放
            var duration=audio.duration;
            $(".range").attr({'max':duration});
            $('.max').html(timeToStr(duration));
            function timer(){
                var t=parseInt(Math.round(audio.currentTime));
                $(".range").val(t);
                $('.cur').text(timeToStr(t));
                t=parseInt(audio.currentTime);
                if(t<duration){
                  setTimeout(timer, 1000);
                }else{
                  clearTimeout(timer);
                }
              }
            timer();
        }
        else{//当前是播放状态
            $('.btn-audio').css({'background':'url(images/m_1.png) no-repeat center bottom','background-size':'cover'});
            audio.pause(); //暂停
        }
    });
    $(".range").on('change',function(){
        audio.currentTime=this.value;
        console.log(this.value)
        $(".range").val(this.value);
    });
})
/*function Test() {
    if (document.body.style.backgroundImage.indexOf('images/1.png') > 0) {
        document.body.style.backgroundImage = "url(images/2.png)";
    }
    else {
        document.body.style.backgroundImage = "url(image/1.png)";
    }

}*/
/*<img id="image" src="111.png" οnmοusedοwn="secound(this)" οnmοuseup="first(this)">
<button οnclick="change()">点击换图片</button>
<script>
    function change() {
          var x = document.getElementById("image").getAttribute("src");
 
          if (x=="111.png"){
              document.getElementById("image").src="222.png";
          }
          else{
              document.getElementById("image").src="111.png";
          }
          //alert(x);
    }
 
    function secound(obj){
        obj.src="222.png";
        console.log(obj.getAttribute("src"));
    }
 
    function first(obj){
        obj.src="111.png";
        console.log(obj.getAttribute("src"));
    }
</script>
点击切换图片*/