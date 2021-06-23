
document.getElementById("button1").addEventListener("click", function(){
   
    document.getElementById("sbox").style.display="block";
})

document.querySelector("span").onclick = function() {
    console.log("adc")
    document.getElementById("sbox").style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == sbox) {
        document.getElementById("sbox").style.display = "none";
    }
}