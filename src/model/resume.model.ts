import mongoose from "mongoose";

const Education = new mongoose.Schema({
  schoolName: String,
  qualification: String,
  startDate: String,
  endDate: String,
});
const Experience = new mongoose.Schema({
  employer: String,
  position: String,
  startDate: String,
  endDate: String,
  description: String,
});

const ResumeSchema = new mongoose.Schema(
  {
    poster: {
      type: String,
    },
    title: {
      type: String,
      required: [true, "Please enter your preferred title"],
    },
    LastName: {
      type: String,
      required: [true, "Please enter your last name"],
    },
    FirstName: {
      type: String,
      required: [true, "Please enter your first name"],
    },
    email: {
      type: String,
      required: [true, "Please enter valid email"],
    },
    objective: {
      type: String,
      required: [true, "Please enter your resume objective"],
    },
    phone: {
      type: String,
      required: [true, "Please enter your phone number"],
    },
    gender: {
      type: String,
      required: [true, "Please enter your gender"],
    },
    location: {
      type: String,
      required: [true, "Please enter your location"],
    },
    dob: {
      type: String,
      required: [true, "Please enter your date of birth"],
    },
    website: {
      type: String,
    },
    skills: {
      type: [String],
    },
    education: {},
    experience: {},
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("Resume", ResumeSchema);
