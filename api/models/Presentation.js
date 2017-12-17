/**
 * Presentation.js
 *
 * @description :: Represents the presentation of a drug
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
    },

    posologies: {
      collection: 'Posology',
      via: 'presentation'
    }

  }
};

