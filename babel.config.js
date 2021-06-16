/*eslint indent:0*/
const presets = [
  [
    "@babel/env",
    {
      modules: false,
      targets: {
        browsers: ["> 1%", "last 2 versions", "not ie <= 8"]
      },
      useBuiltIns: "usage",
      corejs: 2
    }
  ]
];

module.exports = { presets };
