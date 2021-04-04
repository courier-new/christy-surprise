/**
 * Creates and appends the "christiane" logo to the header
 */
function appendHeader() {
  const header = document.querySelector("header");
  if (header) {
    const h3 = document.createElement("h3");
    h3.innerText = "christiane";

    const wavyLine = document.createElement("img");
    wavyLine.src = "/images/line.svg";
    wavyLine.alt = "wavy light purple line";
    wavyLine.width = 147;

    h3.appendChild(wavyLine);

    header.appendChild(h3);
  }
}

/**
 * Creates and appends the main page navigation to the header
 *
 * @param {string} pageName the lowercase name of the page, which will be used
 * to mark the active navigation link
 */
function appendNavLinks(pageName) {
  const header = document.querySelector("header");
  if (header) {
    const nav = document.createElement("nav");

    const home = document.createElement("a");
    home.className = pageName === "home" ? "active" : "";
    home.href = "/index.html";
    home.innerText = "Home";
    nav.appendChild(home);

    const contact = document.createElement("a");
    contact.className = pageName === "contact" ? "active" : "";
    contact.href = "/contact.html";
    contact.innerText = "Contact";
    nav.appendChild(contact);

    const resume = document.createElement("a");
    resume.className = pageName === "resume" ? "active" : "";
    resume.href = "/resume.html";
    resume.innerText = "Resume";
    nav.appendChild(resume);

    const linkedin = document.createElement("a");
    linkedin.href = "https://www.linkedin.com/in/christianegrace/";
    linkedin.innerText = "In";
    nav.appendChild(linkedin);

    header.appendChild(nav);
  }
}

function onReady(callbackFn) {
  // See if DOM is already available
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    // Call on next available tick
    setTimeout(callbackFn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", callbackFn);
  }
}

/**
 * Creates the content of the main page header, when a `<header>` element is
 * present on the page
 *
 * @param {string} pageName the lowercase name of the page, which will be used
 * to mark the active navigation link
 */
function createHeader(pageName) {
  onReady(function () {
    appendHeader();
    appendNavLinks(pageName);
  });
}
