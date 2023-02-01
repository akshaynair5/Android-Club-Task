import { auth } from "../firebase_config";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from "react";
import { useNavigate ,Link} from "react-router-dom";

function Login(){
    const navigate = useNavigate()
    const [err,setErr] = useState(false)
    const HandleSubmit= async (e)=>{
        e.preventDefault()
        const email = e.target[0].value
        const password = e.target[1].value
        try{
            await signInWithEmailAndPassword(auth,email,password)
            navigate("/Profile")
        }
        catch(err){
            setErr(true)
        }

    }
    return(
        <div className="FormBox" onSubmit={(e)=>HandleSubmit(e)}>
            <form>
                <input type="email" placeholder="email"></input>
                <input type="password" placeholder="password"></input>
                <input type="submit" id="S"></input>
                {err && <span>Something went wrong</span>}
                <p style={{width:'35%'}}>Do not have an Account?<Link style={{marginLeft:'2%',textDecoration:'none'}} to="/Register">Register Now</Link></p>
            </form>
        </div>
    )
}

export default Login