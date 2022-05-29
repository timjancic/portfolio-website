const moreProjectsContainer = document.getElementById("more-projects-container");
const moreLessProjectsButton = document.getElementById("more-less-projects-b");


moreLessProjectsButton.addEventListener('click', () => {
  if (moreLessProjectsButton.classList[1] == "btn-primary") {
    moreProjectsContainer.classList.add("extra-show");

    let finishAnimate = setTimeout(function() {
      moreLessProjectsButton.textContent = "Show Less Projects";
      moreLessProjectsButton.classList.add("btn-secondary");
      moreLessProjectsButton.classList.remove("btn-primary");
    },(800));
  } else {
    moreProjectsContainer.classList.remove("extra-show");

    //for mobile devices, change the scroll position so user does not lose place.
    if (window.innerWidth < 768) {
      document.getElementById('afterLessProjects').scrollIntoView();
    }


    let finishAnimate = setTimeout(function() {
      moreLessProjectsButton.textContent = "Show More Projects";
      moreLessProjectsButton.classList.add("btn-primary");
      moreLessProjectsButton.classList.remove("btn-secondary");
    },(800));
  }
});
