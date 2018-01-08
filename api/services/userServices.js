const request = require('request');

exports.getUser = (apiToken, userId) => {

    if (apiToken == undefined || userId == undefined) return;

    return new Promise((resolve, reject) => {

        var options = {
            method: 'GET',
            url: 'https://lapr5-3da.eu.auth0.com/api/v2/users/' + userId + '?fields=email%2Cusername%2Cuser_id%2Cuser_metadata%2Capp_metadata&include_fields=true',
            headers: {
                authorization: apiToken.token_type + " " + apiToken.access_token,
                'content-type': 'application/json'
            },
            json: true
        };
        request(options, function (error, response, body) {
            if (error) reject(error);
            if (body.error) reject(body.error);

            var userDTO = {
                roles: body.app_metadata.roles,
                userID: body.user_id,
                username: body.username,
                email: body.email,
                mobile: (body.user_metadata) ? body.user_metadata.mobile : undefined
            };
            resolve(userDTO);
        });
    });
};

exports.getUsers = (apiToken) => {

    if (apiToken == undefined) return;

    return new Promise((resolve, reject) => {

        var options = {
            method: 'GET',
            url: 'https://lapr5-3da.eu.auth0.com/api/v2/users',
            headers: {
                Authorization: apiToken.token_type + " " + apiToken.access_token
            }
        };
        request(options, function (error, response, body) {
            if (error) reject(error);
            if (body.error) reject(body.error);

            resolve(JSON.parse(body));
        });
    });
};