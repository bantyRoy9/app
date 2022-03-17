import express from "express";

import { getQsns, userCreate, userLogin, userLoginid } from '../controller/controller.js'
import { getUser,createUser } from '../controller/userController.js'
import { getQsnBlock, getQsnid } from '../controller/qsnBlockController.js'

const router = express.Router();

router.get('/qsn',getQsns)
router.post('/sign',userCreate);
router.get('/getqsn', getQsnBlock);
router.get('/user',userLogin);
router.get('/user/:id',getQsnid);
// router.get('/:id',userLoginid); 

// router.route('/user').get(getUser).post(createUser)
export default router