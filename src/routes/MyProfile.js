import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import styles from './css/MyProfile.module.css'
import UserInfo from '../components/myProfile/UserInfo'
import Axios from 'axios'

const MyProfile = () => {
    const sectionName = "기본정보"

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchUser = async() => {
            setLoading(true);
            const res = await Axios.get('https://jsonplaceholder.typicode.com/users');
            setUser(res.data[0]);
            setLoading(false);
        }
        fetchUser();
    },[])
    //console.log(user);

    return (
        <div className = {styles.container}>
            <Header/>
            <div className = {styles.rowBox /*Body*/}>
                <div className = {styles.title}>MY PROFILE</div>
                <div>프로필 수정하기</div>
            </div>
            <div className = {styles.rowBox2}>
                <div className = {styles.nameBox}>
                    <div>Jyami</div>
                    <div>Backend Developer</div>
                </div>
                <div>프로필 동그라미</div>
                <div className ={styles.pageBox}>웹사이트</div>
                <div className ={styles.pageBox}>Github</div>
            </div>
            <div className = {styles.nav}>
                    <div className = {sectionName === "기본정보" ? styles.navNow : styles.navDefault}>기본 정보</div>
                    <div className = {sectionName === "나의커밋정보" ? styles.navNow : styles.navDefault}>나의 커밋 정보</div>
                    <div className = {sectionName === "통계" ? styles.navNow : styles.navDefault}>통계</div>
            </div>
        
            <UserInfo loading = {loading} user = {user} />
            {/*<UserInfo /> userInfo 불러와서 뿌려야야/ */}

        </div>
        )
}

export default MyProfile;