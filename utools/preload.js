window.exports = {
  markdown: {
    mode: "none",
    args: {
      // 插件执行入口
      enter: () => {
        const win = utools.createBrowserWindow("./dist/index.html", {
          width: 1000,
          height: 800,
          show: true,
          title: "编辑器"
        })
        utools.outPlugin();
      },
    },
  },
};