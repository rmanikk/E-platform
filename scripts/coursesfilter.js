const categoryButtons = document.querySelectorAll(".category");
const courseCards = document.querySelectorAll(".course-card");

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    categoryButtons.forEach((btn) => btn.classList.remove("active"));
    // Add active class to the clicked button
    button.classList.add("active");

    const category = button.dataset.category;

    // Show/hide course cards
    courseCards.forEach((card) => {
      if (category === "all" || card.dataset.category === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
