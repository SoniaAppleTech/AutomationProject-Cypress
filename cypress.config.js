const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    supportFile: 'cypress/support/e2e.js', // Path to support file
    baseUrl: 'http://localhost/wordpress/wp-login.php', // Application under test // http://localhost:56318/
    chromeWebSecurity: false, // Allows cross-origin testing
    defaultCommandTimeout: 10000,
    retries: 2,
  },
});

