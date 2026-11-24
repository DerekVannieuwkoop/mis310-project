const button = document.querySelector("#process-button");
const process = document.querySelector("#design-process");
button.addEventListener("click", function() {
  process.classList.toggle("hidden");
    console.log("Design process button clicked");
});