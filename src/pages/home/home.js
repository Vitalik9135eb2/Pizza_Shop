import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SearchContext } from '../../App';
import Pagination from '../../component/pagination/pagination';
import Categories from './../../component/categories/categories';
import PizzaItem from './../../component/pizza__item/pizzaItem';
import Sceleton from './../../component/pizza__item/sceleton';
import Sort, { sortListData } from './../../component/sort/sort';
import { selectorFilter, setCategoryId, setCurentPage } from '../../redux/slice/filterSlice';
import { fetchPizza, selectorPizza } from '../../redux/slice/pizzaSlice';

import axios from 'axios';
import qs from 'qs';
import { Link, useNavigate } from 'react-router-dom';
import NotFound from '../notFound/notFound';




const Home = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const isSearch = React.useRef(false)
    const isMounted = React.useRef(false)

    const { itemsPizza, status } = useSelector(selectorPizza)
    const { categoryId, sort, curentPage, searchValue } = useSelector(selectorFilter)



    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id))
    }
    const onChangePage = (number) => {
        dispatch(setCurentPage(number))
    }





    React.useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                sortProperty: sort.sortProperty,
                categoryId,
                curentPage
            })

            navigate(`?${queryString}`)

        }

        isMounted.current = true

    }, [categoryId, sort.sortProperty, curentPage])


    // React.useEffect(() => {

    //     if (window.location.search) {

    //         const params = qs.parse(window.location.search.substring(1))
    //     console.log(params)


    //         const sort = sortListData.find( obj => obj.sortProperty === params.sortProperty)

    //         dispatch(setFilters({
    //             ...params,
    //             sort
    //             })

    //         )
    //     }


    //     isSearch.current = true
    // }, [])




    //  let renderPizzaItems = itemsPizza.filter(items => {
    //     if (items.title.toLowerCase().includes(searchValue.toLowerCase())){  это для поиска по данным которые уже пришли ссетвера
    //         return true
    //     }
    //     return false
    // } )
    //     .map(item => <PizzaItem key={item.id} {...item} />)


    const getPizzas = async () => {

        const category = categoryId > 0 ? `category=${categoryId}` : ""
        const sortBy = sort.sortProperty.replace('-', '')
        const order = sort.sortProperty.includes('-') ? 'asc' : 'desc'
        const search = searchValue ? `&search=${searchValue}` : ""


        dispatch(fetchPizza({
            category,
            sortBy,
            order,
            search,
            curentPage
        }))

    }

    React.useEffect(() => {

        if (!isSearch.current) {
            getPizzas()
        }

        isSearch.current = false

    }, [categoryId, sort.sortProperty, searchValue, curentPage])




    let renderPizzaItems = itemsPizza.map(item => <Link key={item.id} to={`/pizza/${item.id}`}> <PizzaItem  {...item} /> </Link>)
    let sceletonItems = [...new Array(6)].map((_, i) => <Sceleton key={i} />)

    return (
        <>
            <div className="content__top">
                <Categories value={categoryId} setCategoryId={onChangeCategory} />
                <Sort />
            </div>


            <h2 className="content__title">Все пиццы</h2>

            <div className="content__items">
                {
                    status === "error" ? <NotFound />
                        : status === 'loading' ? sceletonItems : renderPizzaItems

                }


            </div>

            <Pagination curentPage={curentPage} onChangePage={onChangePage} />
        </>
    )
}

export default Home