$(function () {
    // 入口函数
    // --------------------------  切换登录和注册的盒子 -------------
    // 点击去注册
    $('.login a').click(function () {
        $('.login').hide().next().show();
    });

    // 点击去登录
    $('.register a').click(function () {
        $('.register').hide().prev().show();
    });

});