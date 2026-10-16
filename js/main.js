(function(){var d=document,b=d.querySelector(".menu"),n=d.getElementById("nav"),y=d.getElementById("yr");if(y)y.textContent=new Date().getFullYear();
function close(){n.classList.remove("open");b.setAttribute("aria-expanded","false");d.body.style.overflow="";b.focus()}
b.addEventListener("click",function(){var o=n.classList.toggle("open");b.setAttribute("aria-expanded",o);d.body.style.overflow=o?"hidden":"";if(o){var f=n.querySelector("summary,a");f&&f.focus()}});
d.addEventListener("keydown",function(e){if(e.key==="Escape"){var o=d.querySelector(".dd[open]");if(o){o.removeAttribute("open");o.querySelector("summary").focus()}else if(n.classList.contains("open"))close()}
if(e.key==="Tab"&&n.classList.contains("open")){var f=[].slice.call(d.querySelectorAll(".menu,#nav summary,#nav a")).filter(function(x){return x.offsetParent}),i=f.indexOf(d.activeElement);if(e.shiftKey&&i<=0){e.preventDefault();f[f.length-1].focus()}else if(!e.shiftKey&&i===f.length-1){e.preventDefault();f[0].focus()}}});
d.addEventListener("click",function(e){var o=d.querySelector(".dd[open]");if(o&&!o.contains(e.target))o.removeAttribute("open")});
var s=d.querySelector(".sbar");if(s){s.hidden=false;addEventListener("scroll",function(){s.classList.toggle("show",scrollY>innerHeight*.8)},{passive:true})}
var f=d.getElementById("cf");if(f){var t0=Date.now();f.addEventListener("submit",function(e){e.preventDefault();var m=d.getElementById("fe"),st=d.getElementById("fs"),v=new FormData(f),bad=[];m.textContent="";
["name","email","msg"].forEach(function(k){var el=f.elements[k],ok=v.get(k)&&(k!=="email"||/^\S+@\S+\.\S+$/.test(v.get(k)));el.setAttribute("aria-invalid",!ok);if(!ok)bad.push(k)});
if(!v.get("consent"))bad.push("consent");
if(bad.length){m.textContent="Error: please complete "+bad.join(", ")+".";f.elements[bad[0]].focus();return}
if(v.get("website")||Date.now()-t0<3000)return;
var ep=f.dataset.endpoint,txt=v.get("msg")+"\n\n"+v.get("name")+"\n"+v.get("email")+"\n"+(v.get("org")||"");
if(ep){fetch(ep,{method:"POST",body:v}).then(function(r){if(!r.ok)throw 0;f.outerHTML='<p role="status">Thank you. We will reply within one working day.</p>'}).catch(function(){st.textContent="Sending failed. Please email enquiry@rachelio.com."})}
else{location.href="mailto:enquiry@rachelio.com?subject="+encodeURIComponent("Enquiry: "+v.get("type"))+"&body="+encodeURIComponent(txt);st.textContent="Opening your email app. If nothing happens, email enquiry@rachelio.com."}})}})();
