document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("entries-container");

  if (typeof mcBenchConfig === "undefined" || !mcBenchConfig.entries) {
    container.innerHTML =
      '<p style="text-align: center; color: var(--muted);">Config failed to load.</p>';
    return;
  }

  // 渲染 prompt
  const promptEl = document.getElementById("prompt-code");
  if (promptEl && mcBenchConfig.prompt) {
    promptEl.textContent = mcBenchConfig.prompt;
  }

  const sorted = [...mcBenchConfig.entries].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  sorted.forEach((entry, index) => {
    const card = document.createElement("a");
    card.className = "entry-card";
    card.href = entry.path + "index.html";
    card.style.animationDelay = `${index * 0.1}s`;

    const top = document.createElement("div");
    top.className = "entry-top";

    const agent = document.createElement("span");
    agent.className = "entry-agent";
    agent.textContent = entry.agent;

    const model = document.createElement("span");
    model.className = "entry-model";
    model.textContent = entry.model;

    const date = document.createElement("span");
    date.className = "entry-date";
    date.textContent = entry.date;

    top.appendChild(agent);
    top.appendChild(model);
    card.appendChild(top);
    card.appendChild(date);
    container.appendChild(card);
  });

  const hint = document.createElement("div");
  hint.className = "add-hint";
  hint.textContent = "...";
  container.appendChild(hint);
});
