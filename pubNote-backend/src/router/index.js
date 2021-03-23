import express from 'express';
import root from './root';
import auth from './auth';
import users from './users';
import notes from './notes';

const router = express.Router();
const routerMap = {
	'/': root,
	'/auth': auth,
	'/notes': notes,
	'/users': users
};

for (let key in routerMap) {
	router.use(key, routerMap[key]);
}

export default router;