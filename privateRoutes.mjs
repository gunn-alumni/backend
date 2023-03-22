'use strict';

export async function privateRoutes(server) {
  server.requireAuthentication(server);

  server.get(
    '/test-tok',
    async (req, _reply) => {
      return {
        content: 'successfully authenticated',
        token: req.auth
      };
    }
  );
}
