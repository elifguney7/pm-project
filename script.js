document.addEventListener('DOMContentLoaded', function () {
    // Get references to the email and password input fields for sign-in
    var emailInputSignIn = document.getElementById('email-input');
    var passwordInputSignIn = document.getElementById('password-input');
    var signInButton = document.getElementById('signin-button');


  
    // Add event listener to the sign-in button
    signInButton.addEventListener('click', function () {
      // Get the entered email and password values for sign-in
      var emailSignIn = emailInputSignIn.value.trim();
      var passwordSignIn = passwordInputSignIn.value.trim();
  
      // Check email format using HTML5 constraint validation for sign-in
      if (!emailInputSignIn.checkValidity()) {
        alert('Please enter a valid email address for sign-in.');
        return;
      }
  
      // Simple validation: Check if password is not empty for sign-in
      if (emailSignIn === '' || passwordSignIn === '') {
        alert('Please enter both email and password for sign-in.');
        return;
      }
  
      alert('Sign-in successful! Redirecting to homepage...');
      window.location.href = 'HomePage.html'; // Redirect to the homepage
    });
  


  });
  