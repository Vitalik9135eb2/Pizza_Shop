import React from 'react'

import s from './notFoundChart.module.scss'

import notFoundChartImg from './../../assets/img/Layer 2.png'
import { Link } from 'react-router-dom'



const NotFoundChart = () => {

    return (
        <div className={s.wrapper}>
            <h2 className={s.title}>Корзина пустая 😕</h2>
            <p className={s.text}>
                Вероятней всего, вы не заказывали ещё пиццу.
                Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>

            <img className={s.img} src={notFoundChartImg} alt="" />

            <Link to="/" className={s.btn}>Вернуться назад</Link>

        </div>
    )
}

export default NotFoundChart