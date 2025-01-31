document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the email and password values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check credentials
    if (email === '123@gmail.com' && password === 'pass123') {
        // Successful login
        document.getElementById('login-message').textContent = 'Login successful! Redirecting...';
        document.getElementById('login-message').style.color = 'green';
        
        // Redirect to the home page after a short delay
        setTimeout(() => {
            window.location.href = 'index.html'; // Change this to your desired redirect page
        }, 2000);
    } else {
        // Failed login
        document.getElementById('login-message').textContent = 'Invalid email or password. Please try again.';
        document.getElementById('login-message').style.color = 'red';
    }
});