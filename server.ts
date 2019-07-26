
'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: process.env.PORT || 3000,
        host: '0.0.0.0'
    });

    server.route({

      method: 'POST',

      path: '/',

      config: {

        handler: (req, h) => {

          console.log(req);

          return {}

        }

      }

    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();