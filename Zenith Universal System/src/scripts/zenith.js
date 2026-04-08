(function () {
  var navToggle = document.querySelector("[data-nav-toggle]");
  var nav = document.querySelector("[data-nav]");

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      var expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("open");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealItems.length > 0) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    revealItems.forEach(function (item) {
      observer.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add("visible");
    });
  }

  var allThemeClasses = [
    "theme-ai",
    "theme-finance",
    "theme-studio",
    "theme-devtools",
  ];

  var themeButtons = document.querySelectorAll("[data-theme]");
  var body = document.body;

  function setActiveButton(activeTheme) {
    themeButtons.forEach(function (button) {
      if (button.getAttribute("data-theme") === activeTheme) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  }

  function applyTheme(themeName) {
    body.classList.remove.apply(body.classList, allThemeClasses);
    if (themeName && themeName !== "default") {
      body.classList.add("theme-" + themeName);
      localStorage.setItem("zenith-theme", themeName);
    } else {
      localStorage.removeItem("zenith-theme");
    }
    setActiveButton(themeName || "default");
  }

  var storedTheme = localStorage.getItem("zenith-theme");
  if (storedTheme) {
    applyTheme(storedTheme);
  } else {
    setActiveButton("default");
  }

  themeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      applyTheme(button.getAttribute("data-theme"));
    });
  });

  var yearEl = document.querySelector("[data-year]");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
