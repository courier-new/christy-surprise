function appendNavLinks(pageName) {
  const nav = document.querySelector("nav");
  if (nav) {
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

function createNav(pageName) {
  onReady(function () {
    appendNavLinks(pageName);
  });
}
