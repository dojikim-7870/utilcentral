// =======================================================
// UtilHub - script.js
// 메인 페이지 검색, 카드 데이터, 공통 기능 포함
// =======================================================

// 1. 메인 페이지: 유틸리티 카드 데이터
const toolsData = [
    { id: 1, title: "Text to PDF Converter", hook: "Turn large Word files into a PDF document in just 1 second!", tags: ["PDF", "Converter", "Document", "Word", "TXT"], url: "tools/text-to-pdf.html" },
    { id: 2, title: "Text Length Counter", hook: "Stop manual counting! Get a real-time word and character count.", tags: ["Content", "WordCount", "SEO", "Productivity"], url: "tools/text-length.html" },
    { id: 3, title: "QR Code Generator", hook: "Convert any link into a clean QR code in 0.5 seconds. Customizable design.", tags: ["Marketing", "QR", "Design", "Link"], url: "tools/qr-generator.html" },
    { id: 4, title: "Currency Converter", hook: "Shopping overseas? Get the most accurate, real-time exchange rates now.", tags: ["Finance", "Economy", "Exchange", "Money"], url: "tools/currency.html" },
    { id: 5, title: "Reading Time Estimator", hook: "Find out the exact time needed to read your content and boost user engagement.", tags: ["Content", "UX", "Time", "Reading"], url: "tools/reading-time.html" },
    { id: 6, title: "Image Compressor", hook: "Speed up your website! Optimize and compress images with minimal quality loss.", tags: ["Optimization", "Image", "WebSpeed", "JPG"], url: "tools/image-compressor.html" },
    { id: 7, title: "Password Generator", hook: "Stop worrying about security. Generate strong, customizable passwords instantly.", tags: ["Security", "Random", "Crypto", "Access"], url: "tools/password-generator.html" },
    { id: 8, title: "Color Palette Extractor", hook: "Need a color code? Instantly extract HEX/RGB from any image or website.", tags: ["Design", "Color", "HEX", "RGB"], url: "tools/color-extractor.html" },
    { id: 9, title: "URL Shortener", hook: "Tidy up messy URLs and track click statistics with a single, clean link.", tags: ["Marketing", "Link", "Analytics", "Traffic"], url: "tools/url-shortener.html" },
    { id: 10, title: "Base64 Encoder/Decoder", hook: "A developer's essential: Encode and decode Base64 strings locally and quickly.", tags: ["DeveloperTool", "Encoding", "Crypto", "Data"], url: "tools/base64.html" },
    { id: 11, title: "JSON Formatter", hook: "Clean up unreadable JSON! Easily validate and format it for debugging.", tags: ["DeveloperTool", "JSON", "Data", "Formatting"], url: "tools/json-formatter.html" },
    { id: 12, title: "Screen Recorder/Capture", hook: "Need a quick screenshot or video? Use this tool instantly without any installation.", tags: ["Capture", "Video", "Productivity", "Utility"], url: "tools/screen-recorder.html" },
    { id: 13, title: "CSV to JSON Converter", hook: "Quickly convert your data format from CSV to structured JSON with one click.", tags: ["DataConversion", "CSV", "JSON", "DeveloperTool"], url: "tools/csv-to-json.html" },
    { id: 14, title: "Time Zone Converter", hook: "Never miss a global meeting! Compare and convert time zones accurately.", tags: ["Global", "Scheduling", "Time", "Productivity"], url: "tools/time-converter.html" },
    { id: 15, title: "New Tool Coming Soon!", hook: "The function you've been waiting for! A brand new tool will be released next Monday.", tags: ["ComingSoon", "Update"], url: "[Coming Soon Page URL]", isStrategic: true },
    { id: 16, title: "Partner Program / Advertise", hook: "Get your tool in front of thousands of users. See our partnership options.", tags: ["Advertise", "Partner", "Business"], url: "[Advertisement Info URL]", isStrategic: true }
];

// 2. 메인 페이지: 카드 렌더링 함수
function renderCards(tools) {            
    const toolGrid = document.getElementById('tool-grid');
    if (!toolGrid) return; // 메인 페이지가 아닐 경우 실행하지 않음
    
    toolGrid.innerHTML = ''; 
    tools.forEach(tool => {                
        const card = document.createElement('a');                
        card.className = 'tool-card' + (tool.isStrategic ? ' strategic' : '');                
        card.href = tool.url;                                
        const tagHtml = tool.tags.map(tag => `<span>#${tag}</span>`).join('');                                
        card.innerHTML = `                    
            <h3>${tool.title}</h3>                    
            <p class="hook">${tool.hook}</p>                    
            <div class="tags">${tagHtml}</div>                
        `;                
        toolGrid.appendChild(card);            
    });        
}

// 3. 메인 페이지: 검색 기능 초기화
function initializeSearch() {
    const searchInput = document.getElementById('global-search');
    if (!searchInput) return;

    searchInput.addEventListener('keyup', (e) => {            
        const searchTerm = e.target.value.toLowerCase().trim();                        

        if (searchTerm === '') {                
            renderCards(toolsData); 
            return;            
        }

        const filteredTools = toolsData.filter(tool => {                
            const fullText = (tool.title + ' ' + tool.hook + ' ' + tool.tags.join(' ')).toLowerCase();                
            return fullText.includes(searchTerm);            
        });                        
        renderCards(filteredTools);        
    });

    // 초기 로드 시 전체 카드 렌더링
    renderCards(toolsData);    
}

// 4. 공통: 초기화 함수
document.addEventListener('DOMContentLoaded', function() {
    // 메인 페이지 기능 실행
    initializeSearch();
});