// public/assets/js/auth.js

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Implement form validation here, e.g., check if email and password are valid

            // Send login data to the server
            fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            })
            .then((response) => {
                if (response.status === 200) {
                    // Redirect to the user profile page on successful login
                    window.location.href = '/profile';
                } else {
                    // Display an error message to the user
                    alert('Login failed. Please check your email and password.');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        });
    }
});
