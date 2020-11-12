
let id=location.search.split("=")[1];

$.get(`http://localhost:3000/productlist?id=${id}`).then(data=>{
    let str="";
    str+=`
        <div class="good_viewer">
            <div class="viewer_left">
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
                </div>
            </div>

            <div class="viewer_right">
                <div class="goodnamewrap">
                    <h1 class="goodname">${data[0].title}</h1>
                </div>
                <ul class="goods_price list">
                    <li>
                        <span>销&nbsp;&nbsp;售&nbsp;&nbsp;价：</span>
                        <span class="price  salePrice_big">${data[0].price}</span>
                        <span></span>
                    </li>
                </ul>
                <!-- 加购物车部分 -->
                <div class="hightbox">
                    <em class="min-w">购买数量：</em>
                    <div class="numadjust">
                        <span>-</span>
                        <input type="text" value="1">
                        <span>+</span>
                    </div>
                </div>
            </div>
        </div>
    `
    // $("#productlist").html(str);
});


document.onselectstart = new Function("event.returnValue=false;"); //阻止选中