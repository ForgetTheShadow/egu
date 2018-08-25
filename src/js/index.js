document.addEventListener('DOMContentLoaded',function(){

        // let items = picList.children;
        
        let picList = document.querySelector('.picList');
        let col = document.querySelector('.col');
        let girl = col.children[1].children[0];

            let timer


            girl.onmouseover = ()=>{


                // 鼠标移出时，清除mouseout的定时器
                clearInterval(timer);


                // 目标值
                let target = 1;

                timer = setInterval(()=>{
                    // 获取当前值
                    let opacity = getComputedStyle(girl).opacity*1;

                    // 计算缓冲速度
                    let speed = (target-opacity)/10;

                    // 限定最小速度
                    speed = speed<0.05 ? 0.05 : speed.toFixed(2)*1;

                    opacity += speed;

                    // 结束判断
                    if(opacity>=target){
                        clearInterval(timer);
                        opacity = target;
                    }

                    girl.style.opacity = opacity;

                },30);
            }

            girl.onmouseout = ()=>{
                // 鼠标移出时，清除mouseover的定时器
                clearInterval(timer);

                // 目标值
                let target = 0;

                timer = setInterval(()=>{
                    // 获取当前值
                    let opacity = getComputedStyle(girl).opacity*1;

                    // 计算缓冲速度
                    let speed = (target-opacity)/10;

                    // 限定最小速度
                    speed = speed>-0.05 ? -0.05 : speed.toFixed(2)*1;

                    opacity += speed;

                    // 结束判断
                    if(opacity<=target){
                        clearInterval(timer);
                        opacity = target;
                    }

                    girl.style.opacity = opacity;

                },30);
            }



            let toTop = document.querySelector('.toTop');

            // 滚动到一定距离，显示返回顶部效果
            window.onscroll = ()=>{
                if(window.scrollY > 800){
                    toTop.style.display = 'block';
                }else{
                    toTop.style.display = 'none';
                }
            }

            // 点击返回顶部
            toTop.onclick = ()=>{
                let timer = setInterval(()=>{
                    // 计算缓冲速度
                    let speed = Math.ceil(window.scrollY/5);//1

                    scrollBy(0,-speed);


                    if(window.scrollY <= 0){
                        clearInterval(timer);
                    }
                },30)
            }
     });