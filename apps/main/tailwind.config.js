const rootConfig = require('../../tailwind.config');

module.exports = {
  ...rootConfig,
  content: [
    ...rootConfig.content,
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    ...rootConfig.theme,
    extend: {
      ...rootConfig.theme.extend,
    },
  },
  plugins: [
    ...(rootConfig.plugins || []),
  ],
};
