// public/assets/js/auth.js

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    console.log("test")
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Implement form validation here, e.g., check if email and password are valid

            // Send login data to the server
            fetch('/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            })
            .then((response) => {
                if (response.status === 200) {
                    // Redirect to the user profile page on successful login
                    window.location.href = '/exercise';
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

const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#newUsername').value.trim();
    const password = document.querySelector('#newPassword').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/exercise');
      } else {
        alert(response.statusText);
      }
    }
  };

  document
  .querySelector('#signupForm')
  .addEventListener('submit', signupFormHandler);

