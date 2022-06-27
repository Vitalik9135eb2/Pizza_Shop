import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchPizza = createAsyncThunk('pizza/fetchPizzaStatus', async (params) => {
    const {category, sortBy, order, search, curentPage} = params

    const { data } = await axios.get(`https://626d16545267c14d5677d9c2.mockapi.io/items?page=${curentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`)
      return data
    }
  )

const initialState = {
    itemsPizza: [],
    status:  "loading",    // laoding, success, error    

}  


const pizzaSlice = createSlice({
    name:'pizza',
    initialState,
    reducers: {
        setItemsPizza(state, action){
            state.itemsPizza = action.payload
        }
        
    },

    extraReducers:{
        [fetchPizza.pending]: (state) => {
            state.status = "loading"
            state.itemsPizza = []
        },
        [fetchPizza.fulfilled]: (state, action) => {
            state.itemsPizza = action.payload;
            state.status = "success"
        },
        [fetchPizza.rejected]: (state, action) => {
            state.status = "error"
            state.itemsPizza = []
        }

    }
})




export const selectorPizza = state => state.pizzaSlice

export const {setItemsPizza} = pizzaSlice.actions

export default pizzaSlice.reducer