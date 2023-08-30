import { useContext, useState, useEffect, createContext } from "react";
import { account } from "../appwriteConfig";
import {ID} from 'appwrite'

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [wrong, setWrong] = useState(true)
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUserStatus()
  }, [])

  const loginUser = async (userInfo) => {
    setLoading(true)
    try{
        let response = await account.createEmailSession(
            userInfo.email,
            userInfo.password
        )

        let accountDetails = await account.get()
        setUser(accountDetails)
        setWrong(() => true)
        

    }catch(err){
        console.log(err)
        setWrong(() => false)
    }
    setLoading(false)
  }
  
  const logoutUser = () => {
    account.deleteSession('current')
    setUser(null)
  }

  const registerUser = async (userInfo) => {
    setLoading(true)
    try{
        let response = await account.create(
            ID.unique(),
            userInfo.email,
            userInfo.password,
            userInfo.name
        )
        await account.createEmailSession(
            userInfo.email,
            userInfo.password
        )

        let accountDetails = await account.get()
        setUser(accountDetails)

    } catch (err){
        console.error(err)
    }

    setLoading(false)
  }

  const checkUserStatus = async () => {

    try{
        let accountDetails = await account.get()
        setUser(accountDetails)
    }catch(err){
        console.log(err)
    }
    setLoading(false)
  }

  const contextData = {
    user,
    loginUser,
    logoutUser,
    registerUser,
    wrong
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? <p style={{color:'white'}}>Loading...</p> : children}
    </AuthContext.Provider>
  );
};

export {AuthProvider}

export const useAuth = () => {return useContext(AuthContext)}

export default AuthContext; 
    