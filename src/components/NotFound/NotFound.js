import React from 'react';
import { useHistory } from 'react-router-dom';
import style from './NotFound.module.css'


const NotFound = () => {
    const history = useHistory()
    console.log(history);
    return(
        <div className={style.wrapper}>
            Not Found
        </div>
    )
}



export default NotFound;