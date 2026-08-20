// Language toggle for the English / German versions of the site.
// The early inline script in the <head> already sets the initial language
// (from localStorage or the browser preference) to avoid a flash of the
// wrong language. This file only wires up the interactive toggle button.
(function () {
  "use strict";

  function currentLang() {
    return document.documentElement.getAttribute("data-lang") === "de" ? "de" : "en";
  }

  function updateToggle() {
    var lang = currentLang();
    // The button offers to switch to the *other* language.
    var label = document.getElementById("lang-toggle-text");
    if (label) {
      label.textContent = lang === "de" ? "English" : "Deutsch";
    }
    document.documentElement.setAttribute("lang", lang);
  }

  function setLang(lang) {
    document.documentElement.setAttribute("data-lang", lang);
    try {
      localStorage.setItem("site-lang", lang);
    } catch (e) {
      /* localStorage may be unavailable (e.g. private mode) */
    }
    updateToggle();
  }

  document.addEventListener("DOMContentLoaded", function () {
    updateToggle();
    var toggle = document.getElementById("lang-toggle");
    if (toggle) {
      toggle.addEventListener("click", function (e) {
        e.preventDefault();
        setLang(currentLang() === "de" ? "en" : "de");
      });
    }
  });
})();
