module.exports = function(api) {
    api.cache(true);
    return {
      presets: ['babel-preset-expo'],
      plugins: ['expo-router/babel'],
    };
  };
// This Babel configuration file is used to set up the Babel compiler for an Expo project. It includes the 'expo-router/babel' plugin, which is necessary for using the expo-router library for navigation in React Native applications. The 'babel-preset-expo' preset is also included to provide the necessary transformations for Expo projects.
// The 'api.cache(true)' line is used to cache the result of the Babel configuration for performance optimization. The 'presets' array specifies the presets to be used, and the 'plugins' array specifies the plugins to be used during the compilation process.  