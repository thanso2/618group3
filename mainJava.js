function formValidator(){
    password1= document.forms["myForm"]["password"].value;
    password2= document.forms["myForm"]["verifypassword"].value
    if(password1!=password2){
        window.alert('Please ensure matching passwords');
    return false;
    }
    else{
        return true;
    }
}

function checkForm(){
    var oldPassword=document.forms["PasswordReset"]["oldpassword"].value;
    var newPassword=document.forms["PasswordReset"]["newpassword"].value;
    var confirmPassword=document.forms["PasswordReset"]["verifypassword"].value;

    if(oldPassword!="" && newPassword!="" && confirmPassword!=""){
        if(oldPassword!=newPassword){
            if(newPassword==confirmPassword){
                alert("Password has been updated");
                return true;
            }
            else {
                alert("New password needs to match");
                return false;
            }
        }
        else{
            alert("New password cannot be same as old password");
            return false;
        }
    }
    else {
        alert("All fields are required");
        return false;
    }
}