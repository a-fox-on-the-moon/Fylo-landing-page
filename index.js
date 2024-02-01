// const emailInput = document.getElementById("email");

// const errorDisplay = (tag, message, isError) => {
//   const container = document.querySelector("." + tag);
//   const span = container.querySelector("span");

//   if (isError) {
//     container.classList.add("error");
//     span.textContent = message;
//   } else {
//     container.classList.remove("error");
//     span.textContent = "";
//   }
// };

// const emailChecker = (value) => {
//   const isValid = value.match(/[\w_-]+@[\w-]+\.[a-z]{2,4}$/i);
//   errorDisplay("email-container", "Please check your email", !isValid);
//   return isValid;
// };

// emailInput.addEventListener("input", (e) => {
//   emailChecker(e.target.value);
// });

// document.querySelector("form").addEventListener("submit", (e) => {
//   e.preventDefault();
//   if (emailChecker(emailInput.value)) {
//     // Envoyer le formulaire
//     console.log("Adresse e-mail valide :", emailInput.value);
//   } else {
//     console.log("Veuillez corriger l'adresse e-mail.");
//   }
// });
