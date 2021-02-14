/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

export default (props) => (

    <table className="table table-hover">

        <thead>
            <tr>
                <th>Nome do Produto</th>
                <th>SKU</th>
                <th>Preço</th>
                <th>Fornecedor</th>
                <th></th>
            </tr>
        </thead>

        <tbody>
            {
               props.products.map((product, index) => {
                    return (
                        <tr key={index}>
                            <th>{product.productName}</th>
                            <th>{product.sku}</th>
                            <th>{product.price}</th>
                            <th>{product.provider}</th>
                            <th>
                                <button onClick={() => props.editAction(product.sku)} className="btn btn-primary">Editar</button>
                                <button onClick={() => props.deleteAction(product.sku)} className="btn btn-danger">Remover</button>
                            </th>
                        </tr>
                    )
                })
            }
        </tbody>

    </table>

)