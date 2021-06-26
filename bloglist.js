
let arr = JSON.parse(localStorage.getItem("arr"));
let postbox = document.getElementById("posts");
function genarate(array){
return array.map((ele,index)=>{
    return `<div id="${index}" class="stylepost">
    <span id="${index}" class="but" onclick="deletepost(${index})"><img class="manImg" src="delete.png"></img>
    </span>
    <p>${ele.title}</p>
    <p>${ele.content}</p> 
    <a href="post.html" class="link">...</a>
</div> `
}).join(" ")
}
postbox.innerHTML=genarate(arr);
function deletepost(id){
    rusure();
    document.getElementById("yes").onclick=function(){
        
        let arr = JSON.parse(localStorage.getItem("arr"));
   arr.splice(parseInt(id),1)
    localStorage.setItem("arr",JSON.stringify(arr));
    location.reload();
    }
    document.getElementById("no").onclick=function(){
        document.getElementById("subbox").style.display = "none";
    }
}
function rusure(){
    document.getElementById("subbox").style.display = "block";
}

