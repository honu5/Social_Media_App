import bcrypt from "bcrypt";
// This helper file is used to encrypt and decrypt passwords, it uses bcrypt to hash the passwords and compare them, it is used in the resolvers for the user registration and login, it can be configured to use different hashing algorithms if needed

export const encrypt = (password: string) => {
  return bcrypt.hashSync(password, 0);
};

export const decrypt = (password: string, hash: string) => {
  return bcrypt.compareSync(password, hash);
};

export default {};
