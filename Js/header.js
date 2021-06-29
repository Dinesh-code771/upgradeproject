//added functionality to signUp button

var modal = document.getElementById("myModal");
var btn = document.getElementById("signUp");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function ()
{
  // Open the modal, When the user clicks the button
  modal.style.display = "block";
}
span.onclick = function ()
{
  // Close the modal, When the user clicks on <span> (x)
  modal.style.display = "none";
}
window.onclick = function (event)
{
  // Close it,  When the user clicks anywhere outside of the modal
  if (event.target == modal)
  {
    modal.style.display = "none";
  }
}

//functionality to signIn button
var modal1 = document.getElementById("myModal1");
var btn1 = document.getElementById("signIn");
var span1 = document.getElementsByClassName("close")[1];
btn1.onclick = function ()
{
  modal1.style.display = "block";
}
span1.onclick = function ()
{
  modal1.style.display = "none";
}
window.onclick = function (event)
{
  if (event.target == modal1)
  {
    modal1.style.display = "none";
  }
}
var linkModal = document.getElementsByClassName("signup-link")[0].onclick = function ()
{
   //when user clicks the sign-up link
  modal.style.display = "block";  //open the sign-up model
  modal1.style.display = "none";  //closes the sign-in model
}
