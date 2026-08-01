const mcBenchConfig = {
  prompt: "Make a playable 3D Minecraft game. Output only a single HTML file.",
  entries: [
    {
      agent: "Kimi",
      model: "K3",
      date: "2026-07-18",
      path: "games/kimi-k3/",
    },
    {
      agent: "ChatGPT",
      model: "5.6 Sol Ultra",
      date: "2026-07-18",
      path: "games/chatgpt-5.6-ultra/",
    },
    {
      agent: "Claude",
      model: "Opus 4.8",
      date: "2026-08-01",
      path: "games/claude-opus-4.8/",
    },
    {
      agent: "GLM",
      model: "5.2",
      date: "2026-07-18",
      path: "games/glm-5.2/",
    },
    {
      agent: "DeepSeek",
      model: "V4 Flash",
      date: "2026-08-01",
      path: "games/deepseek-v4-flash/",
    },
    {
      agent: "DeepSeek",
      model: "V4 Pro",
      date: "2026-07-18",
      path: "games/deepseek-v4-pro/",
    },
    {
      agent: "Gemini",
      model: "3.1 Pro",
      date: "2026-07-27",
      path: "games/gemini-3.1-pro/",
    },
    {
      agent: "Gemini",
      model: "3.6 Flash",
      date: "2026-07-27",
      path: "games/gemini-3.6-flash/",
    },
    {
      agent: "MiniMax",
      model: "M3",
      date: "2026-07-18",
      path: "games/minimax-m3/",
    },
    {
      agent: "Qwen",
      model: "3.7 Plus",
      date: "2026-07-18",
      path: "games/qwen-3.7-plus/",
    },
  ],
};
// 将产物放入 games/<agent-model>/index.html 并在 config.js 中注册
