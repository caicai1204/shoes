
let id=location.search.split("=")[1];
console.log(id);
$.get(`http://localhost:3000/productlist?id=${id}`).then(data=>{
    let str="";
    console.log(data);
    str+=`
        <div class="good_detail">
            <img src="${data[0].imgUrl}" alt="" id="detail-img">
        </div>
        
        <div class="good_detail_pics">
            <span>
                <div class="uparrow"></div>
                <img src="${data[0].imgUrl}" alt="">
            </span>
            <span>
                <div class="uparrow"></div>
                <img src="${data[0].imgUrl}" alt="">
            </span>
            <span>
                <div class="uparrow"></div>
                <img src="${data[0].imgUrl}" alt="">
            </span>
            <span>
                <div class="uparrow"></div>
                <img src="${data[0].imgUrl}" alt="">
            </span>
            <span>
                <div class="uparrow"></div>
                <img src="${data[0].imgUrl}" alt="">
            </span>
        </div>
    `

    $(".dongtuchuandi").html(str);
});



$.get(`http://localhost:3000/productlist?id=${id}`).then(data=>{
    let str1="";
    console.log(data);
    console.log(data[0].title);
    str1+=`
        <div class="goodnamewrap">
            <h1 class="goodname" id="detail-title">${data[0].title}</h1>
            <span class="morebrand">更多<href="#">阿迪达斯</a></span>
            <div class="sp"></div>
        </div>
        <ul class="goods_price list">
            <li></li>
            <li>
                <span>销&nbsp;&nbsp;售&nbsp;&nbsp;价：</span>
                ￥<span class="pricesalePrice_big" id="detail-price">${data[0].price}</span>
                <span></span>
            </li>
            <li>好&ensp;评&ensp;度：&nbsp;
                <spanclass="comCountBar"><i><i></span>
                （ <a href="#"class="comCount">已有10w+评论</a> ）
            </li>
            <li>运&ensp;&ensp;&ensp;&ensp;费：&nbsp;名鞋库会员满99包邮nbsp;(&nbsp;不包括货到付款&nbsp;)</li>
        </ul>
     `
    $(".jiagechuandi").html(str1);



    console.log($("#jian"));
    $("#jian").click(function(){
        let num=$("#detail-num").val();
        num--;
        if(num<1){
            num=1;
        }
        $("#detail-num").val(num);
    })
    $("#jia").click(function(){
        let num=$("#detail-num").val();
        num++;
        
        $("#detail-num").val(num);
    })
    $("#detail-num").change(function(){
        let num=$("#detail-num").val();
        if(num<1){
            num=1;
        }
        $("#detail-num").val(num);
    })









    $(".btn-buy").click(function(){
        axios.get("http://localhost:3000/cart",{
            params:{
                id:id
            }
        }).then(data=>{
            console.log(data.data);
            if(data.data.length==0){
                axios.post("http://localhost:3000/cart",{
                    id:id,
                    imgUrl:$("#detail-img").attr("src"),
                    title:$("#detail-title").text(),
                    price:$("#detail-price").text(),
                    num:$("#detail-num").val()
                });
                alert("添加成功");
                window.location.href="../html/cart.html";
        }else{
            axios.get("http://localhost:3000/cart",{
                params:{id:id}
            }).then(gai=>{
                let num=Math.floor(gai.data[0].num);
                num+=Math.floor($("#detail-num").val());
                axios.patch(`http://localhost:3000/cart/${id}`,{
                    num:num
                })
                alert("添加成功！");
                window.location.href="../html/cart.html";
            })
        }
        })

    }) 

})
