// 页面dom元素全部加载完毕之后，才会执行
$(function () {
    // 加载layer模块
    let layer = layui.layer;

    // ---------------------  退出 -------------------
    $('#logout').click(function () {
        // 1. 询问是否要删除
        layer.confirm('确定退出吗？', { icon: 3, title: '提示' }, function (index) {
            //do something
            // 2. 清除token
            localStorage.removeItem('token');
            // 3. 跳转到登录页面
            location.href = '/login.html';
            // 关闭窗口
            layer.close(index);
        });
        
    });
})