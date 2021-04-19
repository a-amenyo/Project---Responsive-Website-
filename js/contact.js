let form = document.querySelector("form[name='contact-form']");
let nameInput = document.querySelector("input[name='name']");
let emailInput = document.querySelector("input[name='email']");
let phoneInput = document.querySelector("input[name='phone']");
let messageInput = document.querySelector("textarea[name='message']");

nameInput.isValid = () => !!nameInput.value;
emailInput.isValid = () => isValidEmail(emailInput.value);
phoneInput.isValid = () => isValidPhone(phoneInput.value);
messageInput.isValid = () => !!messageInput.value;

let inputFields = [nameInput, emailInput, phoneInput, messageInput];

let isValidEmail = (email) => {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

let isValidPhone = (phone) => {
  let re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(String(phone).toLowerCase());
};

let shouldValidate = false;
let isFormValid = false;

let validateInputs = () => {
  console.log("we are here");
  if (!shouldValidate) return;

  isFormValid = true;
  inputFields.forEach((input) => {
    input.classList.remove("invalid");
    input.nextElementSibling.classList.add("hide");

    if (!input.isValid()) {
      input.classList.add("invalid");
      isFormValid = false;
      input.nextElementSibling.classList.remove("hide");
    }
  });
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  shouldValidate = true;
  validateInputs();
  if (isFormValid) {
    
  }
});

inputFields.forEach((input) => input.addEventListener("input", validateInputs));

// Dsiplaying inputted name,email,  number and message 
function display (){
  // get name 
  let textInName = document.querySelector("input[name='name']").value;
  // get email
  let textInEmail = document.querySelector("input[name='email']").value;
  // get number
  let textInNumber = document.querySelector("input[name='phone']").value;
  // get message
  let textInMessage = document.querySelector("textarea[name='message']").value;

  alert("Thanks for your Message.If we got that right, we have your " +"\n Name : " +textInName + "  " + 
  "Email : " + textInEmail + " " + "Phone : " + textInNumber + "    " + "Message : " + textInMessage   ); 
}

let submitBtn = document.getElementById('submit'); 
submitBtn.addEventListener("click", display ); 