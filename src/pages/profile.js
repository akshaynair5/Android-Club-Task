import { useContext } from "react";
import { Authcontext } from "../contextProvider";
import { signOut } from "firebase/auth";
import { auth } from "../firebase_config";

function Profile(){
    const {currentUser} = useContext(Authcontext)
    return(
        <div>
            <div>{currentUser.displayName}</div>
            <div>{currentUser.mobileNumber}</div>
            <div><img src={currentUser.photoURL}></img></div>
            <button onClick={()=>signOut(auth)} style={{width:'300px',height:'100px'}}>Logout</button>
        </div>
    )
}

export default Profile