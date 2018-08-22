    document.addEventListener('DOMContentLoaded',()=>{
            let username = document.querySelector('#username');

            username.onblur = ()=>{
                // 先获取输入的用户名
                let _username = username.value;

                let xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function(){
                    if(xhr.readyState ===4){
                        var formGroup = username.parentNode;
                        if(xhr.responseText === 'yes'){
                            // 成功：添加has-success类
                            formGroup.classList.remove('has-error');
                            formGroup.classList.add('has-success');
                            username.nextElementSibling.innerText = '';
                        }else if(xhr.responseText === 'no'){
                            formGroup.classList.remove('has-success');
                            formGroup.classList.add('has-error');
                            username.nextElementSibling.innerText = '用户名已存在';
                        }
                    }
                }
                xhr.open('get','../api/checkname.php?regname='+_username);
                xhr.send();
            }
        })