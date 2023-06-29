const Inputbox=document.getElementById("input-box");
const Listcontainer=document.getElementById("list container");
function AddTask()
{
if(Inputbox.value==='')
{
alert("WRITE SOMETHING");
}
else{
    let li=document.createElement("li");
    li.innerHTML=Inputbox.value;
    Listcontainer.appendChild(li);
    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
}
Inputbox.value="";
saveData();
}
Listcontainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",Listcontainer.innerHTML);
}
function showlist(){
    localStorage.setItem("data",Listcontainer.innerHTML);
}
function showtask(){
    Listcontainer.innerHTML=localStorage.getItem("data");
}
showtask();