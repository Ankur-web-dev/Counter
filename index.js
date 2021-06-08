let count = 0;

const buttons = document.querySelectorAll(".btn");
const counter = document.querySelector(".counter");

buttons.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const style = e.currentTarget.classList;
        if (style.contains("decrease")){
            count--;
        } else if(style.contains("increase")){
            count++;
        } else {
            count=0;
        }
        if (count>0){
            counter.style.color = "green"
        } else if(count<0){
            counter.style.color = "red"
        } else{
            counter.style.color = "black"
        }
        counter.textContent = count;
    })
})