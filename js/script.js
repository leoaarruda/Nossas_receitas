document.querySelector('main').addEventListener('click', function() {
    this.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
