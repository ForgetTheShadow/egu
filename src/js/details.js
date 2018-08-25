jQuery(function($){
    // 插件是否支持链式调用

    $('.goods').lxzoom({width:500,height:487}).addClass('box');

    $('.small').on('click','img',function(){
        $('.goods img').attr({
            'src':this.src,
            'data-big':this.dataset.big
        });
    })
});