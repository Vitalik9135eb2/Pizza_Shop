import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    searchValue: "",
    categoryId: 0,
    curentPage: 1,
    
    sort:{
        
        name: "поулярности(DESC)", 
        sortProperty: "rating" 
    },
    

}  


const filterSlice = createSlice({
    name:'filter',
    initialState,
    reducers: {
        setCategoryId(state, action) {
            state.categoryId = action.payload
        },

        setSort(state, action) {
            state.sort = action.payload
        },
        

        setCurentPage(state, action){
            state.curentPage = action.payload
        },
        setSearchValue(state,action){
            state.searchValue = action.payload
        }

        // setFilters(state, action) {

        //     state.sort = action.payload.sort.sortProperty, 
        //     state.curentPage = Number(action.payload.curentPage),
        //     state.categoryId = Number(action.payload.categoryId)

        // }

    }
})

export const selectorFilter = state => state.filterSlice

export const  {setCategoryId, setSort, setCurentPage, setFilters, setSearchValue } = filterSlice.actions

export default filterSlice.reducer