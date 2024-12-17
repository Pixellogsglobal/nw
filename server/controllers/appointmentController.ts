import { Request, Response } from 'express';
import { Appointment } from '../models/Appointment';

export const appointmentController = {
  // Create appointment from Calendly webhook
  async create(req: Request, res: Response) {
    try {
      const {
        event,
        payload
      } = req.body;

      if (event !== 'invitee.created') {
        return res.status(200).json({ message: 'Event ignored' });
      }

      const appointment = new Appointment({
        clientId: payload.tracking.utm_source, // Store client ID in UTM source
        consultantId: payload.tracking.utm_medium, // Store consultant ID in UTM medium
        type: payload.event_type.name,
        startTime: payload.event.start_time,
        endTime: payload.event.end_time,
        calendlyEventUri: payload.event.uri,
        notes: payload.questions_and_answers
          ?.find((qa: any) => qa.question === 'Notes')
          ?.answer
      });

      await appointment.save();
      res.status(201).json(appointment);
    } catch (error) {
      res.status(400).json({ error: 'Failed to create appointment' });
    }
  },

  // Get appointments for a client
  async getClientAppointments(req: Request, res: Response) {
    try {
      const { clientId } = req.params;
      const appointments = await Appointment.find({ clientId })
        .sort({ startTime: -1 })
        .populate('consultantId', 'name email');
      
      res.json(appointments);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch appointments' });
    }
  },

  // Get appointments for a consultant
  async getConsultantAppointments(req: Request, res: Response) {
    try {
      const { consultantId } = req.params;
      const appointments = await Appointment.find({ consultantId })
        .sort({ startTime: -1 })
        .populate('clientId', 'firstName lastName email');
      
      res.json(appointments);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch appointments' });
    }
  },

  // Update appointment status
  async updateStatus(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { status } = req.body;

      const appointment = await Appointment.findByIdAndUpdate(
        id,
        { status },
        { new: true }
      );

      if (!appointment) {
        return res.status(404).json({ error: 'Appointment not found' });
      }

      res.json(appointment);
    } catch (error) {
      res.status(400).json({ error: 'Failed to update appointment status' });
    }
  }
};