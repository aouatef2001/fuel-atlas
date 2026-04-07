
/* ── DATA ──────────────────────────────────────── */
const DATA = [
  {name:"Algeria",      flag:"🇩🇿",price:.35, ch:-1.2,hist:[.38,.37,.36,.36,.35,.34,.35]},
  {name:"Argentina",    flag:"🇦🇷",price:.74, ch:+4.1,hist:[.62,.65,.68,.70,.72,.73,.74]},
  {name:"Australia",    flag:"🇦🇺",price:1.47,ch:+1.8,hist:[1.38,1.40,1.42,1.43,1.44,1.46,1.47]},
  {name:"Belgium",      flag:"🇧🇪",price:1.89,ch:-.6, hist:[1.92,1.91,1.90,1.91,1.89,1.88,1.89]},
  {name:"Brazil",       flag:"🇧🇷",price:1.12,ch:+2.3,hist:[1.05,1.07,1.08,1.09,1.10,1.11,1.12]},
  {name:"Canada",       flag:"🇨🇦",price:1.21,ch:-.4, hist:[1.24,1.23,1.22,1.23,1.22,1.21,1.21]},
  {name:"China",        flag:"🇨🇳",price:.98, ch:+.9, hist:[.94,.95,.95,.96,.97,.98,.98]},
  {name:"Colombia",     flag:"🇨🇴",price:.62, ch:+1.5,hist:[.58,.59,.60,.61,.61,.62,.62]},
  {name:"Egypt",        flag:"🇪🇬",price:.43, ch:+.2, hist:[.42,.42,.42,.43,.43,.43,.43]},
  {name:"France",       flag:"🇫🇷",price:1.82,ch:-1.1,hist:[1.88,1.87,1.85,1.84,1.83,1.83,1.82]},
  {name:"Germany",      flag:"🇩🇪",price:1.79,ch:-.8, hist:[1.84,1.83,1.82,1.81,1.81,1.80,1.79]},
  {name:"India",        flag:"🇮🇳",price:.94, ch:+1.2,hist:[.89,.90,.91,.92,.93,.93,.94]},
  {name:"Indonesia",    flag:"🇮🇩",price:.67, ch:+.6, hist:[.64,.65,.65,.66,.66,.67,.67]},
  {name:"Iran",         flag:"🇮🇷",price:.04, ch:0,   hist:[.04,.04,.04,.04,.04,.04,.04]},
  {name:"Iraq",         flag:"🇮🇶",price:.45, ch:+.5, hist:[.43,.44,.44,.44,.45,.45,.45]},
  {name:"Italy",        flag:"🇮🇹",price:1.85,ch:-.9, hist:[1.90,1.89,1.87,1.87,1.86,1.85,1.85]},
  {name:"Japan",        flag:"🇯🇵",price:1.35,ch:+2.7,hist:[1.28,1.30,1.31,1.32,1.33,1.34,1.35]},
  {name:"Kuwait",       flag:"🇰🇼",price:.34, ch:+.3, hist:[.33,.33,.33,.34,.34,.34,.34]},
  {name:"Libya",        flag:"🇱🇾",price:.03, ch:0,   hist:[.03,.03,.03,.03,.03,.03,.03]},
  {name:"Malaysia",     flag:"🇲🇾",price:.47, ch:+1.0,hist:[.44,.45,.45,.46,.46,.47,.47]},
  {name:"Mexico",       flag:"🇲🇽",price:1.05,ch:+1.7,hist:[.99,1.00,1.01,1.02,1.03,1.04,1.05]},
  {name:"Morocco",      flag:"🇲🇦",price:1.24,ch:+3.2,hist:[1.16,1.18,1.19,1.21,1.22,1.23,1.24]},
  {name:"Netherlands",  flag:"🇳🇱",price:2.04,ch:-1.5,hist:[2.11,2.10,2.08,2.07,2.06,2.05,2.04]},
  {name:"Nigeria",      flag:"🇳🇬",price:.58, ch:+5.3,hist:[.49,.51,.53,.55,.56,.57,.58]},
  {name:"Norway",       flag:"🇳🇴",price:2.12,ch:-.3, hist:[2.14,2.14,2.13,2.13,2.12,2.12,2.12]},
  {name:"Pakistan",     flag:"🇵🇰",price:.71, ch:-2.1,hist:[.75,.74,.74,.73,.72,.72,.71]},
  {name:"Poland",       flag:"🇵🇱",price:1.42,ch:+1.0,hist:[1.37,1.38,1.39,1.40,1.41,1.42,1.42]},
  {name:"Qatar",        flag:"🇶🇦",price:.41, ch:+.4, hist:[.40,.40,.40,.41,.41,.41,.41]},
  {name:"Russia",       flag:"🇷🇺",price:.63, ch:-.7, hist:[.65,.65,.64,.64,.64,.63,.63]},
  {name:"Saudi Arabia", flag:"🇸🇦",price:.50, ch:+.2, hist:[.49,.49,.50,.50,.50,.50,.50]},
  {name:"South Africa", flag:"🇿🇦",price:1.07,ch:+1.8,hist:[1.01,1.02,1.04,1.05,1.06,1.07,1.07]},
  {name:"South Korea",  flag:"🇰🇷",price:1.52,ch:+.7, hist:[1.47,1.48,1.49,1.50,1.51,1.51,1.52]},
  {name:"Spain",        flag:"🇪🇸",price:1.61,ch:-.5, hist:[1.64,1.63,1.63,1.62,1.62,1.61,1.61]},
  {name:"Turkey",       flag:"🇹🇷",price:1.41,ch:+6.2,hist:[1.22,1.26,1.30,1.34,1.37,1.39,1.41]},
  {name:"UAE",          flag:"🇦🇪",price:.77, ch:+.9, hist:[.74,.74,.75,.75,.76,.77,.77]},
  {name:"UK",           flag:"🇬🇧",price:1.96,ch:-.8, hist:[2.01,2.00,1.99,1.98,1.97,1.97,1.96]},
  {name:"USA",          flag:"🇺🇸",price:1.04,ch:+1.4,hist:[.98,.99,1.00,1.01,1.02,1.03,1.04]},
  {name:"Venezuela",    flag:"🇻🇪",price:.01, ch:0,   hist:[.01,.01,.01,.01,.01,.01,.01]},
  {name:"Vietnam",      flag:"🇻🇳",price:.86, ch:+2.0,hist:[.81,.82,.83,.84,.85,.86,.86]},
  {name:"Zimbabwe",     flag:"🇿🇼",price:1.31,ch:+3.8,hist:[1.19,1.22,1.25,1.27,1.29,1.30,1.31]},
];

const WEEKS = ["6w ago","5w ago","4w ago","3w ago","2w ago","Last w.","Now"];
const RATES = {USD:1, EUR:.92, MAD:9.97};
const SYMS  = {USD:"$", EUR:"€", MAD:"MAD "};
const CMP_COLS = ["#38bdf8","#818cf8","#34d399"];

/* ── STATE ─────────────────────────────────────── */
let cur     = "USD";
let sortBy  = "def";
let favs    = new Set(JSON.parse(localStorage.getItem("gt-favs")||"[]"));
let trendC  = DATA.find(d=>d.name==="Morocco");
let trendCh = null;
let cmpCh   = null;

/* ── HELPERS ───────────────────────────────────── */
const p   = (v)=> SYMS[cur]+(v*RATES[cur]).toFixed(2);
const ph  = (v)=> (v*RATES[cur]).toFixed(3);
const isLight = ()=> document.documentElement.dataset.theme==="light";

function bdg(ch){
  if(ch>0) return`<span class="bdg up">↑ ${ch.toFixed(1)}%</span>`;
  if(ch<0) return`<span class="bdg dn">↓ ${Math.abs(ch).toFixed(1)}%</span>`;
  return`<span class="bdg fl">→ stable</span>`;
}

function cc(){
  const l = isLight();
  return{
    grid:  l?"rgba(0,0,0,.07)":  "rgba(255,255,255,.05)",
    tick:  l?"#94a3b8":          "#475569",
    bg:    l?"#ffffff":           "#0d1225",
    bd:    l?"rgba(0,0,0,.1)":   "rgba(255,255,255,.1)",
    tt:    l?"#0f172a":           "#eef2ff",
    tb:    l?"#475569":           "#94a3b8",
    leg:   l?"#475569":           "#94a3b8",
  };
}

/* ── HIGHLIGHTS ────────────────────────────────── */
function renderHL(){
  const asc = [...DATA].sort((a,b)=>a.price-b.price);
  const byC = [...DATA].filter(d=>d.ch!==0).sort((a,b)=>b.ch-a.ch);

  const rows=(list,fn)=>list.slice(0,3).map(d=>`
    <div class="hl-row">
      <span class="hl-name">${d.flag} ${d.name}</span>
      <span class="hl-val">${fn(d)}</span>
    </div>`).join("");

  document.getElementById("hlCheap").innerHTML   = rows(asc, d=>p(d.price));
  document.getElementById("hlPricey").innerHTML  = rows([...asc].reverse(), d=>p(d.price));
  document.getElementById("hlRising").innerHTML  = rows(byC, d=>`+${d.ch.toFixed(1)}%`);
  document.getElementById("hlFalling").innerHTML = rows([...byC].reverse(), d=>`${d.ch.toFixed(1)}%`);
}

/* ── CARDS ─────────────────────────────────────── */
function renderCards(list){
  const grid = document.getElementById("cardsGrid");
  const em   = document.getElementById("emptyMsg");
  if(!list.length){ grid.innerHTML=""; em.style.display="block"; return; }
  em.style.display="none";

  grid.innerHTML = list.map((d,i)=>{
    const fv = favs.has(d.name);
    return`<div class="card${fv?" starred":""}" style="animation-delay:${i*.027}s" data-n="${d.name}">
      <span class="fav-mark">⭐</span>
      <div class="card-top">
        <span class="flag">${d.flag}</span>
        <div class="card-mid">
          ${bdg(d.ch)}
          <button class="fav-btn${fv?" on":""}" data-n="${d.name}" title="${fv?"Remove":"Save"} favourite">${fv?"⭐":"☆"}</button>
        </div>
      </div>
      <div class="cname">${d.name}</div>
      <div class="cprice">${p(d.price)}</div>
      <div class="cunit">${cur} per litre</div>
    </div>`;
  }).join("");

  grid.querySelectorAll(".card").forEach(el=>{
    el.addEventListener("click",e=>{
      if(e.target.closest(".fav-btn")) return;
      trendC = DATA.find(d=>d.name===el.dataset.n);
      document.getElementById("trendSel").value = trendC.name;
      renderTrend();
      document.getElementById("trends").scrollIntoView({behavior:"smooth"});
    });
  });

  grid.querySelectorAll(".fav-btn").forEach(btn=>{
    btn.addEventListener("click",e=>{
      e.stopPropagation();
      const n = btn.dataset.n;
      favs.has(n)? favs.delete(n): favs.add(n);
      localStorage.setItem("gt-favs",JSON.stringify([...favs]));
      applyAll(document.getElementById("cardSearch").value);
    });
  });
}

function applyAll(q=""){
  let list = DATA.filter(d=>!q||d.name.toLowerCase().includes(q.toLowerCase()));
  if(sortBy==="asc")  list.sort((a,b)=>a.price-b.price);
  if(sortBy==="desc") list.sort((a,b)=>b.price-a.price);
  if(sortBy==="az")   list.sort((a,b)=>a.name.localeCompare(b.name));
  if(sortBy==="rise") list.sort((a,b)=>b.ch-a.ch);
  if(sortBy==="fav")  list.sort((a,b)=>(favs.has(b.name)?1:0)-(favs.has(a.name)?1:0)||a.name.localeCompare(b.name));
  renderCards(list);
}

/* ── TREND CHART ───────────────────────────────── */
function buildTrendSel(){
  const sel = document.getElementById("trendSel");
  DATA.forEach(d=>{
    const o=document.createElement("option");
    o.value=d.name; o.textContent=`${d.flag} ${d.name}`;
    if(d.name===trendC.name) o.selected=true;
    sel.appendChild(o);
  });
}

function renderTrend(){
  const d  = trendC;
  const up = d.ch>=0;
  const col= up?"#38bdf8":"#f87171";
  const c  = cc();
  if(trendCh) trendCh.destroy();
  const ctx = document.getElementById("trendChart").getContext("2d");
  const grad = ctx.createLinearGradient(0,0,0,280);
  grad.addColorStop(0, up?"rgba(56,189,248,.22)":"rgba(248,113,113,.2)");
  grad.addColorStop(1,"rgba(0,0,0,0)");

  trendCh = new Chart(ctx,{
    type:"line",
    data:{
      labels:WEEKS,
      datasets:[{
        label:`${d.flag} ${d.name} — ${cur}/L`,
        data:d.hist.map(v=>+(v*RATES[cur]).toFixed(3)),
        borderColor:col,borderWidth:2,
        pointBackgroundColor:col,pointRadius:5,pointHoverRadius:8,
        fill:true,backgroundColor:grad,tension:.42,
      }]
    },
    options:{
      responsive:true,
      interaction:{mode:"index",intersect:false},
      plugins:{
        legend:{labels:{color:c.leg,font:{family:"'Plus Jakarta Sans',sans-serif",size:13}}},
        tooltip:{
          backgroundColor:c.bg,borderColor:c.bd,borderWidth:1,
          titleColor:c.tt,bodyColor:c.tb,padding:12,
          callbacks:{label:x=>` ${SYMS[cur]}${ph(d.hist[x.dataIndex])} / litre`}
        }
      },
      scales:{
        x:{grid:{color:c.grid},ticks:{color:c.tick,font:{family:"'Plus Jakarta Sans',sans-serif",size:12}}},
        y:{grid:{color:c.grid},ticks:{color:c.tick,font:{family:"'Plus Jakarta Sans',sans-serif",size:12},callback:v=>`${SYMS[cur]}${v.toFixed(2)}`}}
      }
    }
  });
}

/* ── COMPARE CHART ─────────────────────────────── */
function buildCmpSels(){
  document.querySelectorAll("#cmpSels .sel").forEach(sel=>{
    DATA.forEach(d=>{
      const o=document.createElement("option");
      o.value=d.name; o.textContent=`${d.flag} ${d.name}`;
      sel.appendChild(o);
    });
    sel.addEventListener("change",renderCmp);
  });
  const sels=document.querySelectorAll("#cmpSels .sel");
  sels[0].value="Morocco";
  sels[1].value="France";
  sels[2].value="USA";
  renderCmp();
}

function renderCmp(){
  const c = cc();
  const picks=[...document.querySelectorAll("#cmpSels .sel")]
    .map(s=>DATA.find(d=>d.name===s.value)).filter(Boolean);
  if(cmpCh) cmpCh.destroy();
  const ctx=document.getElementById("cmpChart").getContext("2d");
  cmpCh=new Chart(ctx,{
    type:"line",
    data:{
      labels:WEEKS,
      datasets:picks.map((d,i)=>({
        label:`${d.flag} ${d.name}`,
        data:d.hist.map(v=>+(v*RATES[cur]).toFixed(3)),
        borderColor:CMP_COLS[i],borderWidth:2.2,
        pointBackgroundColor:CMP_COLS[i],pointRadius:4,pointHoverRadius:7,
        fill:false,tension:.42,
      }))
    },
    options:{
      responsive:true,
      interaction:{mode:"index",intersect:false},
      plugins:{
        legend:{labels:{color:c.leg,font:{family:"'Plus Jakarta Sans',sans-serif",size:13}}},
        tooltip:{
          backgroundColor:c.bg,borderColor:c.bd,borderWidth:1,
          titleColor:c.tt,bodyColor:c.tb,padding:12,
          callbacks:{label:x=>` ${SYMS[cur]}${x.parsed.y.toFixed(3)} / litre`}
        }
      },
      scales:{
        x:{grid:{color:c.grid},ticks:{color:c.tick,font:{family:"'Plus Jakarta Sans',sans-serif",size:12}}},
        y:{grid:{color:c.grid},ticks:{color:c.tick,font:{family:"'Plus Jakarta Sans',sans-serif",size:12},callback:v=>`${SYMS[cur]}${v.toFixed(2)}`}}
      }
    }
  });
}

/* ── CURRENCY ──────────────────────────────────── */
function setCur(c){
  cur=c;
  document.querySelectorAll(".cur-btn").forEach(b=>b.classList.toggle("on",b.dataset.c===c));
  const avg=(DATA.reduce((s,d)=>s+d.price,0)/DATA.length*RATES[c]);
  document.getElementById("avgEl").textContent=SYMS[c]+avg.toFixed(2);
  renderHL();
  applyAll(document.getElementById("cardSearch").value);
  renderTrend();
  renderCmp();
}

/* ── THEME ─────────────────────────────────────── */
function setTheme(light){
  document.documentElement.dataset.theme = light?"light":"dark";
  document.getElementById("themeBtn").textContent = light?"🌙":"☀️";
  localStorage.setItem("gt-theme",light?"light":"dark");
  setTimeout(()=>{ renderTrend(); renderCmp(); },60);
}

/* ── CSV EXPORT ────────────────────────────────── */
function exportCSV(){
  const rows=[["Country","Flag",`Price (${cur}/L)`,"Change (%)"]];
  DATA.forEach(d=>rows.push([d.name,d.flag,(d.price*RATES[cur]).toFixed(3),d.ch]));
  const a=document.createElement("a");
  a.href="data:text/csv;charset=utf-8,"+encodeURIComponent(rows.map(r=>r.join(",")).join("\n"));
  a.download=`gasoil-tracker-${new Date().toISOString().slice(0,10)}.csv`;
  a.click();
}

/* ── INIT ──────────────────────────────────────── */
(function init(){
  /* theme restore */
  const saved=localStorage.getItem("gt-theme");
  if(saved==="light") setTheme(true);

  /* last updated */
  document.getElementById("updatedEl").textContent=
    "Updated: "+new Date().toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"});

  /* theme toggle */
  document.getElementById("themeBtn").addEventListener("click",()=>{
    setTheme(!isLight());
  });

  /* mobile burger */
  document.getElementById("burger").addEventListener("click",()=>{
    document.getElementById("navLinks").classList.toggle("open");
  });

  /* currency */
  document.querySelectorAll(".cur-btn").forEach(b=>
    b.addEventListener("click",()=>setCur(b.dataset.c)));

  /* search sync hero ↔ card filter */
  const hs=document.getElementById("heroSearch");
  const cs=document.getElementById("cardSearch");
  hs.addEventListener("input",()=>{ cs.value=hs.value; applyAll(hs.value); });
  cs.addEventListener("input",()=>{ hs.value=cs.value; applyAll(cs.value); });

  /* sort */
  document.getElementById("sortSel").addEventListener("change",e=>{
    sortBy=e.target.value; applyAll(cs.value);
  });

  /* trend select */
  document.getElementById("trendSel").addEventListener("change",e=>{
    trendC=DATA.find(d=>d.name===e.target.value);
    renderTrend();
  });

  /* export */
  document.getElementById("exportBtn").addEventListener("click",exportCSV);

  /* boot everything */
  renderHL();
  applyAll();
  buildTrendSel();
  renderTrend();
  buildCmpSels();
})();
