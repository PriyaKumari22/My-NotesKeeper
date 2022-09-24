import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, "priya1234", {
    expiresIn: "30d",
  });
};

export default generateToken;
