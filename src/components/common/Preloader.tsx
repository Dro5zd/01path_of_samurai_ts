import React from 'react';
import loading from '../../assets/img/Dual Ball-1.3s-108px.svg';
import  s from './Preloader.module.css'

export const Preloader = () => {
    return (
        <div className={s.preloader}>
            <img src={loading} alt="loading"/>
        </div>
    );
};