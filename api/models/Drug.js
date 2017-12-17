/**
 * Drug.js
 *
 * @description :: Represents a drug
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    
    name: {
      type: 'string',
      required: true
    },

    medicines: {
      collection: 'Medicine',
      via: 'drug'
    },

    presentations: {
      collection: 'Presentation',
      via: 'drug'
    }

  }

};

