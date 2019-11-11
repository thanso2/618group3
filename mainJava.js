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