import { Router } from 'express';

import { hello, time, capitalise } from 'controllers/demo';
import { getTodo } from 'controllers/demo/todo';
const router = Router();

router.get('/', [], hello);
router.get('/time', [], time);
router.get('/capitalise', [], capitalise);
router.get('/todo', [], getTodo);

export default router;
