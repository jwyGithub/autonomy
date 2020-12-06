/*
 * @Descripttion:
 * @version:
 * @Author: jwy
 * @Date: 2020-12-05 19:18:13
 * @LastEditors: jwy
 * @LastEditTime: 2020-12-05 21:51:10
 */
/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  resolver: {
    /* resolver options */
    sourceExts: ['jsx', 'js', 'ts', 'tsx'],
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
