import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";


const FullPizza = () => {

    const [pizza, setPizza ] = React.useState()
    const { id } = useParams()

  
    React.useEffect(() => {
        async function fetchPizza() {
          try {
            const { data } = await axios.get('https://626d16545267c14d5677d9c2.mockapi.io/items/' + id);
            setPizza(data);
          } catch (error) {
            alert('Ошибка при получении пиццы!');
          }
        }
    
        fetchPizza();
      }, []); 


    if(!pizza){
        return <div className="">Загрузка.....</div>
    }

    return (
        <div className="">
            <img src={pizza.imageUrl} alt="" />
            <h2>{pizza.title}</h2>
            <span>{pizza.price}</span>

            <div className="">{id}</div>
        </div>
    )
}


export default FullPizza