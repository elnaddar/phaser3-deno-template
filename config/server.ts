import { Application } from '@oak/oak';

import indexRouter from './indexRouter.ts';
import staticFilesMiddleware from './static-files-middleware.ts';
import buildPhaser from './build.ts';

export default async function phaserServer(
  indexFile?: string,
  staticFolderPath?: string,
  serverPort: number = 3000,
  gameEntryPoint?: string,
  outfileName?: string
) {
  await buildPhaser(gameEntryPoint, staticFolderPath, outfileName);

  const app = new Application();
  const indexRoute = indexRouter(staticFolderPath, indexFile);

  app.use(staticFilesMiddleware(staticFolderPath, indexFile));
  app.use(indexRoute.routes());
  app.use(indexRoute.allowedMethods());

  console.log(`Server running on http://localhost:${serverPort}`);
  await app.listen({ port: serverPort });
}
