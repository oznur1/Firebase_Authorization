
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut  } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';


const firebaseConfig = {
  apiKey: "AIzaSyB1_hp43u1Puc_KgphX-NA-v3rdJTX7X_Y",
  authDomain: "authentication-27a48.firebaseapp.com",
  projectId: "authentication-27a48",
  storageBucket: "authentication-27a48.firebasestorage.app",
  messagingSenderId: "737872221047",
  appId: "1:737872221047:web:150d3b03096404169d8772"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();


//register
export const register=async(email,password)=>{
 try{
    const {user} = await createUserWithEmailAndPassword(auth, email, password)
  return user
}catch (error){
toast.error(error.message)
}
}


//Sign 

export const login=async(email,password)=>{
    try{
    const {user} = await signInWithEmailAndPassword(auth, email, password)
     return user

    }catch(error){
        toast.error(error.message)
    }
}


//SignOut
export const logout=async()=>{
    try{
  await signOut(auth)
     return true

    }catch(error){
        toast.error(error.message)
    }
}



export default app