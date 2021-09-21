import { Router } from 'express';

import * as ApiController from '../controllers/apiController';

const router = Router();

router.get('/ping', ApiController.ping);
router.get('/random', ApiController.random);
router.get('/nome/:nome', ApiController.nome);


//rotas API
router.post('/frases', ApiController.createPhrase)


export default router;