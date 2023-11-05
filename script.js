const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const dim = document.querySelector(".dim");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("change");
  if (sidebar.classList.contains("show")) {
    sidebar.classList.remove("show");
    sidebar.classList.add("hide");
    dim.style.display = "none";
  } else if (sidebar.classList.contains("hide")) {
    sidebar.classList.remove("hide");
    sidebar.classList.add("show");
    dim.style.display = "block";
  } else {
    sidebar.classList.add("show");
    dim.style.display = "block";
  }
});

document.addEventListener("click", (ev) => {
  if (sidebar.classList.contains("show")) {
    if (!hamburger.contains(ev.target) && !sidebar.contains(ev.target)) {
      sidebar.classList.remove("show");
      sidebar.classList.add("hide");
      dim.style.display = "none";
      hamburger.classList.toggle("change");
    }
  }
});
