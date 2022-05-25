import jwt from "jsonwebtoken";
import { string } from "zod";
function genToken(id: string) {
  return jwt.sign({ id }, process.env.JWT_SECRET as string);
}

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

const capitalize = (word: string) => {
  return word
    .split(" ")
    .map((i) => `${i.charAt(0).toUpperCase()}${i.slice(1)}`)
    .join(" ");
};

export { genToken, User, capitalize };
