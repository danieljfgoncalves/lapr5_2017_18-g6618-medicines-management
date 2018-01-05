/**
 * Test environment settings
 *
 * This file can include shared settings for a test purposes.
 */

module.exports = {

  /***************************************************************************
   * Set the default database connection for models in the test              *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/

  models: {
    migrate: 'drop',
    connection: "testDB"
  },

  port: 9999,

  log: {
    level: 'error'
  },

  policies: {
    '*': true,
    PresentationController: {
      detailedPresentations: true,
      detailedPresentation: true
    }
  }

};