   const slider = document.getElementById("question-count");
   const display = document.getElementById("question-count-value");

   slider.addEventListener("input", () => {
       display.textContent = slider.value;
   });