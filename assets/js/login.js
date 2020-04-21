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

    // --------------------- 完成注册功能 ---------------------
    $('.register form').on('submit', function (e) {
        e.preventDefault();
        // 获取表单中的数据
        let data = $(this).serialize(); // serialize是根据表单各项的name属性获取值的，所以要检查表单各项的name属性
        // 发送ajax请求到接口，完成注册
        $.ajax({
            type: 'POST',
            url: 'http://www.liulongbin.top:3007/api/reguser',
            data: data,
            success: function (res) {
                alert(res.message);
                if (res.status === 0) {
                    // 注册成功，让登陆的盒子显示
                    $('.register').hide().prev().show();
                }
            }
        });
    });

});