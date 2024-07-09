$(document).ready(function(){
    // 마우스 오버시 / 마우스 리브시
    $(".main li, .sub_bg").mouseover(function(){
        $(".sub , .sub_bg").stop().slideDown("fast");
    })// mouseover

    $(".main li, .sub_bg").mouseout(function(){
        $(".sub , .sub_bg").stop().slideUp("fast");
    })// mouseout

    // 뷰영역

    $(".fade li").eq(0).siblings().hide();
    // 이미지첫번째그림이 먼저 보이게 만들기(1)

    var n = 0;
    // 조건 걸어주기(2)

    setInterval(function(){
    // setInterval 걸어주기(3)

        $(".fade li").eq(n).fadeOut();

        if(n == 2){
            n=0;
        }else{
            n++;
        }
        console.log(n)

        $(".fade li").eq(n).fadeIn();
        // if조건 걸어주고 차례대로 fade in out 걸어주기(4)
    }, 2000)

    $(".p_up").click(function(){
        $(".popup").slideDown("fast");
    })

    $(".close").click(function(){
        $(".popup").slideUp("fast");
    })

})// jquery 끝