const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const loader=$("#loader"),bar=loader.querySelector(".loader-track span"),pct=$("#pct");let p=0;
const timer=setInterval(()=>{p+=Math.floor(Math.random()*11)+5;if(p>=100){p=100;clearInterval(timer);setTimeout(()=>loader.classList.add("done"),350)}bar.style.width=p+"%";pct.textContent=String(p).padStart(2,"0")+"%"},90);

const cursor=$(".cursor"),ci=cursor.querySelector("i"),cb=cursor.querySelector("b"),cl=cursor.querySelector("span");let x=innerWidth/2,y=innerHeight/2,rx=x,ry=y;
addEventListener("pointermove",e=>{x=e.clientX;y=e.clientY});(function loop(){ci.style.left=x+"px";ci.style.top=y+"px";rx+=(x-rx)*.17;ry+=(y-ry)*.17;cb.style.left=rx+"px";cb.style.top=ry+"px";cl.style.left=rx+"px";cl.style.top=ry+"px";requestAnimationFrame(loop)})();
$$("a,button,.magnetic,.magnetic-card").forEach(e=>{e.onmouseenter=()=>{cursor.classList.add("hover");cl.textContent=e.matches(".magnetic-card")?"VIEW":"OPEN"};e.onmouseleave=()=>cursor.classList.remove("hover")});

const menu=$("#menu"),nav=$("#navOverlay");menu.onclick=()=>{menu.classList.toggle("open");nav.classList.toggle("open")};$$(".nav-overlay a").forEach(a=>a.onclick=()=>{menu.classList.remove("open");nav.classList.remove("open")});

const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");obs.unobserve(e.target)}}),{threshold:.1});$$(".reveal").forEach(e=>obs.observe(e));

const prog=$(".progress i");addEventListener("scroll",()=>{let h=document.documentElement.scrollHeight-innerHeight;prog.style.width=(scrollY/h*100)+"%"},{passive:true});

$$("[data-n]").forEach(el=>{const target=+el.dataset.n;const o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){let t=performance.now();(function run(now){let q=Math.min((now-t)/1200,1),ease=1-Math.pow(1-q,3);el.textContent=Math.round(target*ease).toLocaleString();if(q<1)requestAnimationFrame(run)})(t);o.disconnect()}}),{threshold:.6});o.observe(el)});

$$(".magnetic").forEach(el=>{el.addEventListener("pointermove",e=>{let r=el.getBoundingClientRect(),a=e.clientX-r.left-r.width/2,b=e.clientY-r.top-r.height/2;el.style.transform=`translate(${a*.15}px,${b*.15}px)`});el.addEventListener("pointerleave",()=>el.style.transform="")});
$$(".magnetic-card").forEach(el=>{el.addEventListener("pointermove",e=>{let r=el.getBoundingClientRect(),a=e.clientX/r.width-r.left/r.width-.5,b=e.clientY/r.height-r.top/r.height-.5;el.style.transform=`perspective(1200px) rotateX(${-b*3}deg) rotateY(${a*3}deg) translateY(-5px)`});el.addEventListener("pointerleave",()=>el.style.transform="")});

const copy=$("#copy");copy.onclick=async()=>{try{await navigator.clipboard.writeText("157aryan@gmail.com");copy.textContent="COPIED ✓";setTimeout(()=>copy.textContent="COPY EMAIL",1500)}catch{}};

const canvas=$("#webgl"),ctx=canvas.getContext("2d");let stars=[],W,H;
function resize(){W=innerWidth;H=innerHeight;canvas.width=W*devicePixelRatio;canvas.height=H*devicePixelRatio;ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);stars=Array.from({length:Math.min(260,Math.floor(W/5))},()=>({x:Math.random()*W,y:Math.random()*H,s:Math.random()*1.5+.15,v:Math.random()*.22+.03}))}resize();addEventListener("resize",resize);
(function draw(){ctx.clearRect(0,0,W,H);for(const s of stars){s.y-=s.v;if(s.y<0)s.y=H;ctx.fillStyle=`rgba(202,255,0,${.025+s.s*.08})`;ctx.beginPath();ctx.arc(s.x,s.y,s.s,0,Math.PI*2);ctx.fill()}requestAnimationFrame(draw)})();

const types=$$(".type-row h1");addEventListener("pointermove",e=>{if(innerWidth<900)return;let a=e.clientX/innerWidth-.5,b=e.clientY/innerHeight-.5;types.forEach((t,i)=>t.style.transform=`translate(${a*(i+1)*7}px,${b*(i+1)*3}px)`);});

const caseOpen=$("#caseOpen"), caseClose=$("#caseClose"), caseModal=$("#caseModal");
if(caseOpen){caseOpen.onclick=()=>{caseModal.classList.add("open");document.body.style.overflow="hidden"}}
if(caseClose){caseClose.onclick=()=>{caseModal.classList.remove("open");document.body.style.overflow=""}}
if(caseModal){caseModal.addEventListener("click",e=>{if(e.target===caseModal){caseModal.classList.remove("open");document.body.style.overflow=""}})}
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&caseModal?.classList.contains("open")){caseModal.classList.remove("open");document.body.style.overflow=""}});

let lastY=scrollY;
addEventListener("scroll",()=>{
  const delta=scrollY-lastY;
  document.documentElement.style.setProperty("--scroll-velocity",Math.min(Math.abs(delta),25)+"px");
  lastY=scrollY;
},{passive:true});

$$(".section-head h2,.case-title h3,.small-case h3").forEach(el=>{
  const text=el.textContent;
  if(text.length<40 && !el.dataset.split){
    el.dataset.split="1";
    el.innerHTML=[...text].map((c,i)=>`<span style="--i:${i}">${c===" "?"&nbsp;":c}</span>`).join("");
    el.classList.add("split-text");
  }
});
