import express from 'express';
const indexRouter = express.Router();

import { indexPage, messagesPage, addMessage } from '../controllers';
import { modifyMessage } from '../middleware';

indexRouter.get('/', indexPage);
indexRouter.get('/messages', messagesPage);
indexRouter.post('/messages', modifyMessage, addMessage);

export default indexRouter;
