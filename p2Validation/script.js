const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');

// showError
function showError(input,message){
    const formControl=input.parentElement;
    formControl.className='form-control error';
    const small=formControl.querySelector('small');
    small.innerText=message;
}

// showSuccess
function showSuccess(input){
    formControl=input.parentElement;
    formControl.className='form-control success';
}
function checkEmail(input){
    const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(re.test(input.value.trim())){
        showSuccess(input);
    }
    else{
        showError(input,'e=Email is not valid')
    }
}

//check length
function checkLength(input,min,max){
    if(input.value.length < min){
        showError(input,`${getFielName(input)} must be must be atleast ${min} characters`);
    }
    else if(input.value.length>max){
        showError(input,`${getFielName(input)} must be less than ${max} characters`);
    }
    else{
        showSuccess(input);
    }
}
//password Match
function checkPasswordMatch(input1,input2){
    if(input1.value!=input2.value){
        showError(input2,'passwords do not match');
    }
}

// get Field name
function getFielName(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}

// required field
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim()===''){
            showError(input,`${getFielName(input)} is required`);
        }
    });
}

// Event Listener
form.addEventListener('submit',function(e){
    e.preventDefault();

    checkRequired([username,email,password,password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordMatch(password,password2);
    // if(username.value===''){
    //     showError(username,'Username is required')
    // }
    // else{
    //     showSuccess(username)
    // }

    // if(email.value===''){
    //     showError(email,'Email is required')
    // }
    // else if(!isValidEmail(email.value)){
    //     showError(email,'email not valid')
    // }
    // else{
    //     showSuccess(email)
    // }

    // if(password.value===''){
    //     showError(password,'Password is required')
    // }
    // else{
    //     showSuccess(password)
    // }

    // if(password2.value===''){
    //     showError(password2,'Password is required')
    // }
    // else{
    //     showSuccess(password2)
    // }

    
})