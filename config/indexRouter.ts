import { Router, send } from '@oak/oak';

export default function indexRouter(
  staticFolderPath: string = 'static',
  indexFile: string = 'index.html'
): Router<Record<string, any>> {
  const router = new Router();

  router.get('/', async (context) => {
    await send(context, indexFile, {
      root: `${Deno.cwd()}/${staticFolderPath}`,
    });
  });

  return router;
}
