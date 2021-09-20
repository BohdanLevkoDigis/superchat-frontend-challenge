import mongoose, { Schema, Document } from "mongoose";

export interface IRepoLink extends Document {
  _id: string;
  userName: string;
  repositoryName: string;
  color: string;
  icon: string;
}

const RepoLinkSchema = new Schema({
  userName: { type: String, required: true },
  repositoryName: { type: String, required: true },
  color: { type: String, required: true },
  icon: { type: String, required: true },
});
export default mongoose.model<IRepoLink>("RepoLink", RepoLinkSchema);
