document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();

  let valid = true;
  let name = document.getElementById('name').value.trim();
  let email = document.getElementById('email').value.trim();
  let password = document.getElementById('password').value.trim();
  let phone = document.getElementById('phone').value.trim();

  // Clear old messages
  document.querySelectorAll('.error').forEach(e => e.textContent = '');
  document.getElementById('successMsg').textContent = '';

  // Name validation
  if (name === "") {
    document.getElementById('nameError').textContent = "Please enter your name 🙏";
    valid = false;
  }

  // Email validation
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById('emailError').textContent = "Enter a valid email 📧";
    valid = false;
  }

  // Password validation
  if (password.length < 6) {
    document.getElementById('passwordError').textContent = "Minimum 6 characters 🔐";
    valid = false;
  }

  // Phone number validation
  if (!/^[6-9]\d{9}$/.test(phone)) {
    document.getElementById('phoneError').textContent = "Enter valid 10-digit phone 📱";
    valid = false;
  }

  if (valid) {
    document.getElementById('successMsg').textContent = "🎉 Registered Successfully!";
    document.getElementById('registerForm').reset();
  }
});
