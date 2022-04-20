
// 获取元素
var spans = document.getElementsByTagName('span');
var file = document.getElementById('file');
var img = document.querySelector('img')
// var uname = document.getElementById('uname')
// 显示邮箱等信息
spans[1].innerHTML = sessionStorage.getItem('email');
spans[3].innerHTML = sessionStorage.getItem('username');
spans[5].innerHTML = sessionStorage.getItem('id');
// img.src = sessionStorage.getItem('headImg');
// uname.onblur = function() {
//     console.log(uname.value);
// }
// 用户选择文件时触发
file.onchange = function() {
    var formData = new FormData();
    // 将用户选择的文件追加到对象中
    formData.append('headImg', this.files[0]);
    formData.append('username', sessionStorage.getItem('username'));
    // console.log(formData.get('username'));
    console.log(formData.get('headImg'));
    var xhr = new XMLHttpRequest();
    xhr.open('post', 'http://175.178.51.126:8091/smallA/uploadHeadImg');
    // xhr.setRequestHeader('Content-Type' "multipart/form-data");
    xhr.send(formData);
    xhr.onload = function() {
        if (xhr.status == 200) {
            console.log(xhr.responseText);
        }
    }
}
