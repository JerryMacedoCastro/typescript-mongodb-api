import { Schema, model, Document } from 'mongoose'

interface IUser extends Document {
  email: string
  firstName: string
  lastName: string
  fullName(): string
}

const UserSchema = new Schema({
  email: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true }
}, {
  timestamps: true
})

UserSchema.methods.fullName = function (): string {
  return `${this.firstName} ${this.lastName}`
}

export default model<IUser>('User', UserSchema)
