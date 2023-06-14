import { Router } from 'express';

import { hello } from 'controllers/demo';
const router = Router();

router.get('/', [], hello);

export default router;
