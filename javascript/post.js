
let arr = JSON.parse(localStorage.getItem("arr"));
var comment = JSON.parse(localStorage.getItem("comment"))||[];
var likearr=[];
var length;

function dispalypost(array){    
     length= array.length;
       return arr.map((ele,index)=>{
           return ` <div class="postcontainer">
           <div class="postedit" id="${index}">
               <input   type="text" name="" class="input-text" readonly  />
               <button  id="${index}" class="edi" onclick="editpost(${index})">Edit</button>
               <textarea class="texarea" readonly name=""  cols="90" rows="13"></textarea>
               <button class="sep" onclick="like(${index})">Like</button>
               
               <span> </span>
               
           <textarea class="comment" placeholder="Comment...."  name=""  cols="70" rows="3"></textarea>
       </div>
       <button  class="com" onclick="writingcomment(${index})">Comment!</button>
       <div class="smallcontainer" ></div>
      `}).join(" ")

}
document.getElementById("largercontainer").innerHTML=dispalypost(arr);
function getdata(){

for(let i=0 ;i<length;i++)
{
    document.querySelectorAll(".input-text")[i].value=arr[i].title;
    document.querySelectorAll(".texarea")[i].value=arr[i].content;
}
}
getdata();
function displaylike(){
    for(let i=0;i<length;i++){
        let likearr=JSON.parse(localStorage.getItem("likearr"))||[];
           
        if(likearr[i]==undefined){
            document.querySelectorAll("span")[i].innerText=0
        }
        else{
            document.querySelectorAll("span")[i].innerText=likearr[i]+" "+"person liked this"
            document.querySelectorAll(".sep")[i].innerText="Liked!"
        }
        
        
    }
    
}
displaylike()

function editpost(id){
    document.querySelectorAll("input")[id].readOnly = false;
    document.querySelectorAll(".texarea")[id].readOnly=false;
    document.querySelectorAll("input")[id].nextElementSibling.innerText="save";
    document.querySelectorAll("input")[id].nextElementSibling.addEventListener("click",()=>{
         arr = JSON.parse(localStorage.getItem("arr"));
        arr[id].title = document.querySelectorAll("input")[id].value;
        arr[id].content = document.querySelectorAll(".texarea")[id].value;
        localStorage.setItem("arr",JSON.stringify(arr));
        location.reload();
       
    })

}
function like(id){
    var array = new Array(length);
    
        likearr = JSON.parse(localStorage.getItem("likearr"))||array;
        likearr[id]++;
        localStorage.setItem("likearr",JSON.stringify(likearr));
    showlike(id); 
    document.querySelectorAll(".sep")[id].innerText="Liked!"

}
function showlike(id){
    let likearr=JSON.parse(localStorage.getItem("likearr"))||array;
    document.querySelectorAll("span")[id].innerText=likearr[id]+" "+"person liked this";
}
function getcommentdata(){

    for(let i=0 ;i<length;i++)
    { 
        if(comment[i]==undefined){
            document.querySelectorAll(".smallcontainer")[i].innerText=" "
        }
        else{
            let info;
             info=comment[i].replace("undefined"," ");
            document.querySelectorAll(".smallcontainer")[i].innerHTML=info;
            document.querySelectorAll(".smallcontainer")[i].style.border="5px solid lightgray"
        }
       
    }
    }
    getcommentdata(); 

function writingcomment(id){  
    let ar = JSON.parse(localStorage.getItem("comment"))||[];
    if(document.querySelectorAll(".comment")[id].value.length==0){
        alert("opps! write you comment");
    }
    else{
      var information =  document.querySelectorAll(".comment")[id].value
    comment[id]= `<p id="pcomment"> ${information}</p>`+"\n" + ar[id];
    localStorage.setItem("comment",JSON.stringify(comment))
    document.querySelectorAll(".smallcontainer")[id].style.border="5px solid lightgray"
    
   displaycomment(id);
    }
   
}
function displaycomment(id)
{
   let data =  JSON.parse(localStorage.getItem("comment"))
   let info;
   info=(data[id]+"\n").replace("undefined"," ");
  
    document.querySelectorAll(".smallcontainer")[id].innerHTML=info;
}


