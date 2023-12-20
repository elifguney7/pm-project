 
 document.addEventListener('DOMContentLoaded', function () {
 // Get references to the input fields for sign-up
 var firstnameInput = document.getElementById('firstname-input');
 var lastnameInput = document.getElementById('lastname-input');
 var emailInputSignUp = document.getElementById('email-input-signup'); // Note: Same ID as sign-in
 var passwordInputSignUp = document.getElementById('password-input-signup');
 var repasswordInput = document.getElementById('repassword-input');
 var signupButton = document.getElementById('signup-button');

   
    // Add event listener to the sign-up button
    signupButton.addEventListener('click', function () {
        // Get the entered values for sign-up
        var firstname = firstnameInput.value.trim();
        var lastname = lastnameInput.value.trim();
        var emailSignUp = emailInputSignUp.value.trim();
        var passwordSignUp = passwordInputSignUp.value.trim();
        var repassword = repasswordInput.value.trim();
    
        // Check if any field is empty for sign-up
        if (firstname === '' || lastname === '' || emailSignUp === '' || passwordSignUp === '' || repassword === '') {
          alert('Please fill in all fields for sign-up.');
          return;
        }
    
        // Check email format using HTML5 constraint validation for sign-up
        if (!emailInputSignUp.checkValidity()) {
          alert('Please enter a valid email address for sign-up.');
          return;
        }
    
        // Simple password match validation for sign-up
        if (passwordSignUp !== repassword) {
          alert('Passwords do not match.');
          return;
        }
    
        alert('Sign-up successful! Redirecting to sign-in page...');
        window.location.href = 'signin.html';
      });
      
});