document.querySelectorAll('.category-btn').forEach(function(button) {
    button.addEventListener('click', function() {
        var contentId = this.getAttribute('data-target');
        var content = document.getElementById(contentId);

        // 모든 content를 숨기기
        document.querySelectorAll('.content').forEach(function(content) {
            content.classList.remove('active');
        });

        // 클릭한 content만 보이도록
        content.classList.add('active');
    });
});