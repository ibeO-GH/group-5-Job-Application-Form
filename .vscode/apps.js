const form = document.querySelector(".btn_two");
form.addEventListener("click", function(){
 alert("Welcome to the application form");
});
var userName = prompt ("What is your name");
var userEmail = prompt ("What is your Email Address");
var userGender = prompt ("What do you identify as?");
var userAge = prompt ("How old are you?");
var userPosition = prompt("what position are you applying for?");
document.write (`Hello, We have received your details and we can see that your name is ${userName},
    and your email address as submitted is ${userEmail}and  you 
    identify as ${userGender} and you are ${userAge} years old ,and you are currently applying for 
    the position of ${userPosition},we also took note that you are have provided your resume link and submitted your resume.
    Click on okay if all these details are correct so you could progress to our website .`);
     alert("Application received");  

     document.getElementById("land").addEventListener("click",function(){
        window.location.href = "page.html"
     })
     const login = document.querySelector(".land");
     login.addEventListener("click", function(){
        functiongetUserInput()
            returnprompt(message)
    })
    function authenticate (username,password){
    if(username === "funmilola@gmail.com" && password === 987650){
     console.log("welcome!");
    }else {
    console.log("username and password not correct")
    }
    alert(`re-enter username & password`);
    }
    