let arr = JSON.parse(localStorage.getItem("arr"));
var length;
function dispalypost(array){    
     length= array.length;
       return arr.map((ele,index)=>{
           return ` <div class="postcontainer">
           <div class="postedit" id="${index}">
               <input   type="text" name="" class="input-text" readonly  />
               <button  id="${index} class="edi" onclick="editpost(${index})">Edit</button>
               <textarea readonly name=""  cols="90" rows="13"></textarea>
           </div>
       </div>`
        }).join(" ")

        

}
document.getElementById("largercontainer").innerHTML=dispalypost(arr);
function getdata(){
    

for(let i=0 ;i<length;i++)
{
    document.querySelectorAll(".input-text")[i].value=arr[i].title;
    document.querySelectorAll("textarea")[i].value=arr[i].content;
}
}
getdata();

function editpost(id){
    document.querySelectorAll("input")[id].readOnly = false;
    document.querySelectorAll("textarea")[id].readOnly=false;
    document.querySelectorAll("input")[id].nextElementSibling.innerText="save";
    document.querySelectorAll("input")[id].nextElementSibling.addEventListener("click",()=>{
         arr = JSON.parse(localStorage.getItem("arr"));
        arr[id].title = document.querySelectorAll("input")[id].value;
        arr[id].content = document.querySelectorAll("input")[id].value;
        localStorage.setItem("arr",JSON.stringify(arr));
        location.reload();
    })

}


