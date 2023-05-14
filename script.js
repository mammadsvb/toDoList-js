let conf = document.getElementById("confirm");
let inp = document.querySelector("#myform input[type=text]");
let li = document.querySelector(".item");

conf.addEventListener("click",(e)=>{
    
   let text= e.target.previousElementSibling.value;

    let newLi = li.cloneNode(true);
    newLi.innerHTML = `${text}<i class="bi bi-x-circle"></i>`
    newLi.style.visibility="visible"
    document.querySelector(".items").appendChild(newLi)
})

document.querySelector(".items").addEventListener("click",(e)=>{
    let delLi=e.target.parentNode;
   
    if(delLi.nodeName.toLowerCase()==="li")
         delLi.remove();

})

// document.querySelector("input[type=text]")