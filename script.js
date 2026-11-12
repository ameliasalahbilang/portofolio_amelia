// Header
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 120);
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector("#navnav");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("active");
};

// type
var typed = new Typed(".skills", {
  strings: ["FullStack Developer",
  "Frontend Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 100,
  looped: true,
});

// theme
var icon = document.getElementById("icon");

icon.onclick = function () {
  document.body.classList.toggle("light-theme");
  if (document.body.classList.contains("light-theme")) {
    icon.classList.replace("bx-moon", "bx-sun");
    icon.setAttribute("aria-label", "Aktifkan mode gelap");
  } else {
    icon.classList.replace("bx-sun", "bx-moon");
    icon.setAttribute("aria-label", "Aktifkan mode terang");
  }
};

// karya category tabs
document.querySelectorAll(".category-tabs").forEach((tabGroup) => {
  const section = tabGroup.closest("section");
  const tabs = tabGroup.querySelectorAll(".category-tab");
  const items = section.querySelectorAll(".portfolio-content .row[data-category]");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const category = tab.dataset.category;

      tabs.forEach((categoryTab) => {
        const isActive = categoryTab === tab;
        categoryTab.classList.toggle("active", isActive);
        categoryTab.setAttribute("aria-pressed", String(isActive));
      });

      items.forEach((item) => {
        item.hidden = item.dataset.category !== category;
      });

      if (window.AOS) {
        window.AOS.refresh();
      }
    });
  });
});

// contact form
const scriptURL = "https://script.google.com/macros/s/AKfycbwNPL92LMzF5odIb_TXi78spnyQqljtpeQAIyfwhvst0JAil7UbbjFTeDv4WrmF1ToX/exec";
const form = document.forms["portfolio-contact"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      form.reset();
      alert("Terima Kasih. Pesan anda telah terkirim!", response)})
    .catch((error) => console.error("Mohon Maaf. Website Error!", error.message));
});