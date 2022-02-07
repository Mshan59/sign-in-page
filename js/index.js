function Validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="admin"&& password=="user")
    {
        alert("Sign In Succesfully");
        return false;
    }
    else{
        alert("Sign In failed")
    }
}