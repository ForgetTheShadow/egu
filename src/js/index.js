document.addEventListener('DOMContentLoaded',function(){
        let picList = document.querySelector('.picList');

        let items = picList.children;

        // 定时器建议与节点关联
        // let timer

        // 遍历实现鼠标移入移出效果
        for(var i=0;i<items.length;i++){
            items[i].onmouseover = function(){
                console.log(111);
                clearInterval(this.timer);

                // 获取对应a标签
                let link = this.children[1];

                this.timer = setInterval(()=>{
                    
                 // add() : 添加class方法
                    link.add('active');
                },30)

                // // 目标值
                // let target = 5;

                // this.timer = setInterval(()=>{
                //     // 获取当前值
                //     let top = link.offsetTop;

                //     // 计算缓冲速度
                //     let speed = Math.floor((target - top)/10);

                //     top += speed;

                //     if(top <= target){
                //         clearInterval(this.timer);

                //         // 重置目标值
                //         top = target;
                //     }

                //     link.style.top = top + 'px';
                // },30)
            }


        //     items[i].onmouseout = function(){
        //         clearInterval(this.timer);

        //         // 获取对应a标签
        //         let link = this.children[1];

        //         // 目标值
        //         let target = 160;

        //         this.timer = setInterval(()=>{
        //             // 获取当前值
        //             let top = link.offsetTop;

        //             // 计算缓冲速度
        //             let speed = Math.ceil((target - top)/10);

        //             top += speed;

        //             if(top >= target){
        //                 clearInterval(this.timer);

        //                 // 重置目标值
        //                 top = target;
        //             }

        //             link.style.top = top + 'px';
        //         },30)
        //     }
        }
     });