exports.config = {

  specs: [
    './test/e2e_tests/*.js'
  ],

  capabilities: {
    'browserName': 'chrome',
  },

  baseUrl: 'http://localhost:3000'


};