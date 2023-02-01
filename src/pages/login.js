import { auth } from "../firebase_config";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate()
    const [err,setErr] = useState(false)
    const HandleSubmit= async (e)=>{
        e.preventDefault()
        const email = e.target[0].value
        const password = e.target[1].value
        try{
            signInWithEmailAndPassword(auth,email,password)
            navigate("/Profile")
        }
        catch(err){
            setErr(true)
        }

    }
    return(
        <div className="login-form" onSubmit={(e)=>HandleSubmit(e)}>
            <form>
                <input type="email" placeholder="email"></input>
                <input type="password" placeholder="password"></input>
                <input type="submit"></input>
                {err && <span>Something went wrong</span>}
            </form>
        </div>
    )
}

export default Login