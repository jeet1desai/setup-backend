import express from 'express';
const indexRouter = express.Router();

import { indexPage, messagesPage, addMessage, payment } from '../controllers';
import { modifyMessage } from '../middleware';

indexRouter.get('/', indexPage);
indexRouter.get('/messages', messagesPage);
indexRouter.post('/messages', modifyMessage, addMessage);
indexRouter.post('/create-payment-intent', payment);

export default indexRouter;
