const { getDefaultConfig: getDefaultExpoConfig } = require("@expo/metro-config")
const path = require("path")

const ALIASES = {
      "*": "./src/*",
      "@assets/*": "./assets",
      "@components/*": "./src/components",
      "@screens/*": "./src/screens",
      "@navigation/*": "./src/navigation",
      "@constants/*": "./src/constants",
}

metroConfig = (() => {
  const config = getDefaultExpoConfig(__dirname)

  const { transformer, resolver } = config

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  }
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...resolver.sourceExts, "svg"],
  }

  config.resolver.resolveRequest = (context, moduleName, platform) => {
    return context.resolveRequest(
      context,
      ALIASES[moduleName] ?? moduleName,
      platform
    )
  }
 return config
})()

module.exports = metroConfig

// module.exports = (async () => {
//   const {
//     resolver: { sourceExts, assetExts },
//   } = await getDefaultConfig();
//   return {
//     transformer: {
//       babelTransformerPath: require.resolve('react-native-svg-transformer'),
//     },
//     resolver: {
//       assetExts: assetExts.filter(ext => ext !== 'svg'),
//       sourceExts: [...sourceExts, 'svg'],
//     },
//   };
// })();