import React, {useState,useEffect} from 'react'
import './ProfileCard.css'
import axios from 'axios'

const ProfileCardLogged = () => {

    const [code, setCode] = useState([]);
    const [tokendata, setData] =useState([]);
 
    const CLIENT_SECRET = "6168825ba305ffaba05903c1ad9ad9f3d1e4229a";
    const CLIENT_ID = "de41637d8bc3a1cdd9bd";

    useEffect(() =>{
        /*
        const fetchData = async () =>{
            //setLoading(true);

            const res = await axios.get('https://github.com/login/oauth/authorize',{
                CLIENT_ID
            });
            
        }*/
        const url = window.location.href;
            const hasCode = url.includes("?code=")

            if(hasCode){
                const newUrl = url.split("?code=");
                setCode(newUrl[1]);
                console.log(newUrl[1]);
                console.log("code is :" + code);
            }

        const fetchToken = async () => {
            const res = await axios.post('https://github.com/login/oauth/access_token',
                {
                    code,
                    CLIENT_ID, // application의 정보
                    CLIENT_SECRET, // application의 정보
                },
                {
                    headers: {
                        accept: 'application/json',
                        "Access-Control-Allow-Origin" : "*"
                      },
                }
            )
            const tokendata = res.data.access_token;
            setData(tokendata);
            console.log("inside fetchdata");
        }
        //fetchData();
        fetchToken();
        console.log(tokendata);
        console.log(code);
    },[])
    
    return (
        <div className = "profileCard-container">
            <div className = "profile-title-logged">MY PROFILE</div>
            <div className = "username-profile">Jyami</div>
            <div className = "info-detail-profile">Backend Developer</div>
            <div className = "profile-rowContainer"> 
                <div className = "itembox-profile">
                    <div className = "subtitle-profile">EWHA RANKING 12등/1020점</div>
                    <div className = "profile-rowContainer-with-border">
                        <div className = "profile-box-with-border">
                            <div className = "commit-profile">총 커밋</div>
                            <div className = "number-profile">210</div>
                        </div>
                        <div className = "profile-box-no-border">
                            <div className = "commit-profile">연속 커밋</div>
                            <div className = "number-profile">23</div>
                        </div>
                    </div>
                </div>

                <div className = "itembox2-profile">
                    <div className = "subtitle-profile">커밋동산</div>
                    <div className = "contribution-profile">273 contributions last year</div>
                    <div className = "profile-graybox"></div>
                </div>
                
            </div>
        </div>
    )
}

export default ProfileCardLogged
