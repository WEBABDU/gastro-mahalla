import React from 'react';
import style from './Select.module.css';



export const Select = ({children}) => {
    return (
        <div className={style.selectWrapper}>
            {children}
        </div>
    )
}
