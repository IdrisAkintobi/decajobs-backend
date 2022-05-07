import { Request } from "express";
import { User } from "../../src/config/basic.utils";
declare global {
  namespace Express {
    interface Request {
      user: User;
    }
  }
}
