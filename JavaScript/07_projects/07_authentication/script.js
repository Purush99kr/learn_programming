const form = document.querySelector("form");
const resetBtn = document.querySelector("#reset");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.querySelector("#username").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const confirmPassword = document.querySelector("#confirmPassword").value;
  const error = document.querySelector(".error");
  const name = document.querySelector("#name");
  const mail = document.querySelector("#mail");
  const key = document.querySelector("#key");
  const ckey = document.querySelector("#ckey");

  //clear error tag
  error.innerHTML = "";
  //form validation
  if (username === "") {
    error.innerHTML = "Enter UserName";
  } else if (email === "") {
    error.innerHTML = "Enter Email";
  } else if (password === "") {
    error.innerHTML = "Enter Password";
  } else if (confirmPassword === "") {
    error.innerHTML = "Enter Confirm Password";
  } else if (confirmPassword !== password) {
    error.innerHTML = "Password mismatched";
  } else {
    name.innerHTML = username;
    mail.innerHTML = email;
    key.innerHTML = password;
    ckey.innerHTML = confirmPassword;
  }
});

function resetForm() {
  // Clear inputs
  document.querySelector("#username").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#password").value = "";
  document.querySelector("#confirmPassword").value = "";

  // Clear outputs
  document.querySelector("#name").innerHTML = "";
  document.querySelector("#mail").innerHTML = "";
  document.querySelector("#key").innerHTML = "";
  document.querySelector("#ckey").innerHTML = "";

  // Clear error message
  document.querySelector(".error").innerHTML = "";
}

resetBtn.addEventListener("click", resetForm);
