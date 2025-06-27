// Form submission logic
const vibeForm = document.getElementById("vibeForm");

vibeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thanks for joining the English Vibe! ✅");
  vibeForm.reset();
});
