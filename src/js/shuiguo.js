        document.addEventListener('DOMContentLoaded',()=>{
            
            let goodslist = document.querySelector('.goodslist');


            // 实例化一个异步请求对象
            var xhr = new XMLHttpRequest();//readyState=0

            xhr.onreadystatechange = function(){
                // console.log(xhr.readyState)
                if(xhr.readyState === 4){
                    // 确认数据接收完毕
                    // 在次获取数据：responseText
                    var data = JSON.parse(xhr.responseText);
                    console.log(data);

                    var goodslist = document.querySelector('.goodslist')

                    var ul = document.createElement('ul');

                    data.forEach(function(item){

                        var li = document.createElement('li');
                        li.setAttribute('data-guid',item.guid);

                        var link = document.createElement('a');
                        link.href = '../html/details.html';

                        var img = document.createElement('img');
                        img.src = item.imgurl;

                        link.appendChild(img);

                        var h4 = document.createElement('h4');
                        h4.innerHTML = item.name;

                        var price = document.createElement('p');
                        price.className = 'price';
                        price.innerText = item.price;

                        var btnAdd = document.createElement('button');
                        btnAdd.className = 'add2cart';
                        btnAdd.innerText = '加入购物车';

                        li.appendChild(link);
                        li.appendChild(h4);
                        li.appendChild(price);
                        li.appendChild(btnAdd);

                        ul.appendChild(li);
                    });
                    goodslist.appendChild(ul);

                    // 
                    var goodslist = document.querySelector('.goodslist');

                    // 声明一个变量，用于存放所有添加的商品信息
                    var goods = Cookie.get('goods');//'[{},{}..]' 或 ''

                    if(goods === ''){
                        goods = []
                    }else{
                        goods = JSON.parse(goods);//goods必须为json字符串
                    }

                    // goods = JSON.parse(goods);//

                    // 事件委托
                    // 利用事件委托实现添加到购物车的效果
                    goodslist.onclick = function(e){
                        // Event对象兼容
                        e = e || window.event;

                        // 事件源对象兼容
                        var target = e.target || e.srcElement;


                        // 判断是否点击了添加购物车按钮
                        if(target.className === 'add2cart'){
                            console.log(111)
                            // 获取当前li
                            var currentLi = target.parentNode;
                            var guid = currentLi.getAttribute('data-guid');
                            // 判断当前商品是否已经添加过
                            // * 已添加：找出这个商品，数量+1
                            // * 未添加：创建对象，商量为1，写入数组

                            var currentGoods = goods.filter(function(g){
                                return g.guid === guid;
                            });//[{}]或[]

                            if(currentGoods.length>0){
                                // 存在，数量+1
                                currentGoods[0].qty++;
                            }else{
                                // 不存在，添加商品

                                // 获取商品信息
                                // 把goods保持外观，存入cookie(只能字符串)：json字符串
                                var goodslist = {
                                    guid:guid,
                                    imgurl:currentLi.children[0].children[0].src,
                                    name:currentLi.children[1].innerText,
                                    price:currentLi.children[2].innerText,
                                    qty:1
                                }

                                // 当前商品添加到数组
                                goods.push(goodslist);
                            }


                            

                            // Object->json string
                            // JSON.stringify()

                            // 
                            // document.cookie = 'goods=' + JSON.stringify(goods);
                            Cookie.set('goods',JSON.stringify(goods));
                        }
                    }
                }
            }

            // 配置参数，建立与服务器连接
            xhr.open('get','../api/shuiguo.php');//readyState=1

            // 发起请求
            xhr.send();//readyState=2
            // console.log(xhr);
            
            // var qwer = document.querySelector('.qwer')
            // qwer.onmousemove = function(){
            //     qwer.style.border = '1px solid #ccc';
            // }

        });