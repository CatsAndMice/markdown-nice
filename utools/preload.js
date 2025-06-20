window.exports = {
  markdown: {
    mode: "none",
    args: {
      // 插件执行入口
      enter: () => {
        const win = utools.createBrowserWindow("../docs/index.html", {
          fullscreen: true, // 全屏模式
          show: true,
          title: "测试窗口",
          simpleFullScreen: true
        })
        utools.outPlugin();
      },
    },
  },
};