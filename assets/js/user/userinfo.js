$(function () {
    // 加载layui的form模块
    let form = layui.form;
    // ------------------   获取用户信息，为表单赋值（设置表单各项的默认值） ---------
    renderForm();
    function renderForm() {
        $.ajax({
            url: 'http://www.liulongbin.top:3007/my/userinfo',
            success: function (res) {
                // console.log(res);
                // 设置表单的四项值（id/username/nickname/email）
                // $('input[name="id"]').val(res.data.id);
                // $('input[name="nickname"]').val(res.data.nickname);
                // $('input[name="username"]').val(res.data.username);
                // $('input[name="email"]').val(res.data.email);
                // 快速为表单赋值
                form.val('user', res.data);
                // 为表单赋值，对象是有要求的，对象的key要和表单各项的name属性值相同
            },
            headers: {
                Authorization: localStorage.getItem('token')
            }
        });
    }

});