const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  console.log(button);

  button.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.target);
    // if (e.target.id === "grey") {
    //   body.style.background = e.target.id;
    // }
    switch (e.target.id) {
      case "grey":
        body.style.background = e.target.id;
        break;
      case "white":
        body.style.background = e.target.id;
        break;
      case "blue":
        body.style.background = e.target.id;
        break;
      case "yellow":
        body.style.background = e.target.id;
        break;

      default:
        body.style.background = "red";
        alert("Wrong selection");
        break;
    }
  });
});
