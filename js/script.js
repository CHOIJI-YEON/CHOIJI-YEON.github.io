$(document).ready(function(){

    // #aboutme 까지 스크롤 시 로고 보이기
    $(window).scroll(function(){
        if($(this).scrollTop() >= Math.ceil($('#aboutme').offset().top)){
            $("#logo").show();
            $("header").css("background","rgba(0,46,72,0.7)");
        } else {
            $("#logo").hide();
            $("header").css("background","none");
        }
    });
    
    // header 에 마우스 올리면 배경 투명도 1 
    $("header").mouseover(function(){
        $(this).css("background","rgba(0,46,72,1");
    });
    $("header").mouseout(function(){
        $(this).css("background","rgba(0,46,72,0.7");
    });

    // 메뉴 클릭시 내부링크로 부드럽게 이동
    $('a[href^="#"]').on('click',function(e){
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html,body').stop().animate({
            'scrollTop':$target.offset().top
        },900,'swing',function(){
            window.location.hash = target;
        });
    });

    // 포트폴리오 - 화살표 이동
    var num = 0;
    var maxLength = $(".Intro>div").length;
    $(".Intro>div").eq(num).show();
    $(".Btn>img").bind("click",function(){
        num = num+1;
        if(num>maxLength-1){
            num = 0;
        }
        console.log(num);
        $(".Intro>div").hide();
        $(".Intro>div").eq(num).show();
    });

    // 배너 마우스 올리면 이미지 크게 보이기
    $("#design_pf img").mouseover(function(){
        $(this).css("transform","scale(1.1)");
    });
    $("#design_pf img").mouseout(function(){
        $(this).css("transform","none")
    })
});