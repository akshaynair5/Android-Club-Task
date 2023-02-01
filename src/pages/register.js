import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import { auth } from "../firebase_config"
import { storage } from "../firebase_config";
import { getDownloadURL } from "firebase/storage";
import {useNavigate } from "react-router-dom";
function Register (){
    const navigate = useNavigate()
    const [err,setErr] = useState(false)
    const HandleSubmit= async (e)=>{
        e.preventDefault();
        const displayName = e.target[0].value
        const email = e.target[1].value
        const number = e.target[2].value
        const password = e.target[3].value
        const DP = e.target[4].files[0]
        const storageid = new Date().getTime()
        const User = await createUserWithEmailAndPassword(auth,email,password)
        const storageRef = ref(storage,`${storageid}`)
        await uploadBytesResumable(storageRef,DP)
            .then(()=>{
                getDownloadURL(storageRef).then(async (downloadURL) => {
                    try{
                        await updateProfile(User.user,{
                            displayName,
                            photoURL:downloadURL,
                            mobileNumber:number
                        })
                    }
                    catch(err){
                        setErr(true)
                    }
                navigate("/Profile")
            })
        })
        

    }
    return(
        <div className="RegisterPage">
            <form onSubmit={(e)=>HandleSubmit(e)}>
                <input type="text" placeholder="Name"></input>
                <input type="email" placeholder="Email-ID"></input>
                <input type="number" placeholder="Mobile Number"></input>
                <input type="password" placeholder="password"></input>
                <input type="file" placeholder="file"></input>
                <input type="submit" ></input>
                {err && <span>Something went wrong</span>}
            </form>
        </div>
    )
}

export default Register