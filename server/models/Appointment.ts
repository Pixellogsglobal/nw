import mongoose, { Schema, Document } from 'mongoose';

export interface IAppointment extends Document {
  clientId: mongoose.Types.ObjectId;
  consultantId: mongoose.Types.ObjectId;
  type: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  startTime: Date;
  endTime: Date;
  calendlyEventUri: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const AppointmentSchema = new Schema<IAppointment>({
  clientId: { type: Schema.Types.ObjectId, ref: 'Client', required: true },
  consultantId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true },
  status: {
    type: String,
    enum: ['scheduled', 'completed', 'cancelled'],
    default: 'scheduled'
  },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  calendlyEventUri: { type: String, required: true },
  notes: String
}, {
  timestamps: true
});

// Indexes for better query performance
AppointmentSchema.index({ clientId: 1, startTime: -1 });
AppointmentSchema.index({ consultantId: 1, startTime: -1 });
AppointmentSchema.index({ status: 1 });

export const Appointment = mongoose.model<IAppointment>('Appointment', AppointmentSchema);