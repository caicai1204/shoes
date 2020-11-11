$(function(){
    $("signup-btn").click(function(){
        let username= $("#username").val();
        let password= $("#password").val();
        $.get("http://jx.xuzhixiang.top/ap/api/reg.php",{
            username:$("#username").val(),
            password:$("#password").val()
        }).then(signup=>{
            if(signup.code==0){
                alert("用户名已存在")
            }else{
                window.location.href="../html/passport_login.html"
            }

        })
    })
})