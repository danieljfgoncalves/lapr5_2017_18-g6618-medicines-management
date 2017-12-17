/**
 * Medicine.js
 *
 * @description :: Represents a medicine
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name: {
      type: 'string',
      required: true
    },

    drug: {
      model: 'Drug'
    }
    
  }
  
};