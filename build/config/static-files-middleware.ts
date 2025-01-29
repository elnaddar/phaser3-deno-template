import { Context, Next, send } from '@oak/oak';

export default async (context: Context, next: Next) => {
  const filePath = context.request.url.pathname;
  try {
    await send(context, filePath, {
      root: `${Deno.cwd()}/${Deno.env.get('STATIC_FOLDER') ?? 'build/static'}`,
      index: 'index.html',
    });
  } catch {
    await next();
  }
};
