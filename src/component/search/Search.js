import React, { useState } from "react";
import s from "./serch.module.scss";

import {SearchContext} from "./../../App"
import { useRef } from "react";
import debounce from "lodash.debounce";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/slice/filterSlice";


const Search = () => {

    const dispatch = useDispatch()
    const [value, setValue] = useState('')
    const inputRef = React.useRef()

    const onClickClear = () =>{
        dispatch(setSearchValue(""))
        setValue("")
        inputRef.current.focus()
    }   

    const updateSearchValue = React.useCallback(
        debounce((str) => {
            dispatch(setSearchValue(str))

        }, 500),

        []
    )

    const onChangeInput = event => {
        setValue(event.target.value)
        updateSearchValue(event.target.value)
    }

    return (

        <div className={s.wrap}>
            <input type="text"
                className={s.search}
                placeholder="Поиск пиццы по названию"
                onChange={(event) => onChangeInput(event)}
                value={value}
                ref={inputRef}
            />

            {value &&
                <button className={s.btn} onClick={() => onClickClear()}></button>
            }
        </div>
    )
}

export default Search