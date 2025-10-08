import { Router } from 'express';
import DocumentController from '../controllers/documentController';

const router = Router();
const documentController = new DocumentController();

router.get('/documents', documentController.getDocuments);
router.post('/documents/upload', documentController.uploadDocument);
router.get('/documents/compliance', documentController.trackCompliance);

export default router;