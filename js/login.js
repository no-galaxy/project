// 获取元素
var btn = document.querySelector('.btn');
var form = document.getElementById('form');
var ps = document.getElementsByTagName('p');
var inputs = document.getElementsByTagName('input');
// var login = document.querySelector('#login');
// 正则表达式
var regName = /^[a-zA-z0-9_-]{6,18}$/;
// 密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)：
var regPassword = /^[a-zA-Z]\w{5,17}$/;
// eamil地址
var regEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
inputs[0].onblur = function() {
    if (this.value != '') {
        if (!(regName.test(this.value) || regEmail.test(this.value))) {
            ps[0].className = 'wrong';
            ps[0].innerHTML = '请输入正确的用户名或邮箱';
        } else {
            ps[0].className = 'right';
            ps[0].innerHTML = '输入格式正确';
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
            ps[1].innerHTML = '请输入正确的密码';
        } else {
            ps[1].className = 'right';
            ps[1].innerHTML = '密码输入正确';
        }
    } else {
        ps[1].className = '';
        ps[1].innerHTML = '';
    }
}
btn.onclick = function() {
    var formData = new FormData(form)
    // console.log(formData);
    if(regName.test(inputs[0].value)) {
            ajax({
                type: 'post',
                url: 'http://175.178.51.126:8091/smallA/login',
                header: {
                    'Content-Type':'application/json'
                },
                data : {
                    username: formData.get('username'),
                    password: formData.get('password'),
                },
                success: function(result, xhr) {
                    console.log(result);
                    // console.log(xhr);
                    if (result.msg == 'SUCCESS') {
                        // login.className = 'success';
                        ps[2].className = 'success';
                        ps[2].innerHTML = '请点击下方'
                        // login.innerHTML = result.msg;
                        sessionStorage.setItem('email', result.data.email);
                        sessionStorage.setItem('username', result.data.username);
                        sessionStorage.setItem('id', result.data.id);
                        sessionStorage.setItem('headImg',result.data.headImg);
                       window.location.href = "file:///C:/Users/pan'da'xie/Desktop/html/project1/user.html"
                    } else {
                        ps[2].className = '';
                        ps[2].innerHTML = result.msg;
                    }
                }
            })
    }
    else if(regEmail.test(inputs[0].value)) {
            // console.log('22');
            ajax({
                type: 'post',
                url: 'http://175.178.51.126:8091/smallA/login',
                header: {
                    'Content-Type':'application/json'
                },
                data : {
                    email: formData.get('username'),
                    password: formData.get('password'),
                },
                success: function(result, xhr) {
                    console.log(result);
                    if (result.msg == 'SUCCESS') {
                        // login.className = 'success';
                        ps[2].className = 'success';
                        ps[2].innerHTML = '请点击下方';
                        // login.innerHTML =  result.msg;
                        sessionStorage.setItem('email', result.data.email);
                        sessionStorage.setItem('username', result.data.username);
                        sessionStorage.setItem('id', result.data.id);
                        window.location.href = "file:///C:/Users/pan'da'xie/Desktop/html/project1/user.html"
                    } else {
                        ps[2].className = '';
                        ps[2].innerHTML = result.msg;
                    }
                }
            })
    }
}