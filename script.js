let inputs=document.getElementById("inp");
let text=document.querySelector(".text");
function add(){
    if(inputs.value==""){
        alert("please enter the something")
    }
    else{
        let newEle=document.createElement('ul');
        newEle.innerHTML=`${inputs.value}<i class="fa-solid fa-trash aria-hidden=true"></i>`;
        text.appendChild(newEle);
        inputs.value="";

    
    newEle.querySelector("i").addEventListener("click",remove);
    function remove(){
        newEle.remove();
    }
}
       
}
