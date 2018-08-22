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
                        li.className = 'qwer';

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