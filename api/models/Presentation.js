/**
 * Presentation.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    form: {
      type: 'string',
      required: true
    },

    concentration: {
      type: 'string',
      required: true
    },

    packageQuantity: {
      type: 'integer',
      required: true
    },

    drug: {
      model: 'Drug',
      required: true
    }

  }
};

