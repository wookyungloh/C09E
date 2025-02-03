document.querySelectorAll('.category-btn').forEach(function(button) {
    button.addEventListener('click', function() {
        var contentId = this.getAttribute('data-target');
        var content = document.getElementById(contentId);

        // content가 보이거나 숨겨지도록 토글
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
});