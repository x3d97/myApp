import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  birthday: Date
})

export default mongoose.model('User', UserSchema)