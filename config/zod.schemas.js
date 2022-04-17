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
  title: z.string({ message: "Enter job title" }),
  type: z.string(),
  website: z.string().url(),
});

const EduZodSchema = z.object({
  schoolName: z.string(),
  qualification: z.string(),
  startDate: z.string(),
  endDate: z.string(),
});

const ExpZodSchema = z.object({
  employer: z.string(),
  position: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  description: z.string(),
});

const ResumeZOdSchema = z.object({
  FirstName: z.string({ message: "Enter first name" }),
  LastName: z.string({ message: "Enter last name" }),
  dob: z.string({ message: "Enter date of birth" }),
  email: z.string().email({ message: "Invalid email address" }),
  gender: z.string(),
  location: z.string(),
  objective: z.string({ message: "Write your resume objective" }),
  phone: z.string(),
  title: z.string({ message: "Enter preferred tittle" }),
  website: z.string().url(),
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
