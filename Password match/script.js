const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const passwordMatchMessage = document.getElementById('password-match-message');
const passwordMismatchMessage = document.getElementById('password-mismatch-message');
const submitButton = document.getElementById('submit-button');

confirmPasswordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password === confirmPassword && password !== '') {
        passwordMatchMessage.style.display = 'block';
        passwordMismatchMessage.style.display = 'none';
        submitButton.disabled = false;
    } else {
        passwordMatchMessage.style.display = 'none';
        passwordMismatchMessage.style.display = 'block';
        submitButton.disabled = true;
    }
});
