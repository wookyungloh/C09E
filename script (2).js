function showContent(categoryId) {
    // 모든 콘텐츠 숨기기
    var contents = document.querySelectorAll('.content');
    contents.forEach(function(content) {
        content.style.display = 'none';
    });

    // 클릭한 카테고리만 보이도록 설정
    document.getElementById(categoryId).style.display = 'block';
}