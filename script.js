function generatePassword() {
    const length = document.getElementById('length').value;
    const uppercase = document.getElementById('uppercase').checked;
    const lowercase = document.getElementById('lowercase').checked;
    const numbers = document.getElementById('numbers').checked;
    const symbols = document.getElementById('symbols').checked;

    const charset = getCharset(uppercase, lowercase, numbers, symbols);
    const password = generateRandomPassword(length, charset);

    document.getElementById('password').value = password;
}

const getCharset = (uppercase, lowercase, numbers, symbols) => {
    let charset = '';

    if (uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (lowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (numbers) charset += '0123456789';
    if (symbols) charset += '!@#$%^&*()_-+=[]{}|;:,.<>?';

    return charset;
}

const generateRandomPassword = (length, charset) => {
    let password = '';
    const charsetLength = charset.length;

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charsetLength);
        password += charset.charAt(randomIndex);
    }

    return password;
}

function copyPasswordToClipboard() {
    const passwordField = document.getElementById('password');

    if (passwordField.value.length >= 1) {
        passwordField.select();
        document.execCommand('copy');

        const copyIcon = document.getElementById('copy_icon');
        copyIcon.innerHTML = '<i class="fas fa-check"></i>';

        setTimeout(() => {
            copyIcon.innerHTML = '<i class="far fa-copy"></i>';
        }, 2000);
    }
}