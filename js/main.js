(function(){
var b=document.querySelector(".menu"),n=document.getElementById("nav");
b.addEventListener("click",function(){var o=n.classList.toggle("open");b.setAttribute("aria-expanded",o)});
var y=document.getElementById("yr");if(y)y.textContent=new Date().getFullYear();
var f=document.getElementById("cf");
if(f)f.addEventListener("submit",function(e){e.preventDefault();var s=document.getElementById("fs"),d=new FormData(f);
if(!d.get("name")||!/^\S+@\S+\.\S+$/.test(d.get("email"))||!d.get("msg")){s.textContent="Enter your name, a valid email address and a message.";return}
location.href="mailto:enquiry@rachelio.com?subject="+encodeURIComponent("Enquiry: "+d.get("service"))+"&body="+encodeURIComponent(d.get("msg")+"\n\n"+d.get("name")+"\n"+d.get("email"));
s.textContent="Opening your email app. If nothing happens, email enquiry@rachelio.com."});
})();
