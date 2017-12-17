/**
 * Posology.js
 *
 * @description :: Represents the posology of a presentation
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    period: {
      type: 'string',
      required: true
    },
    
    interval: {
      type: 'string',
      required: true
    },
    
    technique: {
      type: 'string',
      required: true
    },
    
    dosage: {
      type: 'string',
      required: true
    },
    
    recommendedFor: {
      type: 'string'
    },

    presentation: {
      model: 'presentation'
    }

  }

};

