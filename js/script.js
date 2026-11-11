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
    title: "Her Third Brain | Dark Fantasy x Seductive Audio Stories",
    subheading: "A direct path to what you crave",
    cta1: "Enter site 18+",
    about: "About",
    teaser: "Teaser",
    contact: "Contact",
    cta2: "Sub now",
    paragraph1: "Welcome to Her Third Brain - a place where dark fantasy, poetic seduction, and the psychology of desire come together.",
    paragraph2: "I'm a woman who finds fascination in the unspoken. The tension between dominance and submission. The beauty of vulnerability. The power of a whispered word and the thoughts we rarely dare to say aloud.",
    paragraph3: "Through my voice, I invite you into a world of intimate storytelling, psychological intrigue, and fantasies that wander a little further than expected.",
    paragraph4: "No visuals. Just my voice, your imagination, and everything in between.",
    seductive: "Seductive",
    immersive: "Immersive",
    premium: "Premium",
    discreet: "Discreet",
    direct: "Direct",
    fantasy: "Fantasy",
    easyaccess: "Easy Access",
    developer: "Developed by",
    oldenough: "Old enough?",
    confirm: "Confirm that you are above the age of 18 before you continue.",
    stay: "STAY HERE",
    leave: "ABOVE 18"
  },

  no: {
    title: "Her Third Brain | Mørk Fantasi x Forførende Lyd Fortellinger",
    subheading: "En direkte veg til det du lengter etter",
    cta1: "Besøk siden 18+",
    about: "Om meg",
    teaser: "Teaser",
    contact: "Kontakt",
    cta2: "Abonnér nå",
    paragraph1: "Velkommen til Her Third Brain – et sted hvor mørke fantasier, poetisk forførelse og begjærets psykologi møtes.",
    paragraph2: "Jeg er en kvinne som fasineres av det som sjeldent sies. Spenningen mellom dominans og underkastelse. Skjønnheten i sårbarhet. Kraften i et hvisket ord og tankene vi sjelden våger å si høyt.",
    paragraph3: "Gjennom stemmen min inviterer jeg deg inn i min verden av intime fortellinger, psykologisk spenning og fantasier som strekker seg litt lenger enn forventet.",
    paragraph4: "Ingen bilder. Bare stemmen min, fantasien din og alt som finnes imellom.",
    seductive: "Forførende",
    immersive: "Oppslukende",
    premium: "Eksklusivt",
    discreet: "Diskré",
    direct: "Direkte",
    fantasy: "Fantasi",
    easyaccess: "Enkel tilgang",
    developer: "Utviklet av",
    oldenough: "Gammel nok?",
    confirm: "Bekreft at du er over 18 år før du fortsetter.",
    stay: "BLI HER",
    leave: "OVER 18"
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
