const app = document.getElementById('app');

async function navigate(page) {

    if (page === 'home') {
        const response = await fetch('/api/hello');
        const data = await response.json();

        app.innerHTML = `
            <h1>Home Page</h1>
            <p>${data.message}</p>
        `;
    }

    else if (page === 'about') {
        app.innerHTML = `
            <h1>About Us</h1>
            <p>This is a Node.js Single Page Application.</p>
        `;
    }

    else if (page === 'contact') {
        app.innerHTML = `
            <h1>Contact Us</h1>
            <p>Contact: support@example.com</p>
        `;
    }

    history.pushState({ page }, '', `/${page}`);
}

// Handle browser back and forward
window.addEventListener('popstate', () => {
    const page = location.pathname.substring(1) || 'home';
    navigatePage(page);
});

function navigatePage(page) {
    if (page === 'home' || page === 'about' || page === 'contact') {
        if (page === 'home') {
            fetch('/api/hello')
                .then(res => res.json())
                .then(data => {
                    app.innerHTML = `<h1>Home Page</h1><p>${data.message}</p>`;
                });
        } else {
            app.innerHTML = `<h1>${page.toUpperCase()} Page</h1>`;
        }
    }
}

navigatePage(location.pathname.substring(1) || 'home');