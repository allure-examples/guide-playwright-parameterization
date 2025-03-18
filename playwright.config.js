const { devices } = require("@playwright/test");

const config = {
  testDir: "./test",
  reporter: [
    ["list"],
    [
      "allure-playwright",
      {
        outputFolder: "./out/allure-results",
        environmentInfo: {
          node_version: process.version,
        },
      },
    ],
  ],
  projects: [
    {
      name: "Playwright parameterization guide",
    },
  ],
  outputDir: "test-results/",
};

module.exports = config;  
