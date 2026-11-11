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
    title:
      "Her Third Brain | Dark Fantasy x Seductive Audio Stories | Terms of Use",
    subheading: "A direct path to what you crave",
    cta1: "Enter site 18+",
    privacyPolicy: "Privacy Policy",
    teaser: "Teaser",
    contact: "Contact",
    cta2: "Sub now",
    termsParagraph1: "Her Third Brain.",
    termsParagraph2: "Last updated: November 10, 2026.",
    termsParagraph3:
      "Welcome to Her Third Brain. By accessing or using www.herthirdbrain.com, you acknowledge these Terms of Use. Please read them carefully before continuing. If you do not agree with these terms, please discontinue using the Website.",
    termsParagraph4:
      "Her Third Brain is intended exclusively for adults aged 18 years or older. By entering or using this Website, you confirm that: 1. You are at least 18 years old and meet the legal age requirements applicable in your jurisdiction. 2. You are legally permitted to access adult-oriented material. 3. You understand that the Website may contain mature, suggestive, or psychologically intense themes. 4. Visitors who do not meet these requirements must leave the Website immediately. 5. Age confirmation on this Website is based on visitor declaration and does not constitute independent identity verification.",
    termsParagraph5:
      "Her Third Brain provides creative entertainment primarily through audio storytelling, poetic seduction, dark fantasy, and psychological exploration. Content may include themes of dominance, submission, power dynamics, intimacy, vulnerability, and desire. All fictional scenarios are presented as creative expression and are not instructions, encouragement, or consent to engage in real-world activities. Fictional representations of power dynamics do not replace the importance of mutual consent, personal boundaries, and safety in real-life relationships.",
    termsParagraph6:
      "Unless otherwise stated, all original content featured on Her Third Brain, including audio recordings, scripts, stories, written materials, branding, graphics, and original creative concepts expressed in those materials, belongs to Her Third Brain or its respective rights holders.Visitors are granted limited permission to access the content for private, personal, and non-commercial enjoyment.Without prior written permission, you may not:Copy, reproduce, record, or redistribute protected content.Upload or share recordings on other websites or platforms. Sell, license, or commercially exploit the content. Use protected content to train artificial intelligence systems. Present any content as your own original work. Circumvent technical restrictions protecting the content. Purchasing or subscribing to content does not transfer intellectual property ownership.",
    developer: "Developed by",
    oldenough: "Old enough?",
    confirm: "Confirm that you are above the age of 18 before you continue.",
    stay: "STAY HERE",
    leave: "ABOVE 18",
  },

  no: {
    title: "Her Third Brain | Mørk Fantasi x Forførende Lyd Fortellinger",
    subheading: "En direkte veg til det du lengter etter",
    cta1: "Besøk siden 18+",
    privacyPolicy: "Personvernerklæring",
    contact: "Kontakt",
    cta2: "Abonnér nå",
    developer: "Utviklet av",
    oldenough: "Gammel nok?",
    confirm: "Bekreft at du er over 18 år før du fortsetter.",
    stay: "BLI HER",
    leave: "OVER 18",
  },
};

function changeLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    if (translations[lang][key] !== undefined) {
      element.textContent = translations[lang][key];
    }
  });

  document.documentElement.lang = lang;

  document.querySelectorAll("[data-lang]").forEach((button) => {
    const active = button.dataset.lang === lang;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  localStorage.setItem("language", lang);
}

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => {
    changeLanguage(button.dataset.lang);
  });
});

const savedLanguage = localStorage.getItem("language");
changeLanguage(savedLanguage === "no" ? "no" : "en");
