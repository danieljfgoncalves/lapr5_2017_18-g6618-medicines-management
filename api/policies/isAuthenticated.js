/**
 * isAuthenticated
 *
 */
var jwt = require('express-jwt');
var jwksRsa = require('jwks-rsa');

var authCheck = jwt({
    // Dynamically provide a signing key
    // based on the kid in the header and 
    // the signing keys provided by the JWKS endpoint.
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://lapr5-3da.eu.auth0.com/.well-known/jwks.json`
    }),

    // Validate the audience and the issuer.
    audience: 'https://medicines-backend-api/',
    issuer: `https://lapr5-3da.eu.auth0.com/`,
    algorithms: ['RS256']
});

module.exports = authCheck;