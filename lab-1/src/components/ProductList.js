import React, { useState, useEffect } from 'react';
import Product from './Product';
import data from '../testData.json'

export default function ProductList(){
    const [products, setProducts] = useState(data)
    function increaseLike(product) {
      let resultList = products.filter(p=>p!==product)
      product.likes+=1
      resultList=[...resultList,product]
      resultList.sort((a,b)=>b.likes-a.likes)
      setProducts(resultList)
    }
    useEffect(()=>{
      let resultList = products
      resultList.sort((a,b)=>b.likes-a.likes)
      setProducts(resultList)

    },[])
  
    return (
      <>
      {console.log(products)}
        {products.map(product=>(
          <>
            <Product product={product}/>
            <button onClick={()=>increaseLike(product)}><p>{product.likes}</p></button>
            <hr/>
          </>
        ) )}
      </>
    );
}