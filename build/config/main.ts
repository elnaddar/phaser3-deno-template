import { Router, send } from '@oak/oak';

const router = new Router();

// Serve index.html at "/"
router.get('/', async (context) => {
  await send(context, 'index.html', {
    root: `${Deno.cwd()}/${Deno.env.get('STATIC_FOLDER') ?? 'build/static'}`,
  });
});

export default router;
