'use strict';
require('dotenv').config();
module.exports = {
    app: {
        name: "APIGatewayService",
        baseUrl: `http://localhost:`,
        port: process.env.PORT || 3010
    },
    client: {
        url: process.env.CLIENT || 'http://localhost:3000'
    },
    api: {
        prefix: '^/api/v[1-9]',
        version: [1],
    }
};
