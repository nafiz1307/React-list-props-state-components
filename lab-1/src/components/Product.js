import React, { useState } from 'react';

export default function Product({product}){
    const {imageUrl, productTitle, description, submitter} = product
    return(
        <>
        <img src={imageUrl} width="auto" height="250"/>,
        <p>{productTitle}</p>
        <p>{description}</p>
        <p><font size="4"> Submitted By: <img src={submitter} width="50" height="auto"/></font></p>
      </>
    )
}