import * as mongoose from 'mongoose'
import { Users } from './userTypes'

const UserSchema = new mongoose.Schema<Users>( {
  name: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  phone: {
    type: Number ,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true,
    default: null,
    enum: [
      "Male",
      "Female"
    ]
  }
})

const User = mongoose.model('user', UserSchema)
module.exports = User