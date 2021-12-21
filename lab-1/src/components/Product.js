import React, { useState } from 'react';

export default function Product({product}){
    const {imageUrl, productTitle, description, submitter} = product
    return(
        <>
        <img src={imageUrl} width="auto" height="300"/>,
        <p>{productTitle}</p>
        <p>{description}</p>
        <p><font size="5"> Submitted By: <img src={submitter} width="100" height="auto"/></font></p>
      </>
    )
}