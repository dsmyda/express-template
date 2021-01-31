import mongoose from 'mongoose'

const exampleSchema = new mongoose.Schema({
  name: String
})

mongoose.model('Example', exampleSchema)
