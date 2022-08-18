let next = document.querySelector('.next');
let pre = document.querySelector('.pre');
let img = document.querySelectorAll('.silde img');
let now = 0;



setInterval(next_btn, 3000);
 next.addEventListener('click',next_btn,false)


function next_btn(){
    now++;
    if(now >= img.length){
      now = 0;
    }
    updata();
}

pre.addEventListener('click',()=>{

    now--;
    if(now  < 0 ){
      now =  img.length-1;
    }
    updata();
})


function updata(){
    img.forEach((item,key,)=>{
        if(key == now){
          item.classList.add('active');
        }else{
            item.classList.remove('active');
        }
      })
}



updata();