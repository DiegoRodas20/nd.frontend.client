const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin(
  {
    name: 'host-app',
    remotes: {
      react_layout: "http://localhost:5000/assets/remoteEntry.js",
    },
    shared: {
      ...shareAll({
        singleton: true,
        strictVersion: true,
        requiredVersion: "auto",
      })
    },
  }
);
