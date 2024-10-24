const forms = document.querySelector(".forms");
const pwShowHide = document.querySelectorAll(".eye-icon");
const links = document.querySelectorAll(".link");
const forgotpassword = document.querySelector(".forgotpassword")
const forgotpasswordbox = document.querySelector(".forgotpasswordform")
const loginbox = document.querySelector(".login")
const resiterbox = document.querySelector(".signup")
const backbtn = document.querySelector(".backbtn")

pwShowHide.forEach(eyeIcon => {
eyeIcon.addEventListener("click", () => {
  let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
  
  pwFields.forEach(password => {
      if(password.type === "password"){
          password.type = "text";
          eyeIcon.classList.replace("bx-hide", "bx-show");
          return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
  })
  
})
})      

links.forEach(link => {
link.addEventListener("click", e => {
 e.preventDefault(); //preventing form submit
 forms.classList.toggle("show-signup");
})
})


forgotpassword.addEventListener("click",()=>{
    forgotpasswordbox.style.display = "block"
    resiterbox.style.display = "none"
    loginbox.style.display = "none"
})

backbtn.addEventListener("click",()=>{
    resiterbox.style.display = "block"
    loginbox.style.display = "block" 
    forgotpasswordbox.style.display = "none"

})