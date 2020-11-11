$(function(){
    $("#login-btn").click(function(){
        let username= $("#username").val();
        let password= $("#password").val();
        $.get("http://jx.xuzhixiang.top/ap/api/login.php",{
            username:$("#username").val(),
            password:$("#password").val()
        }).then(login=>{
            if(login.code==0){
                alert("登陆失败，请重试！")
            }else{
                window.location.href="../index.html"
            }

        })
    })
})