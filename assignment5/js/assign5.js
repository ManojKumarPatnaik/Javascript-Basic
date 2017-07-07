var phoneValid = true;
var nameValid = true;
var passwordValid = true;
var rtpasswordValid = true;
var eduValid = true;

function validateForm(frm) {
    console.log("!!!!!")
    validphone(frm.phoneNum);
    validName(frm.firstname,'first-error');
    validName(frm.lastname,'last-error');
    validPassword(frm.password);
    validPassword(frm.rtpassword);
    validEduStatus(frm.eduStatus);

   if(phoneValid == true &&
        nameValid == true &&
        passwordValid == true&&
        rtpasswordValid == true&&
        eduValid == true){

       return true;
   }else{
       return false;
   }
}

function validphone(elem){
    var phoneErrorContainer = document.querySelector("#phone-error");
    var num = elem.value;
    phoneErrorContainer.innerHTML = "";
    if(num.trim().length == 12){
      if(num[3] != "|" && num[7] != "|"){
        if(num.substr(0,3) != "000"){
              if(num !="000-000-0000"){
                phoneErrorContainer.innerHTML = ""
                phoneValid = true;
              }else{
                phoneErrorContainer.innerHTML = "Phone number cannot be all zeros"
                phoneValid = false;
              }
          }else{
          phoneErrorContainer.innerHTML = "The area code (first 3 numbers) can't be all zeros (0)'s."
          phoneValid = false;
        }
      }else{
         phoneErrorContainer.innerHTML = "Please format your number: 999-999-9999."
         phoneValid = false;
      }
    }else{
        phoneErrorContainer.innerHTML = "The length of phone number is not appropriate."
        phoneValid = false;
    }

}

function validName(elem,id){
    if(id == "first-error"){
        var nameErrorContainer = document.querySelector("#first-error");
    }else{
        var nameErrorContainer = document.querySelector("#last-error");
    }

    var name = elem.value;
    var allowLetters = /^[a-zA-Z'-]+$/;
    var characters = /[a-zA-Z]+/
    nameErrorContainer.innerHTML="";
    if(name.trim().length>0){
        if(name.match(allowLetters) ){
          if(name.search(characters) != -1){
              nameErrorContainer.innerHTML="";
              nameValid = true;
          }else{
            nameErrorContainer.innerHTML="At least one alphabetic characters included.";
            nameValid = false;
          }

        }else{
          nameErrorContainer.innerHTML="Name can only include alphabetic characters, apostrophe ('), or hyphen (-).";
          nameValid = false;
        }
    }else{
        nameErrorContainer.innerHTML="Must be present.";
        nameValid = false;
    }
}

function validPassword(elem){
    var passErrorContainer =  document.querySelector("#pass-error");
    var password = elem.value;
    var rtpassword = document.getElementById("rtpassword").value;
    var lowercase = /[a-z]+/;
    var uppercase = /[A-Z]+/;
    var number = /[0-9]+/;
    passErrorContainer.innerHTML="";
    if(password.length >= 8){
        if(password.search(lowercase) != -1 && password.search(uppercase) != -1){
            if(password.search(number) != -1){
                  if(password == rtpassword || rtpassword.length == 0){
                    passErrorContainer.innerHTML="";
                    passwordValid = true;
                  }else{
                    passErrorContainer.innerHTML="Two passwords have to be same.";
                    passwordValid = false;
                  }

            }else{
                passErrorContainer.innerHTML="At least 1 number.";
                passwordValid = false;
            }
        }else{
          passErrorContainer.innerHTML="Password must contain both upper and lower case characters.";
          passwordValid = false;
        }
    }else{
        if(password.length == 0 ){
          passErrorContainer.innerHTML="";
          passwordValid = false;
        }else{
          passErrorContainer.innerHTML="At least 8 characters long.";
          passwordValid = false;
        }

    }

}

function validRTPassword(elem){
    var rtpassErrorContainer =  document.querySelector("#rtpass-error");
    var password = document.getElementById("password").value;
    var rtpassword = elem.value;
    var lowercase = /[a-z]+/;
    var uppercase = /[A-Z]+/;
    var number = /[0-9]+/;
    rtpassErrorContainer.innerHTML="";
    if(rtpassword.length >= 8){
        if(rtpassword.search(lowercase) != -1 && rtpassword.search(uppercase) != -1){
            if(rtpassword.search(number) != -1){
                  if(password == rtpassword || password.length == 0){
                    rtpassErrorContainer.innerHTML="";
                    rtpasswordValid = true;
                  }else{
                    rtpassErrorContainer.innerHTML="Two passwords have to be same.";
                    rtpasswordValid = false;
                  }

            }else{
                rtpassErrorContainer.innerHTML="At least 1 number.";
                rtpasswordValid = false;
            }
        }else{
          rtpassErrorContainer.innerHTML="Password must contain both upper and lower case characters.";
          rtpasswordValid = false;
        }
    }else{
        if(rtpassword.length == 0 ){
          rtpassErrorContainer.innerHTML="";
          rtpasswordValid = false;
        }else{
          rtpassErrorContainer.innerHTML="At least 8 characters long.";
          rtpasswordValid = false;
        }

    }

}

function validEduStatus(elem){
    var status = elem.value;
    var eduStatusErrorContainer =  document.querySelector("#eduStatus-error");
    eduStatusErrorContainer.innerHTML="";
    if(status == "graduated" || status == "current" || status == "notgrad"){
      eduStatusErrorContainer.innerHTML="";
      eduValid = true;
    }else{
      eduStatusErrorContainer.innerHTML="Must select one of these menu options";
      eduValid = false;
    }
}
