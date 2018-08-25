 document.addEventListener('DOMContentLoaded',()=>{

    var oCarList = document.getElementById('carList');
    console.log(oCarList)
        var oSubPrice = oCarList.nextElementSibling;
        var btnClear = document.getElementById('btnClear');

        var goods = Cookie.get('goods');//'[{}]',''
        if(goods.length<=0){
            goods = [];
        }else{
            goods = JSON.parse(goods);
        }


        render();

        // 清空购物车
        // 删除goods这个cookie
        btnClear.onclick = function(e){

            // 清空cookie
            Cookie.remove('goods');

            // 清空goods数组
            goods = [];

            render();


            e.preventDefault();

            // 手动刷新页面
            // location.reload()
        }

        // 删除单个商品
        // * 找出删除的商品 -> 从数组中移除 -> 重写cookie -> 渲染页面
        oCarList.onclick = function(e){
            e = e || window.event;
            var target = e.target || e.srcElement;

            // 判断是否点击了按钮
            if(target.className === 'btn-close'){
                // 获取当前li
                var currentLi = target.parentNode;
                console.log(currentLi)
                // 获取当前商品的guid
                var guid = currentLi.getAttribute('guid');
                console.log(guid)

                // 找出数组中对应商品并移除
                for(var i=0;i<goods.length;i++){
                    if(goods[i].guid === guid){
                        goods.splice(i,1);
                        break;
                    }
                }

                // 重写cookie
                Cookie.set('goods',JSON.stringify(goods));

                // 重新渲染页面
                render();
            }
        }

        function render(){
            // 根据数据生成html结构
            var ul = document.createElement('ul');

            // 计算总价
            var total = 0;

            ul.innerHTML = goods.map(function(goodslist){
                // 计算总价
                total += goodslist.price * goodslist.qty;

                return `<li>
                            <a><img src="${goodslist.imgurl}"></a>
                            <h4>${goodslist.name}</h4>
                            <p class="price"><span>${goodslist.price}</span>&times;${goodslist.qty}</p>
                            <span class="btn-close">&times;</span>
                    </li>`
            }).join('\n');

            // 把ul写入页面#carList
            oCarList.innerHTML = '';
            oCarList.appendChild(ul);

            // 写入总价
            oSubPrice.innerHTML = total.toFixed(2);
        }
 });
            