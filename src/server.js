/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/newline-after-import
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    // kode di bawah ini berguna untuk memungkinkan server untuk mengakses origin yang berbeda. dan mengatasi masalah same-origin policy
    routes: {
      cors: {
        origin: ['*'],
      },
    },
    // ---------
  });
  server.route(routes);
  await server.start();
  console.info(`Server berjalan pada ${server.info.uri}`);
};
init();
