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


    // ------------------   表单提交的时候，完成用户信息的更新 -----------------
    // 1. 注册表单的提交事件
    $('form').on('submit', function (e) {

        // 2. 阻止默认行为
        e.preventDefault();
        // 3. 收集表单数据
        let data = form.val('user');
        // console.log(data); // {id: "900", username: "abcdabcd", nickname: "你好123", email: "232323@qq.comadsf"}
        // 删除掉username，因为接口不需要这个参数。不过这个接口测试过，传过去也没事
        // 4. ajax提交数据给接口
        $.ajax({
            type: 'POST',
            url: 'http://www.liulongbin.top:3007/my/userinfo',
            data: data,
            headers: {
                Authorization: localStorage.getItem('token')
            },
            success: function (res) {
                // console.log(res);
                if (res.status === 0) {
                    // 5. 修改成功，给出提示，调用父页面的getUserInfo函数，从新渲染index.html 
                    layer.msg(res.message);
                    // 调用父页面的getUserInfo函数，从新渲染index.html 
                    window.parent.getUserInfo();
                }
            }
        });
    });
});