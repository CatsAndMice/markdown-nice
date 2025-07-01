window.exports = {
  markdown: {
    mode: "none",
    args: {
      // 插件执行入口
      enter: () => {
        const win = utools.createBrowserWindow("../docs/index.html", {
          width: 1000,
          height: 800,
          show: true,
          title: "测试窗口"
        }, () => {
          win.webContents.openDevTools()
        })
        utools.outPlugin();
      },
    },
  },
};