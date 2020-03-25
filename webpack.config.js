const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");

module.exports = webpackConfigEnv => {
  const defaultConfig = singleSpaDefaults({
    orgName: "react-mf",
    projectName: "people",
    webpackConfigEnv
  });

  const rxjsExternals = {
    externals: [/^rxjs\/?.*$/]
  };

  const config = webpackMerge.smart(defaultConfig, rxjsExternals, {
    // customizations go here
    plugins: [new CleanWebpackPlugin(), new ManifestPlugin()]
  });

  // return config;

  return { ...config, externals: ["single-spa", /^@react-mf\//] };
};
