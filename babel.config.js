module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.jsx',
          '.android.jsx',
          '.js',
          '.jsx',
          '.json',
          '.ts',
          '.tsx',
        ],
        alias: {
          src: './src',
          components: './src/components',
          hooks: './src/hooks',
          'test-utils': './src/tests-utils',
          mocks: './__mocks__',
        },
      },
    ],
  ],
};
