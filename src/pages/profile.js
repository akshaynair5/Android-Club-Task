import { useContext } from "react";
import { Authcontext } from "../contextProvider";
import { signOut } from "firebase/auth";
import { auth } from "../firebase_config";

function Profile(){
    const {currentUser} = useContext(Authcontext)
    return(
        <div className="home">
            <p className="heading">Welcome {currentUser.displayName}!!</p>
            <div className="profileBox">
                <img src={currentUser.photoURL}></img>
                <div className="Info">
                    <div><p>Name: {currentUser.displayName}</p></div>
                    <div><p>Mobile Number: {currentUser.phoneNumber}</p></div>
                    <div><p>Email: {currentUser.email}</p></div>
                </div>
                <button onClick={()=>signOut(auth)}>Logout</button>
            </div>
        </div>
    )
}

export default Profile