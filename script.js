document.querySelectorAll(".btn").forEach((btn) => {
    const hint = btn.querySelector(".hint");
    const text = btn.getAttribute("data-hint") || "";
    if (hint) hint.textContent = text;
  });
  