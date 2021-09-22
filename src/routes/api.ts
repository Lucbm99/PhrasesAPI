import { Router } from 'express';

import * as ApiController from '../controllers/apiController';

const router = Router();

router.get('/ping', ApiController.ping);
router.get('/random', ApiController.random);
router.get('/nome/:nome', ApiController.nome);


//rotas API
router.post('/frases', ApiController.createPhrase)

router.get('/frases', ApiController.listPhrases);

router.get('/frase/aleatoria', ApiController.randomPhrase);

router.get('/frase/:id', ApiController.getPhraseById)

router.put('/frase/:id', ApiController.updatePhrase);

router.delete('/frase/:id', ApiController.deletePhrase);


export default router;