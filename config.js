const mcBenchConfig = {
  prompt: "Make a 3d Minecraft game. Output only a single HTML file.",
  entries: [
    {
      agent: "ChatGPT",
      model: "5.6 Sol Ultra",
      date: "2026-07-18",
      path: "games/chatgpt5.6-ultra/",
    },
    {
      agent: "DeepSeek",
      model: "V4 Pro",
      date: "2026-07-18",
      path: "games/deepseek-v4pro/",
    },
    {
      agent: "GLM",
      model: "5.2",
      date: "2026-07-18",
      path: "games/GLM-5.2/",
    },
    {
      agent: "Kimi",
      model: "K3",
      date: "2026-07-18",
      path: "games/kimi-k3/",
    },
  ],
};
// 将产物放入 games/<agent-model>/index.html 并在 config.js 中注册