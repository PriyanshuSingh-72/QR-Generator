let input = document.querySelector("#input");
let img = document.querySelector(".img");
let qrimg = document.querySelector("#qrImg");
let qrgenerator = document.querySelector("#qrGenerator");
let reset = document.querySelector("#reset");




qrgenerator.addEventListener("click",()=>{
    if(input.value.length>0){
        qrimg.src =  `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
        img.classList.add("showimg");
    }
    else{
        input.classList.add("error");
        setTimeout(()=>{
            input.classList.remove("error")
        },1000);
    }
   
})
reset.addEventListener("click",()=>{
    img.classList.remove("showimg");
    input.value ="";
    
})