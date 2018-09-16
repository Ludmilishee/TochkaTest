(function () {
    let a = document.querySelector('a[href^="#second"]');
    a.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
})();
