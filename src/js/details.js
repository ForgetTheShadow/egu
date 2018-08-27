jQuery(function($){
    // 插件是否支持链式调用

    $('.goods').lxzoom({width:500,height:487}).addClass('box');

    $('.small').on('click','img',function(){
        $('.goods img').attr({
            'src':this.src,
            'data-big':this.dataset.big
        });
    })

    var tab = document.getElementsByClassName('tab')[0];
            var tab_items = tab.children[0].children;
            var tab_content = tab.children[1].children;

            // 初始索引值
            var index = 0;

            // 1）初始化
            for(var i=0;i<tab_items.length;i++){
                if(i===0){
                    // * 高亮第一个tab
                    tab_items[0].className = 'active';
                    
                }else{
                // * 隐藏除第一张以外的图片
                    tab_content[i].style.display = 'none';
                }

                // 点击高亮当前tab
                // 并显示对应图片
                tab_items[i].onmouseover = function(){
                    // 找出当前索引值
                    var idx;
                    for(var i=0;i<tab_items.length;i++){
                        if(tab_items[i] === this){
                            idx = i;
                            break;
                        }
                    }

                    show(idx);

                }
            }

            // 自动切换
            setInterval(function(){
                index++;
                if(index>=tab_items.length){
                    index = 0;
                }
                show(index);
            },3000);


            function show(idx){
                // 循环实现高亮与显示
                for(var i=0;i<tab_items.length;i++){
                    if(i===idx){
                        // 高亮当前tab
                        tab_items[i].className = 'active';

                        // 显示对应图片
                        tab_content[i].style.display = 'block';
                    }else{
                        // 去除其他高亮
                        tab_items[i].className = '';

                        // 隐藏其他图片
                        tab_content[i].style.display = 'none';
                    }
                }
            }
});