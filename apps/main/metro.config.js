const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const path = require('node:path');

const configDefault = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  config.transformer.minifierPath = require.resolve('metro-minify-esbuild');
  config.transformer.minifierConfig = {
    compress: {
      drop_console: true,
    },
  };

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  };
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...resolver.sourceExts, 'svg'],
    nodeModulesPaths: [
      path.resolve(__dirname, '../../node_modules'),
      path.resolve(__dirname, 'node_modules'),
    ],
    extraNodeModules: new Proxy({}, {
      get: (target, name) =>
        path.join(__dirname, '../../node_modules', name),
    }),
  };

  config.watchFolders = [
    path.resolve(__dirname, '../../packages'),
    path.resolve(__dirname, '../../node_modules'),
  ];

  return config;
})();

// Add NativeWind support
module.exports = withNativeWind(configDefault, {
  input: path.resolve(__dirname, './global.css'),
});
