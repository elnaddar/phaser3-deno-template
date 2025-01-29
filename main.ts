import { Application } from '@oak/oak';

import router from './build/config/main.ts';
import staticFilesMiddleware from './build/config/static-files-middleware.ts';
import './build/config/build.ts';

const app = new Application();

// Middleware to serve static files (CSS, images, etc.)
app.use(staticFilesMiddleware);

app.use(router.routes());
app.use(router.allowedMethods());

console.log('Server running on http://localhost:8000');
await app.listen({ port: 8000 });
