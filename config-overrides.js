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
      "@primary-color": "#3e2600",
      "@link-color": "#3e2600",
      "@link-hover-color": "#964e02",
      "@link-active-color": "#964e02",
      "@normal-color": "#3e2600",
      "@text-color": "#3e2600",
      "@btn-font-weight": "bold",
      "@text-color-secondary": "#3e2600",
      "@warning-color": "#2dd4e0"
    }
  })
);
