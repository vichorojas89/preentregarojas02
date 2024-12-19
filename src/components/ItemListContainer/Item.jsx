import React from 'react'

const Item = ({product}) => {
  return (
    <div className="item">
    <img src={product.image} width={150} alt="" />
    <p>{product.name}</p>
    <p>Precio: ${product.price}.-</p>
    <p>Categoria: {product.category}</p>
</div>
  )
}

export default Item
