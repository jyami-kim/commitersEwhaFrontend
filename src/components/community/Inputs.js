import React, {useState} from 'react'
import styles from './Input.module.css'
import searchIcon from '../../assets/icon/icon_search@3x.png' 

const Inputs = () => {
    const [search, setSearch] = useState('');
     
    const onTextInput = (e) => {
        setSearch(e.target.value);
    };
 
    return (
        <div className = {styles.container}>
           <input type = "text" placeholder = "검색어를 입력하세요" value ={search} onChange = {onTextInput} className = {styles.input}/>
           {console.log("지금입력하고있음: " + search)}
            <img src={searchIcon} alt="search icon" className = {styles.icon}/>
        </div>
    )
}

export default Inputs;