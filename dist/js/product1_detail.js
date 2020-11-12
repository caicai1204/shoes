
let id=location.search.split("=")[1];

$.get(`http://localhost:3000/productlist?id=${id}`).then(data=>{
    let str="";
    console.log(data);
    str+=`
        <div class="good_detail">
            <img src="${data[0].imgUrl}" alt="">
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
    let str="";
    console.log(data);
    str1+=`
        
        <div class="goodnamewrap">
            <h1 class="goodname">${data[0].title}</h1>
            <span class="morebrand">更多<href="#">阿迪达斯</a></span>
            <div class="sp"></div>
        </div>
        <ul class="goods_price list">
            <li></li>
            <li>
                <span>销&nbsp;&nbsp;售&nbsp;&nbs价：</span>
                <span class="pricesalePrice_big">￥${data[0].price}</span>
                <span></span>
            </li>
            <li>好&ensp;评&ensp;度：&nbsp;
                <spanclass="comCountBar"><i><i></span>
                （ <a href="#"class="comCount">已有10w+评论</a> ）
            </li>
            <li>运&ensp;&ensp;&ensp;&ensp费：&nbsp;名鞋库会员满99包邮nbsp;(&nbsp;不包括货到付款&nbsp;)</li>
        </ul>
     `
    $(".jiagechuandi").html(str);
});











document.onselectstart = new Function("event.returnValue=false;"); //阻止选中