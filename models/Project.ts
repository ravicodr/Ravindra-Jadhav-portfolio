import mongoose, { Schema, Document } from 'mongoose';

export interface IProject extends Document {
  title: string;
  description: string;
  problem: string;
  solution: string;
  impact: string[];
  technologies: string[];
  category: string;
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
  order: number;
  isActive: boolean;
  createdAt: Date;
}

const ProjectSchema = new Schema<IProject>({
  title: {
    type: String,
    required: [true, 'Project title is required'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true,
  },
  problem: {
    type: String,
    required: [true, 'Problem statement is required'],
    trim: true,
  },
  solution: {
    type: String,
    required: [true, 'Solution is required'],
    trim: true,
  },
  impact: {
    type: [String],
    default: [],
  },
  technologies: {
    type: [String],
    required: [true, 'Technologies are required'],
    default: [],
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ['enterprise', 'ecommerce', 'saas', 'web', 'mobile'],
    default: 'web',
  },
  demoUrl: {
    type: String,
    trim: true,
  },
  githubUrl: {
    type: String,
    trim: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  order: {
    type: Number,
    default: 0,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema);
