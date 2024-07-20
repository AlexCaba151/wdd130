document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.flex-img img').forEach(img => {
        img.addEventListener('click', function() {
            this.classList.toggle('active');
            document.querySelector('.overlay').style.display = this.classList.contains('active') ? 'block' : 'none';
        });
    });

    document.querySelector('.overlay').addEventListener('click', function() {
        document.querySelectorAll('.flex-img img.active').forEach(img => {
            img.classList.remove('active');
        });
        this.style.display = 'none';
    });
});


