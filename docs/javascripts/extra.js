// Tables wider than the page scroll sideways. Mark which edges still hide content
// (for the edge fade and sticky column shadow) and make the scroll box reachable by keyboard.
(function () {
  var observer = new ResizeObserver(function (entries) {
    entries.forEach(function (entry) { updateTable(entry.target); });
  });

  function updateTable(box) {
    var overflow = box.scrollWidth - box.clientWidth > 1;
    if (!overflow) {
      box.removeAttribute("data-scroll");
      box.removeAttribute("tabindex");
      box.removeAttribute("role");
      box.removeAttribute("aria-label");
      return;
    }
    var edges = [];
    if (box.scrollLeft > 1) edges.push("kiri");
    if (box.scrollLeft + box.clientWidth < box.scrollWidth - 1) edges.push("kanan");
    box.setAttribute("data-scroll", edges.join(" ") || "ya");
    box.setAttribute("tabindex", "0");
    box.setAttribute("role", "region");
    box.setAttribute("aria-label", "Tabel, bisa digeser ke samping");
  }

  document$.subscribe(function () {
    document.querySelectorAll(".md-typeset .md-typeset__table").forEach(function (box) {
      if (box.dataset.tabelSiap) return;
      box.dataset.tabelSiap = "1";
      box.addEventListener("scroll", function () { updateTable(box); }, { passive: true });
      observer.observe(box);
      updateTable(box);
    });
  });
})();
