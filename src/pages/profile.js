import { useContext } from "react";
import { Authcontext } from "../contextProvider";
import { signOut } from "firebase/auth";
import { auth } from "../firebase_config";

function Profile(){
    const {currentUser} = useContext(Authcontext)
    return(
        <div>
            <div>{currentUser.displayName}</div>
            <button onClick={()=>signOut(auth)}></button>
        </div>
    )
}

export default Profile