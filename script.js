const toggle = document.getElementById("theme-toggle");
const root = document.documentElement;

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    root.style.setProperty("--bg", "#0f172a");
    root.style.setProperty("--bg-alt", "#1e293b");
    root.style.setProperty("--text", "#f1f5f9");
    root.style.setProperty("--muted", "#94a3b8");
    toggle.innerHTML = "☀️";
  } else {
    root.style.setProperty("--bg", "#f5f5f7");
    root.style.setProperty("--bg-alt", "#fff");
    root.style.setProperty("--text", "#111");
    root.style.setProperty("--muted", "#6b7280");
    toggle.innerHTML = "☾";
  }
});
