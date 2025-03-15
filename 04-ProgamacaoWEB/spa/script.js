function navigate(page) {
    const content = document.getElementById('content');
    if (page === 'home') {
        content.innerHTML = '<h1>Home</h1><p>Welcome to the home page.</p>';
    } else if (page === 'about') {
        content.innerHTML = '<h1>About</h1><p>This is the about page.</p>';
    } else if (page === 'contact') {
        content.innerHTML = '<h1>Contact</h1><p>This is the contact page.</p>';
    }
}