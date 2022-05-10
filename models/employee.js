import mongoose from "mongoose";

const { Schema } = mongoose;

const employeeSchema = new Schema({
  isbn: {
    type: String,
    trim: true,
    required: true,
  },
  firstname: {
    type: String,
    trim: true,
    required: true,
  },
  lastname: {
    type: String,
    trim: true,
    required: true,
  },
  mail: {
    type: String,
    trim: true,
    required: true,
  },
   
  description: {
    type: String,
    trim: true,
    required: true,
  },
  
});

export default mongoose.model("Employee", employeeSchema);
