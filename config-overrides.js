const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@anchor-border-color": "rgba(255, 255, 255, 0)",
      "@primary-color": "#ff7974",
      "@link-color": "#ff7974",
      "@link-hover-color": "#ff9c98",
      "@link-active-color": "#ff9c98",
      "@normal-color": "#ff7974",
      "@text-color": "#ff7974",
      "@btn-font-weight": "bold",
      "@text-color-secondary": "#ff7974",
      "@warning-color": "#2dd4e0"
    }
  })
);
