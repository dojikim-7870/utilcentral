// 1. 유틸리티 데이터 (toolsData)
const toolsData = [
  { id: 1, title: "Finance Tools Hub", hook: "Easily manage currencies, conversions, and financial calculations in one place!", tags: ["Loans","Income & Tax","Interest Calculators","Assets","Retirement"], url:"https://financetools.info" },
  { id: 2, title: "Prompt Builder", hook: "Build and refine AI prompts instantly with real examples and smart templates.", tags: ["AI","Prompt","ChatGPT","Writing"], url:"https://promptbuilder.life" },
  { id: 3, title: "Image Tool Suite", hook: "Compress, crop, blur, or make transparent PNGs online — all in one place.", tags: ["Image","Editing","Design","Photo"], url:"https://imagetool.info" },
  { id: 4, title: "SolveKit Utilities", hook: "Convert files, extract data, and simplify work with powerful online tools.", tags: ["Utility","Converter","PDF","Productivity"], url:"https://solvekit.info" },
  { id: 5, title: "Fixlo Productivity Hub", hook: "Stay organized with all-in-one calculators and focus tools for creators.", tags: ["Productivity","Focus","Toolkit","Utility"], url:"https://fixlo.info" },
  { id: 6, title: "Petopia Animal Tools", hook: "Smart pet care calculators and breed tools for every animal lover.", tags: ["Pet","Animal","Health","Lifestyle"], url:"https://petopia.icu" },
  { id: 7, title: "UtilHub Central", hook: "Your ultimate toolkit for daily use — converters, counters, and more.", tags: ["Utility","Tools","Converter","All-in-one"], url:"https://utilhub.xyz" },
  { id: 8, title: "Dokit Online Tools", hook: "From time zones to text formatting, everything you need in one toolkit.", tags: ["Time","Converter","Document","Tool"], url:"https://dokit.online" },
  { id: 9, title: "Convertly Suite", hook: "Instantly convert files, units, and data formats with precision.", tags: ["Conversion","Files","Units","Utility"], url:"https://convertly.icu" },
  { id: 10, title: "K-Style Planner", hook: "Aesthetic Korean-style planner templates for Notion and productivity.", tags: ["Planner","Notion","Kstyle","Template"], url:"https://kstyle.site" },
  { id: 11, title: "ToolMate Work Tools", hook: "Reliable online utilities for writing, reading, and creative tasks.", tags: ["Writing","Reading","SEO","Tools"], url:"https://toolmate.us" },
  { id: 12, title: "MBTI Love", hook: "Discover your MBTI, compatibility, and personalized insights with fun tests.", tags: ["MBTI","Personality","Love","Test"], url:"https://mbtilove.xyz" },
  { id: 13, title: "Thinko Mind Tools", hook: "Brain-boosting productivity and idea generation tools for smart creators.", tags: ["Productivity","Thinking","Idea","Mind"], url:"https://thinko.fun" },
  { id: 14, title: "EduSpot Learning Hub", hook: "Smart study planners and AI-powered learning helpers for students.", tags: ["Education","Learning","AI","Study"], url:"https://eduspot.online" },
  { id: 15, title: "New Tool Coming Soon!", hook: "The function you've been waiting for! A brand new tool will be released next Monday.", tags: ["ComingSoon","Update"], url:"coming-soon.html", isStrategic:true },
  { id: 16, title: "Partner Program / Advertise", hook: "Get your tool in front of thousands of users. See our partnership options.", tags: ["Advertise","Partner","Business"], url:"advertise.html", isStrategic:true }
];

// 2. DOM 요소 가져오기
const toolGrid = document.getElementById('tool-grid');
const searchInput = document.getElementById('global-search');

// 3. 카드 생성 및 렌더링
function renderCards(tools){
  toolGrid.innerHTML = '';
  tools.forEach(tool => {
    const card = document.createElement('a');
    card.className = 'tool-card' + (tool.isStrategic ? ' strategic' : '');
    card.href = tool.url;
    card.target = '_blank';
    const tagHtml = tool.tags.map(tag=>`<span>#${tag}</span>`).join('');
    card.innerHTML = `<h3>${tool.title}</h3><p class="hook">${tool.hook}</p><div class="tags">${tagHtml}</div>`;
    toolGrid.appendChild(card);
  });
}

// 4. 검색
searchInput.addEventListener('keyup', e=>{
  const term = e.target.value.toLowerCase().trim();
  if(!term){ renderCards(toolsData); return; }
  const filtered = toolsData.filter(tool=> (tool.title+' '+tool.hook+' '+tool.tags.join(' ')).toLowerCase().includes(term));
  renderCards(filtered);
});

// 5. 초기 로드
window.onload = ()=>{ renderCards(toolsData); };
