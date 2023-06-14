import { Router } from 'express';

import { hello, time, capitalise } from 'controllers/demo';
const router = Router();

router.get('/', [], hello);
router.get('/time', [], time);
router.get('/capitalise', [], capitalise);

export default router;
