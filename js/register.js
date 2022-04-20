
// 获取元素
var btn = document.querySelector('.btn');
var form = document.getElementById('form');
var ps = document.getElementsByTagName('p');
var inputs = document.getElementsByTagName('input');
// 正则表达式
var regName = /^[a-zA-z0-9_-]{6,18}$/;
// 密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)：
var regPassword = /^[a-zA-Z]\w{5,17}$/;
// eamil地址
var regEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
inputs[0].onblur = function() {
    if (this.value != '') {
        if (!regName.test(this.value)) {
            ps[0].className = 'wrong';
            ps[0].innerHTML = '请输入正确格式的用户名';
        } else {
            ps[0].className = 'right';
            ps[0].innerHTML = '用户名格式输入正确';
        }
    } else {
            ps[0].className = '';
            ps[0].innerHTML = '';
    }
};
inputs[1].onblur = function() {
    if (this.value != '') {
        if (!regPassword.test(this.value)) {
            ps[1].className = 'wrong';
            ps[1].innerHTML = '请输入正确的密码格式';
        } else {
            ps[1].className = 'right';
            ps[1].innerHTML = '密码格式输入正确';
        }
    } else {
        ps[1].className = '';
        ps[1].innerHTML = '';
    }
}
inputs[2].onblur = function() {
    if (this.value != '') {
        if (!regEmail.test(this.value)) {
            ps[2].className = 'wrong';
            ps[2].innerHTML = '请输入正确的邮箱';
        } else {
            ps[2].className = 'right';
            ps[2].innerHTML = '邮箱输入正确';
        }
    } else {
        ps[2].className = '';
        ps[2].innerHTML = '';
    }
};
    btn.onclick = function () {
        // console.log(11);
        var formData = new FormData(form);
        console.log(formData);
        // var data = {
        //     username: formData.get('username'),
        //     password: formData.get('password'),
        //     email: formData.get('email')
        //  }
        // var xhr = new XMLHttpRequest();
        // xhr.open('post', 'http://175.178.51.126:8091/smallA/register');
        // xhr.setRequestHeader('Content-Type', 'application/json');
        // xhr.send(JSON.stringify(data));
        // xhr.onload = function() {
        // }
        if (regName.test(inputs[0].value) && regPassword.test(inputs[1].value) && regEmail.test(inputs[2].value)) {
            ajax ( {
                type: 'post',
                header: {
                    'Content-Type':'application/json'
                },
                url: 'http://175.178.51.126:8091/smallA/register',
                // url: 'https://result.eolink.com/7pce5NW10e94ea3cd1e8d9495d5e6821dad8615a932a3da?uri=/user/login_json.php',
                data: {
                    username: formData.get('username'),
                    password: formData.get('password'),
                    email: formData.get('email')
                },
                success: function(result, xhr) {
                    console.log(result);
                    if (result.msg == 'SUCCESS') {
                    ps[2].className = 'success';
                    ps[2].innerHTML = '注册成功';
                } else {
                    ps[2].className = '';
                    ps[2].innerHTML = result.msg
                }
                }
            })
        }
    }
