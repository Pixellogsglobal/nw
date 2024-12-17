import mongoose, { Schema, Document } from 'mongoose';

export interface IClient extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  dateOfBirth?: Date;
  educationLevel: string;
  targetUniversities: string[];
  desiredCourses: string[];
  consultationHistory: Array<{
    date: Date;
    type: string;
    notes: string;
  }>;
  documents: Array<{
    name: string;
    type: string;
    url: string;
    uploadedAt: Date;
  }>;
  status: 'active' | 'inactive' | 'completed';
  createdAt: Date;
  updatedAt: Date;
}

const ClientSchema = new Schema<IClient>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: String,
  dateOfBirth: Date,
  educationLevel: { type: String, required: true },
  targetUniversities: [String],
  desiredCourses: [String],
  consultationHistory: [{
    date: { type: Date, required: true },
    type: { type: String, required: true },
    notes: String
  }],
  documents: [{
    name: { type: String, required: true },
    type: { type: String, required: true },
    url: { type: String, required: true },
    uploadedAt: { type: Date, default: Date.now }
  }],
  status: {
    type: String,
    enum: ['active', 'inactive', 'completed'],
    default: 'active'
  }
}, {
  timestamps: true
});

// Indexes for better query performance
ClientSchema.index({ email: 1 });
ClientSchema.index({ status: 1 });
ClientSchema.index({ createdAt: -1 });

export const Client = mongoose.model<IClient>('Client', ClientSchema);