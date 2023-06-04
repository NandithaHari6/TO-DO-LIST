    const inputbox=document.getElementById('inputbox');
    const btn=document.getElementById('btn');
    const list=document.getElementById('list');
    
btn.addEventListener('click',addTask);
function addTask(){
    if(inputbox.value===""||inputbox.value===" "){
        alert("Please write the task in the input  box");s
    }
    else{
    
    let div1=document.createElement("li");
    let span1=document.createElement("span");
         span1.innerHTML=inputbox.value;
        div1.classList.add("listedtask");
        
       let delbtn=document.createElement("button");
       delbtn.classList.add("delbtn");
       delbtn.innerHTML="DEL";
       
        div1.append(span1);
        div1.append(delbtn);
       
        list.appendChild(div1);
        saveData();
        inputbox.value='';}
    }

list.addEventListener('click',(e)=>{
    if(e.target.tagName === "SPAN"){
        
        e.target.classList.toggle("checked");
        
        saveData();
    }
    if(e.target.tagName==="BUTTON"){

        list.removeChild(e.target.parentElement);
        saveData();
    }
})
function saveData(){
    localStorage.setItem('tasks',list.innerHTML);
}

function getData(){
    list.innerHTML=localStorage.getItem('tasks');
}
getData();





    
