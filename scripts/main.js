const moreProjectsContainer = document.getElementById("more-projects-container");
const moreProjectsButton = document.getElementById("more-projects-b");
const lessProjectsButton = document.getElementById("less-projects-b");

moreProjectsButton.addEventListener('click', () => {
  moreProjectsContainer.classList.remove("visually-hidden");
  moreProjectsButton.classList.add("visually-hidden");
});

lessProjectsButton.addEventListener('click', () => {
  moreProjectsContainer.classList.add("visually-hidden");
  moreProjectsButton.classList.remove("visually-hidden");
});
