import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase_config"
function Register (){
    const HandleSubmit= async (e)=>{
        e.preventDefault();
        const DisplayName = e.target[0].value
        const email = e.target[1].value
        const number = e.target[2].value
        const password = e.target[3].value
        const Dp = e.target[4].files[0]
        createUserWithEmailAndPassword(auth,email,password)
        

    }
    return(
        <div className="RegisterPage">
            <form onSubmit={(e)=>HandleSubmit(e)}>
                <input type="text" placeholder="Name"></input>
                <input type="email" placeholder="Email-ID"></input>
                <input type="number" placeholder="Mobile Number"></input>
                <input type="password" placeholder="password"></input>
                <input type="file" placeholder="file"></input>
                <input type="submit" placeholder="Name"></input>
            </form>
        </div>
    )
}

export default Register