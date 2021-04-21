function message() {
    var email = document.getElementsByName('email')[0].value;
    var password = document.getElementsByName('password')[0].value;
    if (email == '') {
        document.getElementById('email_error_message').style.display = 'inline-block';
    } else if (password == '') {
        document.getElementById('email_error_message').style.display = 'none';
        document.getElementById('password_error_message').style.display = 'inline-block';
    } else {
        document.getElementById('email_error_message').style.display = 'none';
        document.getElementById('password_error_message').style.display = 'none';
    }
}