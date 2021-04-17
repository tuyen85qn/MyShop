const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const GoBack = () => {
  let auth_form = document.getElementById("modal__auth");
  auth_form.style.display = "none";
};
const Register = () => {
  let auth_form = document.getElementById("modal__auth");
  let register = document.getElementById("form__register");
  let login = document.getElementById("form__login");
  auth_form.style.display = "flex";
  register.style.display = "block";
  login.style.display = "none";
  console.log(`document`, document);
};
const Login = () => {
  let auth_form = document.getElementById("modal__auth");
  let register = document.getElementById("form__register");
  let login = document.getElementById("form__login");
  auth_form.style.display = "flex";
  register.style.display = "none";
  login.style.display = "block";
};

const ulHistory = $("#ul__history");
console.log(`ulHistory`, ulHistory);
