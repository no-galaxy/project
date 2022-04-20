// 获取元素 
var form = document.querySelector('form')
var inputs = document.getElementsByTagName('input');
var labels = document.getElementsByTagName('label');
var btn = document.getElementById('btn');
var span = document.querySelector('span');
// 正则表达式
var regName = /^[a-zA-z0-9_-]{6,18}$/;
// 密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)：
var regPassword = /^[a-zA-Z]\w{5,17}$/;
inputs[0].onblur = function() {
    if (this.value != '') {
        if (!regName.test(this.value)) {
            labels[0].className = 'wrong';
            labels[0].innerHTML = '请输入正确用户名格式';
        } else {
            labels[0].className = 'right';
            labels[0].innerHTML = '用户名格式输入正确';
        }
    } else {
            labels[0].className = '';
            labels[0].innerHTML = 'Username';
    }
};
inputs[1].onblur = function() {
    if (this.value != '') {
        if (!regPassword.test(this.value)) {
            labels[1].className = 'wrong';
            labels[1].innerHTML = '请输入正确的密码格式';
        } else {
            labels[1].className = 'right';
            labels[1].innerHTML = '密码格式输入正确';
        }
    } else {
        labels[1].className = '';
        labels[1].innerHTML = 'OldPassword';
    }
};
inputs[2].onblur = function() {
    if (this.value != '') {
        if (!regPassword.test(this.value)) {
            labels[2].className = 'wrong';
            labels[2].innerHTML = '请输入正确格式的密码';
        } else {
            labels[2].className = 'right';
            labels[2].innerHTML = '密码格式输入正确';
        }
    } else {
        labels[2].className = '';
        labels[2].innerHTML = 'NewPassword';
    }
}
btn.onclick = function() {
    var formData = new FormData(form);
    ajax ( {
        type: 'post',
        header: {
            'Content-Type':'application/json'
        },
        url: 'http://175.178.51.126:8091/smallA/updatePwd',
        data: {
            username: formData.get('username'),
            oldPassword: formData.get('oldPassword'),
            newPassword: formData.get('newPassword')
        },
        success: function(result, xhr) {
            console.log(result);
            if (result.msg == 'SUCCESS') {
            span.innerHTML = '密码修改成功，请返回登录界面';
        } else {
            span.innerHTML = result.msg
        }
        }
    })
}
