import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './notFoundChart.module.scss'


const NotFound = () => {

    return(
       <>
        <div className={s.wrapper}>
            <h2 className={s.title}>Ничего не найдено .....😕</h2>
            <p className={s.text}>
                К сожалению данная страница отсутствует в нашем интернет-магазине
            </p>


            <NavLink className={s.btn} to={"/"}>Вернуться назад</NavLink>
            <b ></b>

        </div>
       </>
    )
}

export default NotFound