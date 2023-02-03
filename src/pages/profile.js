import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../contextProvider";
import { signOut } from "firebase/auth";
import { auth } from "../firebase_config";
import { collection, query, where } from "firebase/firestore";
import { db } from "../firebase_config";
import { getDocs } from "firebase/firestore";

function Profile(){
    const {currentUser} = useContext(Authcontext)
    const [userInfo,setUserInfo] = useState('')
    const usersRef = collection(db, "users");
    const FetchMobNo = async ()=> {
        const q = query(usersRef, where("uid", "==", currentUser.uid))
        const querySnapShot = await getDocs(q)
        try{
            querySnapShot.forEach((doc)=>{
                setUserInfo(doc.data())
            })
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        FetchMobNo()
    },[])
    return(
        <div className="home">
            <p className="heading">Welcome {currentUser.displayName}!!</p>
            <div className="profileBox">
                <img src={currentUser.photoURL}></img>
                <div className="Info">
                    <div><p>Name: {currentUser.displayName}</p></div>
                    <div><p>Mobile Number: {userInfo.phoneNumber}</p></div>
                    <div><p>Email: {currentUser.email}</p></div>
                </div>
                <button onClick={()=>signOut(auth)}>Logout</button>
            </div>
        </div>
    )
}

export default Profile