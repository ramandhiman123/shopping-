function signup() {

    let username = document.getElementById('username');
    let email = document.getElementById('mail');
    let pw = document.getElementById('pw');
    let exp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let reg =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    let error1 = document.getElementById("error1");
    let error2 = document.getElementById("error2");
    let error3 = document.getElementById("error3");


    if (username.value == "" && email.value == "" && pw.value == "")
    {
        error1.textContent = "*Please enter the username.";
        error1.style.color = "red"
        username.style.border= "1px solid red";

        error2.textContent = "*Please enter the Email";
        error2.style.color = "red"
        email.style.border= "1px solid red";

        error3.textContent = "*Please enter the password";
        error3.style.color = "red"
        pw.style.border = "1px solid red";

    }
    else if (username.value == "") {

        error1.textContent = "*Please enter the username.";
        error1.style.color = "red"
        username.style.border= "1px solid red";
     

    }
    else if(username.value.trim() != username.value){
        error1.textContent = "*username can't be start with a space.";
        error1.style.color = "red"
        username.style.border= "1px solid red";
    
        
    }
    
    else if(email.value == ""){
        error1.textContent = "";
        username.style.border= "2px solid green";
        error2.textContent = "*Please enter the Email";
        error2.style.color = "red"
        email.style.border= "1px solid red";
     
           }
            else if(email.value.trim() != email.value){
                
            error1.textContent = "";
            username.style.border= "2px solid green";
            error2.textContent = "*Email can't be start with a space.";
            error2.style.color = "red"
            email.style.border= "1px solid red";
           
           }
         else if(!email.value.match(exp)){
            
            error1.textContent = "";
            username.style.border= "2px solid green";
                    error2.textContent = "*Please enter @ ";
                    error2.style.color = "red"
                    email.style.border = "1px solid red";
           }
            
           else if(pw.value.length == 0){
            
            error2.textContent = "";
            email.style.border= "2px solid green";
            error3.textContent = "*Please enter the password";
            error3.style.color = "red"
            pw.style.border = "1px solid red";
        }
       else if(pw.value.trim() != pw.value){
        error2.textContent = "";
            email.style.border= "2px solid green";
            error3.textContent = "*pw can't be start with a space.";
            error3.style.color = "red"
            pw.style.border = "1px solid red";
        }

        else if(pw.value.length < 8 || pw.value.length > 15){
            error2.textContent = "";
            email.style.border= "2px solid green";
            error3.textContent = "*Password must be contain 8 character";
            error3.style.color = "red"
            pw.style.border= "1px solid red";
        }
        else if(!pw.value.match(reg)){
            error2.textContent = "";
            email.style.border= "2px solid green";
            error3.textContent = "*Please enter special character";
            error3.style.color = "red"
            pw.style.border = "1px solid red";
        } 
        else {
            error3.textContent = "";
            pw.style.border= "2px solid green";
            error1.textContent = "";
            username.style.border= "2px solid green";
            error2.textContent = "";
               email.style.border= "2px solid green";
            error3.textContent = "";
               pw.style.border= "2px solid green";
               alert('hello');
               window.location="login.html"; 
       }
       return false; 

    }


    function login() {
        let storedName = localStorage.getItem('username');
        let storedPw = localStorage.getItem('pw');
        let userName = document.getElementById('userName');
        let userPw = document.getElementById('userPw'); 
        if (userName.value == storedName && userPw.value == storedPw) {
            alert('You are logged in.');
            window.location = "file:///C:/Users/Raman/OneDrive/Desktop/js%20final/home.html?";
        } else {
            alert('Error on login');
        }
    }
