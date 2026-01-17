import mongoose, { Schema, Document } from 'mongoose';

export interface IExperience extends Document {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  achievements: string[];
  order: number;
  isActive: boolean;
}

const ExperienceSchema = new Schema<IExperience>({
  company: {
    type: String,
    required: [true, 'Company name is required'],
    trim: true,
  },
  role: {
    type: String,
    required: [true, 'Role is required'],
    trim: true,
  },
  location: {
    type: String,
    required: [true, 'Location is required'],
    trim: true,
  },
  startDate: {
    type: String,
    required: [true, 'Start date is required'],
  },
  endDate: {
    type: String,
    required: [true, 'End date is required'],
  },
  achievements: {
    type: [String],
    default: [],
  },
  order: {
    type: Number,
    default: 0,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
});

export default mongoose.models.Experience || mongoose.model<IExperience>('Experience', ExperienceSchema);
