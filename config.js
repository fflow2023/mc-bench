const mcBenchConfig = {
  prompt: "Make a Minecraft game. Output only one self-contained HTML file with no external dependencies.",
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
  ],
};
// 将产物放入 games/<agent-model>/index.html 并在 config.js 中注册