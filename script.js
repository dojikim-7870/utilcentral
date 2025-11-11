// =======================================================
// UtilCentral - script.js
// 메인 페이지 검색, 카드 데이터, 공통 기능 포함
// =======================================================

// 1. (삭제) 이전에 사용하던 toolsData 배열은 HTML의 정적 카드와 충돌하므로 제거합니다.

// 2. 메인 페이지: 검색 기능 초기화 함수 (정적 카드 처리 로직)
function initializeSearch() {
    // HTML에 존재하는 정적 카드를 DOM에서 모두 가져와 검색 데이터를 준비합니다.
    // 이 부분이 HTML에서 삭제했던 검색 로직입니다.
    const toolsData = Array.from(document.querySelectorAll('.tool-card')).map(card => ({
        element: card,
        title: card.querySelector('.domain')?.textContent || '',
        hook: card.querySelector('p')?.textContent || ''
    }));

    const searchInput = document.getElementById('global-search');

    if (searchInput) {
        // 키보드 입력 시 검색을 실행하는 리스너 추가
        searchInput.addEventListener('keyup', e => {
            const searchTerm = e.target.value.toLowerCase().trim();
            toolsData.forEach(tool => {
                const fullText = (tool.title + ' ' + tool.hook).toLowerCase();
                // 검색 결과에 따라 카드를 보이거나 숨깁니다.
                tool.element.style.display = fullText.includes(searchTerm) ? 'block' : 'none';
            });
        });
    }
}

// 3. 공통: 초기화 함수 (DOM이 로드된 후 실행)
document.addEventListener('DOMContentLoaded', function() {
    // 메인 페이지 기능 실행 (검색)
    initializeSearch();
    
    /* ⭐ 햄버거 메뉴 토글 기능 */
    const hamburger = document.getElementById('hamburger');
    const mainNav = document.getElementById('main-nav');

    if (hamburger && mainNav) {
        hamburger.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
        
        // 메뉴 아이템 클릭 시 메뉴 자동 닫기 
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                // 모바일 환경(768px 이하)에서만 메뉴를 닫습니다.
                if (window.innerWidth <= 768) {
                    mainNav.classList.remove('active');
                }
            });
        });
    }
});