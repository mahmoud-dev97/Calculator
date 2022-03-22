let btn = Array.from(document.querySelectorAll(".btn"));
let result = document.querySelector(".results");
btn.forEach((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        result.innerText = "";
        break;
      case "=":
        try {
          result.innerText = eval(result.innerText);
        } catch {
          result.innerText = "Error";
        }
        break;
      case "Back":
        result.innerText = result.innerText.slice(0, -1);
        break;
      case "OFF":
        result.innerHTML = "0";
        power.innerText = "ON";
        power.style.color = "#ffcc1d";
        break;
      default:
        result.innerText += e.target.innerText;
    }
  });
});
