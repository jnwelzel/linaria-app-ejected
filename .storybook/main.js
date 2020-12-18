module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.(js|tsx)$/,
      use: [
        { loader: "babel-loader" },
        {
          loader: "@linaria/webpack-loader",
          options: {
            cacheDirectory: "src/.linaria_cache",
            sourceMap: configType !== "PRODUCTION",
          },
        },
      ],
    });

    // Return the altered config
    return config;
  },
};
