import { Context, Next, send } from '@oak/oak';

export default function createStatics(
  staticFolderPath: string = 'static',
  indexFile: string = 'index.html'
): (context: Context, next: Next) => Promise<void> {
  async function staticFilesMiddleware(context: Context, next: Next) {
    const filePath = context.request.url.pathname;
    try {
      await send(context, filePath, {
        root: `${Deno.cwd()}/${staticFolderPath}`,
        index: indexFile,
      });
    } catch {
      await next();
    }
  }
  return staticFilesMiddleware;
}
