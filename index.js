const button = document.getElementById("btn");
const passwordMessage = document.getElementById('passwordMessage');
const newPassword = document.getElementById("newPassword");   
const greenSymbol = '<i class="fas fa-circle-check text-green-700 mr-2"></i>';
const redSymbol = '<i class="fa-solid fa-square-xmark text-red-600 mr-2"></i>'; 

// Event Listner to check if the passwords match or not
button.addEventListener("click", () => {
  const newPassword = document.getElementById("newPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (newPassword === confirmPassword) {
    passwordMessage.textContent = '';
  } else {
    passwordMessage.textContent = 'Passwords do not match!';
      passwordMessage.style.color = 'red';
  }

});


// Event Listner to check the password strength

newPassword.addEventListener('blur', checkPasswordStrength);

function checkPasswordStrength() {
    const newPassword = document.getElementById("newPassword").value;       
    const minLength = newPassword.length >= 8;
    const hasLowercase = /[a-z]/.test(newPassword);
    const hasUppercase = /[A-Z]/.test(newPassword);
    const hasSpecialSymbol = /[!@#$%^&*()~`|]/.test(newPassword);
    const hasNumber = /\d/.test(newPassword);
    

    document.querySelector('.length').style.color = minLength ? 'green' : 'red';  
    document.querySelector('.lcase').style.color = hasLowercase ? 'green' : 'red'; 
    document.querySelector('.upcase').style.color = hasUppercase ? 'green' : 'red'; 
    document.querySelector('.specialchar').style.color = hasSpecialSymbol ? 'green' : 'red';
    document.querySelector('.number').style.color = hasNumber ? 'green' : 'red';

    document.querySelector('.length').innerHTML = minLength ? `${greenSymbol}8 minimum characters` : `${redSymbol}8 minimum characters`;
    document.querySelector('.lcase').innerHTML = hasLowercase ? `${greenSymbol}One lowercase character` : `${redSymbol}One lowercase character`;
    document.querySelector('.upcase').innerHTML = hasUppercase ? `${greenSymbol}One uppercase character` : `${redSymbol}One uppercase character`;
    document.querySelector('.specialchar').innerHTML = hasSpecialSymbol ? `${greenSymbol}One special character` : `${redSymbol}One special character`;
    document.querySelector('.number').innerHTML = hasNumber ? `${greenSymbol}One number` : `${redSymbol}One number`;
    

}


