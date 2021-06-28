function popup(name,box,cross){
document.getElementById(name).addEventListener("click", function(){
   
    document.getElementById(box).style.display="block";
})

document.querySelector("."+cross).onclick = function() {
    document.getElementById(box).style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == sbox) {
        document.getElementById(box).style.display = "none";
    }
}
}
function login(){
    document.getElementById("loginbutton").addEventListener("click", function(){
   
        document.getElementById("sbox2").style.display="block";
    })
    
    document.querySelector(".close2").onclick = function() {
        document.getElementById("sbox2").style.display = "none";
      }
      
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == sbox2) {
            document.getElementById("sbox2").style.display = "none";
        }
    }

}
function addpost(){
    document.getElementById("button3").addEventListener("click", function(){
   
        document.getElementById("sbox3").style.display="block";
    })
    
    document.querySelector(".close3").onclick = function() {
        document.getElementById("sbox3").style.display = "none";
      }
      
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == sbox3) {
            document.getElementById("sbox3").style.display = "none";
        }
    }
    
}
function sub(){
    let title = document.getElementById("title").value;
    let content=document.getElementById("text-area").value;
    let obj={
        title: title,
        content: content
    }
    let arr = JSON.parse(localStorage.getItem("arr")) || [];
    arr.push(obj)
    localStorage.setItem("arr",JSON.stringify(arr))
    

} 

