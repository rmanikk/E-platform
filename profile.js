
  const profileContainer = document.querySelector(".profile-container");
  const profileIcon = document.getElementById("profileToggle");

  profileIcon.addEventListener("click", (e) => {
    e.stopPropagation(); // prevents instant closing
    profileContainer.classList.toggle("active");
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (!profileContainer.contains(e.target)) {
      profileContainer.classList.remove("active");
    }
  });

