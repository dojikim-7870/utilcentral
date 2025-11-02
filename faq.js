// =======================================================
// UtilHub - faq.js
// FAQ 페이지 아코디언 기능 전용
// =======================================================
document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const parentItem = question.closest('.faq-item');
            const isActive = parentItem.classList.contains('active');

            // 모든 아이템 닫기 (하나만 열리도록)
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // 닫혀있었다면 현재 아이템 열기
            if (!isActive) {
                parentItem.classList.add('active');
            }
        });
    });
});