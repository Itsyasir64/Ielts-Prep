'use strict';

const config = {
    auth: {
        jwtSecret: process.env.JWT_SECRET || 'defaultsecret',
        jwtExpiration: process.env.JWT_EXPIRATION || '1d',
    },
    oauth: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
        facebook: {
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        },
    },
};

module.exports = config;