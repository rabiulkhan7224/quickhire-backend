import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IApplication extends Document {
  job: Types.ObjectId;
  name: string;
  email: string;
  resumeLink: string;
  coverNote?: string;
  createdAt: Date;
  updatedAt: Date;
}

const applicationSchema = new Schema<IApplication>(
  {
    job: { type: Schema.Types.ObjectId, ref: 'Job', required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    resumeLink: { type: String, required: true },
    coverNote: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model<IApplication>('Application', applicationSchema);