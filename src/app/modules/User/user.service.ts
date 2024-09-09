
import { User } from "./user.model";
import { TUser } from "./user.interface";

const createUserIntoDB = async(payload: TUser) =>{
  const result = await User.create(payload); 
  return result; 
}

const getUserFromDB = async () => {
  const result = await User.find();
  return result;
};


export const UserServices = {
  getUserFromDB,
  createUserIntoDB,
};
