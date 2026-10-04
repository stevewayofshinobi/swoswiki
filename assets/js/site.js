const PAGES = [
  {title:'Home', url:'index.html', desc:'Wiki overview and navigation.', icon:'assets/img/logo.png', keywords:'home overview wiki'},
  {title:'Getting Started', url:'getting-started.html', desc:'First steps, academy and early progression.', icon:'assets/img/bingo-book.png', keywords:'start guide academy genin beginner'},
  {title:'Clans & Jutsu', url:'clans-jutsu.html', desc:'Clan abilities, requirements and techniques.', icon:'assets/img/jutsu-scroll.png', keywords:'clans jutsu techniques uzumaki nara inuzuka hozuki'},
  {title:'Items', url:'items.html', desc:'Weapons, clothing, currency and utility items.', icon:'assets/img/kunai.png', keywords:'items weapons clothing ryo wallet gama chan'},
  {title:'Entities', url:'entities.html', desc:'NPCs, enemies, summons and companions.', icon:'assets/img/genin.png', keywords:'entities mobs genin nukenin dog puppets clones'},
  {title:'Villages & NPCs', url:'villages.html', desc:'Villages, vendors and important NPCs.', icon:'assets/img/protector-konoha.png', keywords:'villages konoha suna kiri iwa kumo vendors'},
  {title:'Missions', url:'missions.html', desc:'Mission ranks, objectives and rewards.', icon:'assets/img/mission-scroll.png', keywords:'missions quests ranks objectives rewards'},
  {title:'Progression & Chakra', url:'progression.html', desc:'Stats, chakra and character growth.', icon:'assets/img/progression.png', keywords:'progression chakra stats attributes byakugo'},
  {title:'Controls', url:'controls.html', desc:'Keybinds and input reference.', icon:'assets/img/chakra-paper.png', keywords:'controls keybinds keys input'},
  {title:'FAQ', url:'faq.html', desc:'Common player questions.', icon:'assets/img/ramen.png', keywords:'faq help troubleshooting'},
  {title:'Changelog', url:'changelog.html', desc:'Updates and patch notes.', icon:'assets/img/mission-crate.png', keywords:'changelog patch notes updates'},
  {title:'Credits', url:'credits.html', desc:'Project info and credits.', icon:'assets/img/logo.png', keywords:'credits about project'}
];

const path = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('[data-nav]').forEach(a => { if (a.getAttribute('href') === path) a.classList.add('active'); });

const menuBtn = document.querySelector('[data-menu]');
const drawer = document.querySelector('.mobile-drawer');
if (menuBtn && drawer) menuBtn.addEventListener('click', () => drawer.classList.toggle('open'));

const search = document.querySelector('[data-search]');
const results = document.querySelector('[data-search-results]');
function renderSearch(q){
  if(!search || !results) return;
  q=q.trim().toLowerCase();
  if(!q){results.classList.remove('show');results.innerHTML='';return;}
  const found=PAGES.filter(p => (p.title+' '+p.desc+' '+p.keywords).toLowerCase().includes(q)).slice(0,8);
  results.innerHTML=found.length?found.map(p=>`<a class="search-result" href="${p.url}"><img src="${p.icon}" alt=""><span><b>${p.title}</b><small>${p.desc}</small></span></a>`).join(''):'<div class="search-result"><span><b>No results</b><small>Try a broader term.</small></span></div>';
  results.classList.add('show');
}
if(search){ search.addEventListener('input',e=>renderSearch(e.target.value)); search.addEventListener('keydown',e=>{if(e.key==='Escape'){search.value='';renderSearch('')}}); }
document.addEventListener('keydown',e=>{if(e.key==='/' && document.activeElement?.tagName!=='INPUT'){e.preventDefault();search?.focus();}});
document.addEventListener('click',e=>{if(results && search && !results.contains(e.target) && e.target!==search)results.classList.remove('show')});

document.querySelectorAll('.accordion button').forEach(btn=>btn.addEventListener('click',()=>btn.parentElement.classList.toggle('open')));

const tocLinks=[...document.querySelectorAll('.toc a[href^="#"]')];
if(tocLinks.length){
 const obs=new IntersectionObserver(entries=>{entries.forEach(en=>{if(en.isIntersecting){tocLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+en.target.id))}})},{rootMargin:'-20% 0px -70% 0px'});
 tocLinks.forEach(a=>{const s=document.querySelector(a.getAttribute('href'));if(s)obs.observe(s)});
}
