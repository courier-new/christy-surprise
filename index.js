function navigateTo(sectionName) {
  document.querySelectorAll("section").forEach(function (section) {
    if (section.id !== sectionName) {
      section.className = section.className.replace("visible", "");
    } else {
      section.className += " visible";
    }
  });
  document.querySelectorAll("nav a").forEach(function (anchor) {
    if (anchor.href) {
      const hashMatch = anchor.href.match(/#.*$/);
      if (hashMatch && hashMatch[0] && hashMatch[0] === "#" + sectionName) {
        anchor.className += " active";
      } else {
        anchor.className = anchor.className.replace("active", "");
      }
    }
  });
  setTimeout(() => window.scrollTo(0, 0), 2)
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

onReady(function () {
  if (window.location.hash && document.querySelector(window.location.hash)) {
    navigateTo(window.location.hash.replace('#', ''))
  } else {
  navigateTo("home");
  }
});
