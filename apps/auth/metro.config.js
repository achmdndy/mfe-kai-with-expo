const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const configDefault = (() => {
	const config = getDefaultConfig(__dirname);
	const { transformer, resolver } = config;
	config.transformer.minifierPath = require.resolve("metro-minify-esbuild");
	config.transformer.minifierConfig = {
		compress: {
			drop_console: true,
		},
	};
	const monorepoRoot = path.resolve(__dirname, "../..");
	config.watchFolders = [monorepoRoot];
	config.resolver.nodeModulesPaths = [
		path.resolve(__dirname, "node_modules"),
		path.resolve(monorepoRoot, "node_modules"),
	];
	config.resolver.disableHierarchicalLookup = true;
	config.transformer = {
		...transformer,
		babelTransformerPath: require.resolve("react-native-svg-transformer"),
	};
	config.resolver = {
		...resolver,
		assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
		sourceExts: [...resolver.sourceExts, "svg"],
	};

	return config;
})();

module.exports = withNativeWind(configDefault, { input: "./global.css" });
