import React from 'react'

const Categories = ({ value, setCategoryId }) => {

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']



  let categoriesItem = categories.map((el, i) => {
    return <li className={value === i ? "active" : " "} onClick={() => setCategoryId(i)} key={i}>{el}</li>
  })


  return (

    <div className="categories">
      <ul>
        {categoriesItem}
      </ul>
    </div>
  );
}

export default Categories;