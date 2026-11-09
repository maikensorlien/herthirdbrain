const menuToggle = document.querySelector("#hamburgerMenu");
      const navLinks = document.querySelectorAll(".nav a");

      navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          menuToggle.checked = false;
        });

        const exitPopup = document.querySelector("#exitPopup");
        const stayButton = document.querySelector("#stayButton");
        const leaveButton = document.querySelector("#leaveButton");

        let destinationURL = null;
        let destinationTarget = "_self";

        // Only detect links with class="ofLink"
        document.querySelectorAll("a.ofLink").forEach((link) => {
          link.addEventListener("click", (event) => {
            event.preventDefault();

            destinationURL = link.href;
            destinationTarget = link.target === "_blank" ? "_blank" : "_self";

            exitPopup.classList.add("active");
          });
        });

        // Stay on website
        stayButton.addEventListener("click", () => {
          exitPopup.classList.remove("active");
          destinationURL = null;
        });

        // Continue to external website
        leaveButton.addEventListener("click", () => {
          if (!destinationURL) return;

          const url = destinationURL;
          const target = destinationTarget;

          exitPopup.classList.remove("active");
          destinationURL = null;

          if (target === "_blank") {
            window.open(url, "_blank", "noopener,noreferrer");
          } else {
            window.location.href = url;
          }
        });
      });

const translations = {
  en: {
    cta1: "Enter site 18+"
  },

  no: {
    cta1: "Besøk siden 18+"
  }
};

function changeLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;

    if (translations[lang][key] !== undefined) {
      element.textContent = translations[lang][key];
    }
  });

  document.documentElement.lang = lang;

  document.querySelectorAll("[data-lang]").forEach(button => {
    const active = button.dataset.lang === lang;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  localStorage.setItem("language", lang);
}

document.querySelectorAll("[data-lang]").forEach(button => {
  button.addEventListener("click", () => {
    changeLanguage(button.dataset.lang);
  });
});

const savedLanguage = localStorage.getItem("language");
changeLanguage(savedLanguage === "no" ? "no" : "en");
