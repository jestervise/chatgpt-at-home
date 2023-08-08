import { useEffect, useState } from "react";
import { UserData } from "../../types";
import Subscribe from "../SubscribeAndFollow/Subscribe";
import Follow from "../SubscribeAndFollow/Follow";
import VideoList from "../VideoList/VideoList";

function UserProfile(){
    const profilePicture = 'a';
    const [userData, setUserData] = useState<UserData>()

    useEffect(()=>{
        //get the user profile data
        console.log(userData);
        setUserData(undefined);
    }, [userData]);

    return <div className="user-profile">
        <div>
            {profilePicture? 
                <img src={profilePicture} className="profile-picture"/>: 
                <div className="profile-picture placeholder"/>
            }
            <Subscribe/>
            <Follow/>
        </div>
        <div className="video-stats">
           <p>{userData?.userStat.followerCount}</p>
           <p>followers</p>
           <p>{userData?.userStat.subscriberCount}</p>
           <p>subscribers</p>
           <p>{userData?.videoStat.videoCount}</p>
           <p>Videos</p>
           <p>{userData?.videoStat.viewCount}</p>
           <p>total view</p>
        </div>
        <div className="user-stats">
           <p>Country: </p><p>{userData?.country}</p>
         
           <p>total view</p>
        </div>
        <div>
            <h2>Videos</h2>
            <VideoList/>
        </div>
    </div>
}

export default UserProfile