import express from 'express';
import { appointmentController } from '../controllers/appointmentController';
import { auth } from '../middleware/auth';

const router = express.Router();

// Calendly webhook - no auth required
router.post('/webhook', appointmentController.create);

// Protected routes
router.use(auth);
router.get('/client/:clientId', appointmentController.getClientAppointments);
router.get('/consultant/:consultantId', appointmentController.getConsultantAppointments);
router.patch('/:id/status', appointmentController.updateStatus);

export default router;