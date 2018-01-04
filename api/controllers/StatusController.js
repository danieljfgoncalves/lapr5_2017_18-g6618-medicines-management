/**
 * StatusController
 *
 * @description :: Server-side logic for managing Statuses
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    getStatus: function (req, res) {

        Presentation.count().exec(function countCB(err, present) {
            if (err) {
                return res.serverError(err);
            }
            return res.status(200).json({"count": present});
        })
    }
	
};

