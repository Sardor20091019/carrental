function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

const themeToggle = document.getElementById("themeToggle");
themeToggle.onclick = () => document.body.classList.toggle("light");


document.querySelectorAll(".cate").forEach((cat) => {
  cat.onclick = () => {
    document
      .querySelectorAll(".cate")
      .forEach((c) => c.classList.remove("active"));
    cat.classList.add("active");
    filterCars();
  };
});

function filterCars() {
  const q = document.getElementById("searchInput").value.toLowerCase();
  const cat = document.querySelector(".cate.active").dataset.cat;
  document.querySelectorAll(".car-card").forEach((car) => {
    const title = car.querySelector("h3").textContent.toLowerCase();
    const type = car.querySelector(".type").textContent.toLowerCase();
    car.classList.toggle(
      "hidden",
      !(
        (title.includes(q) || type.includes(q)) &&
        (cat === "all" || car.dataset.cat === cat)
      )
    );
  });
}

document.getElementById("searchInput").oninput = filterCars;

function showAllCars() {
  document
    .querySelectorAll(".cate")
    .forEach((c) => c.classList.remove("active"));
  document.querySelector('.cate[data-cat="all"]').classList.add("active");
  document.getElementById("searchInput").value = "";
  document
    .querySelectorAll(".car-card")
    .forEach((c) => c.classList.remove("hidden"));
}
