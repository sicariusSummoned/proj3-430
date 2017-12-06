const handleLogin = (e) => {
  e.preventDefault();

  $("#domoMessage").animate({
    width: 'hide'
  }, 350);

  if ($("#user").val() == '' || $("#pass").val() == '') {
    handleError("ERROR! Missing data detected!");
    return false;
  }

  console.log($("input[name=_csrf]").val());

  sendAjax('POST', $("#loginForm").attr("action"), $("#loginForm").serialize(), redirect);
  return false;
};

const handleSignup = (e) => {
  e.preventDefault();

  $("#domoMessage").animate({
    width: 'hide'
  }, 350);

  if ($("#user").val() == '' || $("#pass").val() == '' || $("#pass2").val() == '') {
    handleError("ERROR! Missing data detected!");
    return false;
  }

  if ($("#pass").val() !== $("#pass2").val()) {
    handleError("ERROR! Passwords must match!");
    return false;
  }

  sendAjax('POST', $("#signupForm").attr("action"), $("#signupForm").serialize(), redirect);

  return false;
};

const handlePassChange = (e) => {
  e.preventDefault();
  
  $("#domoMessage").animate({width: 'hide'}, 350);
  
  if ($("#oldpass").val() == '' || $("#pass").val() == '' || $("#pass2").val() == '') {
    handleError("ERROR! Missing data detected!");
    return false;
  }
  
  if ($("#pass").val() !== $("#pass2").val()) {
    handleError("ERROR! Passwords must match!");
    return false;
  }
  
  sendAjax('POST', $("#passchangeForm").attr("action"), $("#passchangeForm").serialize(), redirect);
  
  return false
}

const LoginWindow = (props) => {
  return ( 
    <form 
    id = "loginForm"
    name = "loginForm"
    onSubmit = {
      handleLogin
    }
    action = "/login"
    method = "POST"
    className = "mainForm" 
    >
    <label htmlFor="username">Username: </label>
    <input id="user" type="text" name="username" placeholder="username"/>
    <label htmlFor="pass">Password: </label>
    <input id="pass" type="password" name="pass" placeholder="password"/>
    <input type="hidden" name ="_csrf" value={props.csrf}/>
    <input className="formSubmit" type="submit" value="Sign in" />
    
    </form>
  );
};


const SignupWindow = (props) => {
  return (
    <form 
    id = "signupForm"
    name = "signupForm"
    onSubmit = {
      handleSignup
    }
    action = "/signup"
    method = "POST"
    className = "mainForm" 
    >
    <label htmlFor="username">Username: </label>
    <input id="user" type="text" name="username" placeholder="username"/>
    <label htmlFor="pass">Password: </label>
    <input id="pass" type="password" name="pass" placeholder="password"/>
    <label htmlFor="pass2">Password: </label>
    <input id="pass2" type="password" name="pass2" placeholder="retype password"/>
    <input type="hidden" name ="_csrf" value={props.csrf}/>
    <input className="formSubmit" type="submit" value="Sign in" />
    
    </form>
    
  );
};

const PasschangeWindow = (props) => {
  return (
    <form 
    id = "passchangeForm"
    name = "passchangeForm"
    onSubmit = {
      handlePassChange
    }
    action = "/passchange"
    method = "POST"
    className = "mainForm" 
    >
    <label htmlFor="oldpass">Old Password: </label>
    <input id="oldpass" type="text" name="oldpass" placeholder="old password"/>
    <label htmlFor="pass">Password: </label>
    <input id="pass" type="password" name="pass" placeholder="password"/>
    <label htmlFor="pass2">Password: </label>
    <input id="pass2" type="password" name="pass2" placeholder="retype password"/>
    <input type="hidden" name ="_csrf" value={props.csrf}/>
    <input className="formSubmit" type="submit" value="Change" />
    
    </form>
    
  );
};

const createLoginWindow = (csrf) => {
  ReactDOM.render(
  <LoginWindow csrf={csrf} />,
    document.querySelector("#content")
  );
};

const createSignupWindow = (csrf) => {
  ReactDOM.render(
  <SignupWindow csrf={csrf} />,
    document.querySelector("#content")
  );
};

const createPasschangeWindow = (csrf) => {
  ReactDOM.render(
  <PasschangeWindow csrf={csrf} />,
    document.querySelector("#content")
  );
};

const setup = (csrf) => {
  const loginButton = document.querySelector("#loginButton");
  const signupButton = document.querySelector("#signupButton");
  
  
  signupButton.addEventListener("click", (e) =>{
    e.preventDefault();
    createSignupWindow(csrf);
    return false;
  });
  
  loginButton.addEventListener("click", (e) =>{
    e.preventDefault();
    createLoginWindow(csrf);
    return false;
  });
  
  createLoginWindow(csrf);
};

const getToken = () => {
  sendAjax('GET', '/getToken', null, (result) =>{
    setup(result.csrfToken);
  });
};

$(document).ready(function() {
  getToken();
});