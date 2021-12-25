import express from 'express';
const indexRouter = express.Router();

import { indexPage, messagesPage, addMessage } from '../controllers';

indexRouter.get('/', indexPage);
indexRouter.get('/messages', messagesPage);
indexRouter.post('/messages', addMessage);

export default indexRouter;
