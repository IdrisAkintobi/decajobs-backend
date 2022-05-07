import { z } from "zod";
const JobZodSchema = z.object({
  category: z.enum(["Technology", "Finance", "Manufacturing", "Marketing"]),
  closeDate: z.string(),
  companyName: z.string().min(2, { message: "Enter full company name" }),
  description: z.string().min(30, {
    message: "Job description cannot be shorter than 30 characters",
  }),
  email: z.string().email({ message: "Invalid email address" }),
  location: z.string(),
  salary: z.string(),
  experience: z.string(),
  title: z.string({ required_error: "Enter job title" }),
  type: z.string(),
  website: z.string().url(),
});

const EduZodSchema = z.object({
  schoolName: z.string(),
  qualification: z.string(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
});

const ExpZodSchema = z.object({
  employer: z.string().optional(),
  position: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  description: z.string().optional(),
});

const ResumeZOdSchema = z.object({
  FirstName: z.string({ required_error: "FirstName is required" }),
  LastName: z.string({ required_error: "LastName is required" }),
  dob: z.string({ required_error: "Enter date of birth" }),
  email: z.string().email({ message: "Invalid email address" }),
  gender: z.string(),
  location: z.string(),
  objective: z.string({ required_error: "Resume objective is required" }),
  phone: z.string(),
  title: z.string({ required_error: "Enter preferred tittle" }),
  website: z.string().optional(),
  skills: z.string().array(),
  experience: ExpZodSchema.optional(),
  education: EduZodSchema,
});

const UserSchema = z.object({
  role: z.enum(["Recruiter", "Applicant"]),
  fullName: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
});

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export { JobZodSchema, ResumeZOdSchema, UserSchema, LoginSchema };
