/* 
    <dl id="dl_1">
                <dt>
                    <a href="#">
                        <img src="https://images.s.cn/images/goods/20180806/432ca884910aad7f_210.jpg" alt="">
                    </a>
                </dt>
                <dd>
                    <a href="#"></a>
                    <ul>
                        <li class="r1">
                            <i class="price">￥132</i>
                            <i class="del_price">￥299</i>
                        </li>
                        <li class="r2">adidas阿迪达斯双肩包黑+白+白</li>
                        <li class="r3">
                            已售出<i>8</i>件
                        </li>
                        <li class="r4">尺码：34</li>
                    </ul>
                </dd>
            </dl>
*/

$.get("http://localhost:3000/productlist").then(data=>{
    // console.log(data);
    let str="";
    for(let i=0;i<32;i++){
        let n =Math.floor(Math.random()*100+1);
        str+=`
        <dl id="dl_1">
            <dt>
                <a href="product_detail.html?id=${data[n].id}" target="_blank">
                    <img src="${data[n].imgUrl}" alt="">
                </a>
            </dt>
            <dd>
                <a href="#"></a>
                <ul>
                    <li class="r1">
                        <i class="price">￥${data[n].price}</i>
                        <i class="del_price"￥${data[n].price}</i>
                    </li>
                    <li class="r2">${data[n].title}</li>
                    <li class="r3">
                        已售出<i>8</i>件
                    </li>
                    <li class="r4">尺码：34</li>
                </ul>
            </dd>
        </dl>
        `
    }
    $("#productlist").html(str);
});
