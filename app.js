(() => {
  const VERSION = "0.1.0";
  window.__DEBUGZY__ = VERSION;
  const helpBtn = document.getElementById("help-btn");
  const help = document.getElementById("help");
  const chip = document.getElementById("ver-chip");
  if (chip) chip.textContent = "v" + VERSION;
  if (helpBtn && help) {
    helpBtn.addEventListener("click", () => {
      const open = help.hidden;
      help.hidden = !open;
      helpBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !help.hidden) {
        help.hidden = true;
        helpBtn.setAttribute("aria-expanded", "false");
        helpBtn.focus();
      }
    });
  }
})();
