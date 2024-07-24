$(document).ready(function()
{
    $(".qy-mod-crumb div").hover(function()
    {
        $(this).css("background","green");
    },
    function()
    {
        $(this).css("background","rgba(24, 24, 30, .1)");
    });
    
    $(".qy-mod-nav-link ul li:first").mouseover(function()
    {
        $("#list1").show();
        $("#list2").hide();
        $("#list3").hide();
        $("#list4").hide();
        $("#list5").hide();
        $("#list6").hide();
        $("#list7").hide();
    });
    $(".qy-mod-nav-link ul li").eq(1).mouseover(function()
    {
        $("#list2").show();
        $("#list1").hide();
        $("#list3").hide();
        $("#list4").hide();
        $("#list5").hide();
        $("#list6").hide();
        $("#list7").hide();
    });
    $(".qy-mod-nav-link ul li").eq(2).mouseover(function()
    {
        $("#list3").show();
        $("#list1").hide();
        $("#list2").hide();
        $("#list4").hide();
        $("#list5").hide();
        $("#list6").hide();
        $("#list7").hide();
    });
    $(".qy-mod-nav-link ul li").eq(3).mouseover(function()
    {
        $("#list4").show();
        $("#list1").hide();
        $("#list2").hide();
        $("#list3").hide();
        $("#list5").hide();
        $("#list6").hide();
        $("#list7").hide();
    });
    $(".qy-mod-nav-link ul li").eq(4).mouseover(function()
    {
        $("#list5").show();
        $("#list1").hide();
        $("#list2").hide();
        $("#list3").hide();
        $("#list4").hide();
        $("#list6").hide();
        $("#list7").hide();
    });
    $(".qy-mod-nav-link ul li").eq(5).mouseover(function()
    {
        $("#list6").show();
        $("#list1").hide();
        $("#list2").hide();
        $("#list4").hide();
        $("#list5").hide();
        $("#list3").hide();
        $("#list7").hide();
    });
    $(".qy-mod-nav-link ul li").eq(6).mouseover(function()
    {
        $("#list7").show();
        $("#list1").hide();
        $("#list2").hide();
        $("#list4").hide();
        $("#list5").hide();
        $("#list6").hide();
        $("#list3").hide();
    });



});