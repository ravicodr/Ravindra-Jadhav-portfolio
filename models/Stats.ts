import mongoose, { Schema, Document } from 'mongoose';

export interface IStats extends Document {
  experience: number;
  dau: number;
  apiRequests: number;
  projectsCompleted: number;
  updatedAt: Date;
}

const StatsSchema = new Schema<IStats>({
  experience: {
    type: Number,
    required: true,
    default: 4,
  },
  dau: {
    type: Number,
    required: true,
    default: 10,
  },
  apiRequests: {
    type: Number,
    required: true,
    default: 100,
  },
  projectsCompleted: {
    type: Number,
    required: true,
    default: 25,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Stats || mongoose.model<IStats>('Stats', StatsSchema);
