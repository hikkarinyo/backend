import Router from 'express'
import PostController from "./controllers/PostController.js";
import UserController from "./controllers/UserController.js";

const router = new Router();

router.post('/posts', PostController.create);
router.get('/posts', PostController.getAll);
router.get('/posts/:id', PostController.getOne);
router.put('/posts/:id', PostController.update);
router.delete('/posts/:id', PostController.delete);

router.post('/signup', UserController.signup);
router.post('/signin', UserController.signin);
router.get('/users', UserController.getUsers);
router.get('/user/:id', UserController.getOne);


export default router;