import { Router } from "express";
import USER_ROUTER from './user.js'

const router = Router();

router.get('/', (req, res) => {
    res.json({ message: 'Welcome to the wander wise API' });
});

router.use('/users', USER_ROUTER);
export default router;