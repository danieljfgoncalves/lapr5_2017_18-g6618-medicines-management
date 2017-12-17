/**
 * PresentationController
 *
 * @description :: Server-side logic for managing Presentations
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    /**
     * GET /api/presentations/detailed
     */
    detailedPresentations: (req, res) => {

        Presentation.find( (err1, presentations) => {
            if (err1) {
                res.serverError(err1);
                return;
            }

            presentationsDTO = [];

            async.each(presentations, (presentation, callback) => {

                processPresentation(presentation).then(data => {
                    var DTO = filterFields(data, req.query.fields);
                    presentationsDTO.push(DTO);
                    callback();
                });

            }, err2 => {
                if (err2) {
                    res.serverError(err2);
                    return;
                }
                res.status(200).send(presentationsDTO);
                return;
            });
        });
    },

    /**
     * GET /api/presentations/:id/detailed
     */
    detailedPresentation: (req, res) => {
        
        Presentation.findById(req.params.id, (err, presentations) => {
            if (err) {
                res.serverError(err);
                return;
            }
            if (presentations.length != 1) {
                res.notFound();
                return;
            }
            processPresentation(presentations[0]).then(data => {
                var DTO = filterFields(data, req.query.fields);
                res.status(200).send(DTO);
                return;
            });
        });

    }

};

/**
 * Shapes a raw presentation.
 * @param {*} presentation A raw presentation (the way it comes from find method)
 * @returns Promise with the shaped presentation
 */
processPresentation = (presentation) => {

    var presentationDTO = {
        id: presentation.id,
        createdAt: presentation.createdAt,
        updatedAt: presentation.updatedAt,
        form: presentation.form,
        concentration: presentation.concentration,
        packageQuantity: presentation.packageQuantity
    };

    return new Promise((resolve, reject) => {
        
        Drug.findById(presentation.drug, (err1, drugs) => {
            if (err1) {
                res.serverError(err1);
                return;
            }
            presentationDTO.drug = drugs[0];
            resolve();
        });
        
    }).then(data => {
        return new Promise( (resolve, reject) => {

            Medicine.find({drug:presentationDTO.drug.id}, (err2, medicines) => {
                if (err2) {
                    res.serverError(err2);
                    return;
                }
                presentationDTO.medicines = medicines;
                resolve();
            });

        });
    }).then(data => {
        return new Promise( (resolve, reject) => {

            Posology.find({presentation:presentationDTO.id}, (err3, posologies) => {
                if (err3) {
                    res.serverError(err3);
                    return;
                }
                presentationDTO.posologies = posologies;
                resolve();
            });

        });
    }).then(data => {
        return new Promise( (resolve, reject) => {

            Comment.find({presentation:presentationDTO.id}, (err4, comments) => {
                if (err4) {
                    res.serverError(err4);
                    return;
                }
                presentationDTO.comments = comments;
                resolve(presentationDTO);
            });

        });
    });

};

/**
 * Filters an object by fields.
 * @param {*} object Object to be filtered
 * @param {*} fields Fields to filter
 * @returns Filtered object or original object in case there is no fields to filter
 */
filterFields = (object, fields) => {
    if (fields) { 
        var DTO = {}

        var fieldsArray = fields.split(",");
        for(var i=0; i<fieldsArray.length; i++) {
            DTO[fieldsArray[i]] = object[fieldsArray[i]];
        }
        
        return DTO;
    }
    return object;
};