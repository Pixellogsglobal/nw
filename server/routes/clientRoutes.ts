import express from 'express';
import { clientController } from '../controllers/clientController';
import { auth } from '../middleware/auth';

const router = express.Router();

// Protected routes - require authentication
router.use(auth);

// Client management routes
router.post('/', clientController.create);
router.get('/', clientController.getAll);
router.get('/:id', clientController.getById);
router.put('/:id', clientController.update);
router.delete('/:id', clientController.delete);

// Consultation and document routes
router.post('/:id/consultations', clientController.addConsultation);
router.post('/:id/documents', clientController.addDocument);

export default router;