/**
 *  policies/getAuth0AccessToken.js
 */

const request = require('request');

module.exports = function getAuth0AccessToken (req, res, next) {
    var options = {
        method: 'POST',
        url: 'https://lapr5-3da.eu.auth0.com/oauth/token',
        headers: { 'content-type': 'application/json' },
        body:
            {
                grant_type: 'client_credentials',
                client_id: '3irkP1QzHWEfBsIrrk32IWPhWx9u9Lxx',
                client_secret: 'IICN_w4LUkvcDTgIbQ6WVh88bmxVmdOZbuTEWj4ScX84N_Ux0dOthohwtYwsvp3z',
                audience: 'https://lapr5-3da.eu.auth0.com/api/v2/'
            },
        json: true
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        req.accessToken = body;
        next();
    });
};