$.get("http://localhost:3000/cart").then(data=>{
    // console.log(data);

    // console.log(data[0].price);
    // console.log(data[0].num);

    // console.log((data[0].price)*data[0].num);

    let str="";
    for(let i=0;i<data.length;i++){
    str+=`
    <li data-id="${data[i].id}" class="product">
        <input type="checkbox" class="ck choose">
        <img src="${data[i].imgUrl}" class="pic">
        <span class="numbox">${data[i].title}</span>
        &nbsp;&nbsp;<span class="perPrice">${data[i].price}</span>&nbsp;&nbsp;&nbsp;元
        <span class="minus">-</span>
        <input type="text" value="${data[i].num}" class="num">
        <span class="plus">+</span>
        <span class="perTotalPrice">${(data[i].price)*data[i].num}</span><span>元</span>
        <span class="del">x</span>
    </li>
    `
    }
    $(".cart-list").html(str);

    let sum=0;
    for(let i=0;i<data.length;i++){
        sum+= +$(".perTotalPrice").eq(i).text();
        $("#sum").text(sum);
    }


    for(let i=0;i<data.length;i++){
        // 减
        $(".minus").eq(i).click(function(){
            var num=$(this).next().val();
            num--;
            if(num<1){
                num=1;
            }
            $(this).next().val(num);
            // console.log((num));

            let heji =data[i].price*num;
            $(".perTotalPrice").eq(i).text(heji)

            let id=$(".product").eq(i).attr("data-id");
            axios.patch(`http://localhost:3000/cart/${id}`,{
                num:$(this).next().val()
            })
            // console.log(id)




            let sum=0;
            for(let i=0;i<data.length;i++){
                sum+= +$(".perTotalPrice").eq(i).text();
                $("#sum").text(sum);
            }
            
        })
        

        // 加
        $(".plus").eq(i).click(function(){
            var num = $(this).prev().val();
            num++;
            $(this).prev().val(num);

            //算合计
            let heji = data[i].price*num;
            $(".perTotalPrice").eq(i).text(heji)

            //存改的数字
            let id=$(".product").eq(i).attr("data-id");
            axios.patch(`http://localhost:3000/cart/${id}`,{
                num:$(this).prev().val()
            })

            // sum1();
            let sum=0;
            for(let i=0;i<data.length;i++){
                sum+= +$(".perTotalPrice").eq(i).text();
                $("#sum").text(sum);
            }
        })
    
        // 改数为0自动变为1，改数价格对应改变
        $(".num").eq(i).change(function(){
            var num=$(this).val();
            if(num<1){
                num=1;
            }
            $(this).val(num);

            let heji=data[i].price*num;
            $(".perTotalPrice").eq(i).text(heji)


            let id=$(".product").eq(i).attr("data-id");
            axios.patch(`http://localhost:3000/cart/${id}`,{
                num:$(this).prev().val(),
            });
            let sum=0;
            for(let i=0;i<data.length;i++){
                sum+= +$(".perTotalPrice").eq(i).text();
                $("#sum").text(sum);
                // console.log(sum)
            }
            
        })

    }


    //删除
    $(".del").click(function(){
        $(this).parents("li").remove();//删除页面节点，this的父级li，删了
        let id=$(this).parents("li").attr("data-id");
        console.log(id);
        axios.delete(`http://localhost:3000/cart/${id}`)
    })


    //计算总价

    // console.log($(".perTotalPrice").eq(0).text())

    // function sum1(){
    //     let sum=0;
    //         for(let i=0;i<data.length;i++){
    //             sum+= +$("perTotalPrice").eq(i).text();
    //             $("#sum").text(sum);
    //         }
    // }


});















