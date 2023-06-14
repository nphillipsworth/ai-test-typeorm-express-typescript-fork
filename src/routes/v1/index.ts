import { Router } from 'express';

import auth from './auth';
import users from './users';
import demo from './demo';

const router = Router();

router.use('/auth', auth);
router.use('/users', users);
router.use('/demo', demo);


export default router;
