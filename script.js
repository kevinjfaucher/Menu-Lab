// Toggle the menu visibility when the button is clicked
document.getElementById('menu-btn').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

// Show letters and hide numbers
document.getElementById('show-letters').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('letters').style.display = 'block';
    document.getElementById('numbers').style.display = 'none';
    document.getElementById('menu').style.display = 'none';
});

// Show numbers and hide letters
document.getElementById('show-numbers').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('letters').style.display = 'none';
    document.getElementById('numbers').style.display = 'block';
    document.getElementById('menu').style.display = 'none';
});
