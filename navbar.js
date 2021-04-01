let nav = document.querySelector(".nav");
const bar = document.querySelector(".nav-bar");

const click = () => {
  nav.classList.toggle("navShow");
};

bar.addEventListener("click", click);
