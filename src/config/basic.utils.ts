import jwt from "jsonwebtoken";
function genToken(id: string) {
  return jwt.sign({ id }, process.env.JWT_SECRET as string);
}

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

export { genToken, User };
